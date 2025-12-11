// server/api/contact.post.ts

import { defineEventHandler, readBody, createError, getRequestIP } from 'h3';
import nodemailer from 'nodemailer';
import { z } from 'zod';

/**
 * 1. Schéma de validation des données du formulaire
 */
const contactSchema = z.object({
  firstname: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
  lastname: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Email invalide" }),
  phone: z.string().min(10, { message: "Numéro de téléphone invalide" }),
  message: z.string().min(10, { message: "Message trop court" }),
  subject: z.string().min(5, { message: "Sujet requis" }),
  hasDeadline: z.enum(['oui', 'non']).optional(),
  deadlineDate: z.string().optional(),
  privacy: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
});

type ContactData = z.infer<typeof contactSchema>;

/**
 * 2. Rate limiting basique par IP (en mémoire, adapté à un seul serveur Node)
 *    → 1 requête / 60 secondes / IP
 */
const RATE_WINDOW_MS = 60_000; // 60 secondes
const ipLastRequest = new Map<string, number>();

/**
 * 3. Helper pour valider les variables d'environnement
 */
function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    // On log côté serveur, mais on ne fuit pas la valeur dans la réponse HTTP
    console.error(`[CONTACT_API] Variable d'environnement manquante: ${name}`);
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

/**
 * 4. Configuration SMTP & transporter réutilisé
 *    → Créé UNE SEULE FOIS au chargement du module
 */
const SMTP_HOST = requiredEnv('SMTP_HOST');
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = requiredEnv('SMTP_USER');
const SMTP_PASS = requiredEnv('SMTP_PASS');
const FIRM_EMAIL = requiredEnv('FIRM_EMAIL'); // Adresse de l'étude

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465, // true pour 465, false pour 587/2525
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
  connectionTimeout: 10_000,
  greetingTimeout: 10_000,
});

let smtpVerified = false;

/**
 * Vérification paresseuse (lazy) de la connexion SMTP
 * → On vérifie une fois, à la première requête qui en a besoin
 */
async function ensureSmtpReady() {
  if (smtpVerified) return;

  try {
    await transporter.verify();
    smtpVerified = true;
    console.log('[CONTACT_API] SMTP ready ✔');
  } catch (err) {
    console.error('[CONTACT_API] SMTP Connection Error:', err);
    throw createError({
      statusCode: 503,
      message: 'Service de messagerie temporairement indisponible. Veuillez réessayer plus tard.',
    });
  }
}

/**
 * 5. Handler principal
 */
export default defineEventHandler(async (event) => {
  try {
    /**
     * a) Rate limiting par IP
     */
    const clientIp = getRequestIP(event, { xForwardedFor: true }) || 'unknown';
    const now = Date.now();

    if (clientIp !== 'unknown') {
      const last = ipLastRequest.get(clientIp) ?? 0;

      if (now - last < RATE_WINDOW_MS) {
        const remaining = Math.ceil((RATE_WINDOW_MS - (now - last)) / 1000);
        throw createError({
          statusCode: 429,
          message: `Veuillez patienter ${remaining} seconde(s) avant de renvoyer un message.`,
        });
      }

      ipLastRequest.set(clientIp, now);
    }

    /**
     * b) Lecture & validation du corps de requête
     */
    const body = await readBody(event);

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      console.warn('[CONTACT_API] Validation error:', fieldErrors);

      throw createError({
        statusCode: 400,
        message: 'Validation Error',
        data: fieldErrors,
      });
    }

    const { firstname, lastname, email, phone, subject, message, hasDeadline, deadlineDate } = result.data as ContactData;

    /**
     * c) Vérification du SMTP (une seule fois)
     */
    await ensureSmtpReady();

    /**
     * d) Envoi des emails
     */

    

    // 2. Notification à l'étude
    await transporter.sendMail({
      from: `"Pont-Rouge by Clegal-Avocats" <${FIRM_EMAIL}>`,
      to: FIRM_EMAIL,
      replyTo: email,
      subject: `Nouveau Lead: ${lastname} ${firstname}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #ffffff; border-radius: 8px; border: 1px solid #e5e7eb; overflow: hidden;">
            <div style="background-color: #f3f4f6; padding: 16px 24px; border-bottom: 1px solid #e5e7eb;">
              <h2 style="color: #1f2937; margin: 0; font-size: 18px; font-weight: 600;">Nouvelle demande de contact</h2>
            </div>
            
            <div style="padding: 24px;">
              <div style="display: grid; gap: 16px;">
                <div style="display: grid; grid-template-columns: 100px 1fr; gap: 12px; align-items: baseline;">
                  <span style="color: #6b7280; font-size: 14px; font-weight: 500;">Nom complet</span>
                  <span style="color: #111827; font-size: 15px; font-weight: 500;">${lastname} ${firstname}</span>
                </div>
                
                <div style="display: grid; grid-template-columns: 100px 1fr; gap: 12px; align-items: baseline;">
                  <span style="color: #6b7280; font-size: 14px; font-weight: 500;">Email</span>
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-size: 15px;">${email}</a>
                </div>

                <div style="display: grid; grid-template-columns: 100px 1fr; gap: 12px; align-items: baseline;">
                  <span style="color: #6b7280; font-size: 14px; font-weight: 500;">Téléphone</span>
                  <span style="color: #111827; font-size: 15px;">${phone}</span>
                </div>
              </div>

              <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #f3f4f6;">
                <span style="display: block; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Sujet</span>
                <div style="background-color: #f9fafb; padding: 16px; border-radius: 6px; color: #374151; line-height: 1.5; font-size: 15px;">
                  ${subject}
                </div>
              </div>

               <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #f3f4f6;">
                <span style="display: block; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message du client</span>
                <div style="background-color: #fff; padding: 16px; border: 1px solid #e5e7eb; border-radius: 6px; color: #374151; line-height: 1.5; font-size: 15px; white-space: pre-wrap;">${message}</div>
              </div>

              <div style="margin-top: 16px;">
                <span style="display: block; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Délai imparti par l'autorité ?</span>
                <div style="display: flex; gap: 12px; align-items: center;">
                    <span style="background-color: ${hasDeadline === 'oui' ? '#fee2e2' : '#f3f4f6'}; color: ${hasDeadline === 'oui' ? '#991b1b' : '#374151'}; padding: 4px 12px; border-radius: 999px; font-size: 14px; font-weight: 500;">
                        ${hasDeadline === 'oui' ? 'OUI' : 'NON'}
                    </span>
                    ${hasDeadline === 'oui' && deadlineDate ? `<span style="color: #ef4444; font-weight: 600; font-size: 14px;">Date: ${deadlineDate}</span>` : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    // 1. Auto-réponse au client
    await transporter.sendMail({
      from: `"Pont-Rouge Avocats" <${FIRM_EMAIL}>`,
      to: email,
      subject: 'Confirmation de votre demande - Pont-Rouge Avocats',
      text: `Chère Madame, cher Monsieur,

Nous accusons bonne réception de votre demande concernant "${subject}" et vous en remercions.

Notre équipe prendra prochainement contact avec vous.

Dans l’intervalle, nous vous prions de nous croire, chère Madame, cher Monsieur, vos dévoués.

L'équipe Pont-Rouge Avocats`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background-color: #f8f9fa;">
          <div style="background-color: #ffffff; padding: 40px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); border: 1px solid #eef0f2;">
            <h2 style="color: #1a1a1a; margin-top: 0; margin-bottom: 24px; font-weight: 300; font-size: 24px; letter-spacing: -0.5px;">Pont-Rouge Avocats</h2>
            
            <p style="color: #4a4a4a; line-height: 1.6; margin-bottom: 16px; font-size: 16px;">
              Chère Madame, cher Monsieur,
            </p>
            
            <p style="color: #4a4a4a; line-height: 1.6; margin-bottom: 16px; font-size: 16px;">
              Nous accusons bonne réception de votre demande concernant <strong>"${subject}"</strong> et vous en remercions.
            </p>

            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 6px; margin-bottom: 24px; color: #374151; font-style: italic;">
              "${message}"
            </div>
            
            <p style="color: #4a4a4a; line-height: 1.6; margin-bottom: 32px; font-size: 16px;">
              Notre équipe prendra prochainement contact avec vous.
            </p>
            
            <hr style="border: none; border-top: 1px solid #f0f0f0; margin: 32px 0;">
            
            <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin-bottom: 0;">
              Dans l’intervalle, nous vous prions de nous croire, chère Madame, cher Monsieur, vos dévoués.
            </p>
            
            <p style="color: #1a1a1a; font-weight: 500; font-size: 14px; margin-top: 20px;">
              L'équipe Pont-Rouge Avocats
            </p>
          </div>
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #9ca3af; font-size: 12px;">© ${new Date().getFullYear()} Pont-Rouge Avocats. Tous droits réservés.</p>
          </div>
        </div>
      `,
    });

    /**
     * e) Réponse au frontend
     */
    return {
      success: true,
      message: 'Votre demande a bien été envoyée. Nous vous contacterons dans les plus brefs délais.',
    };
  } catch (error: any) {
    // Si c'est déjà une erreur H3, on la relance telle quelle
    if (error.statusCode) {
      throw error;
    }

    console.error('[CONTACT_API] Unhandled error:', error);

    throw createError({
      statusCode: 500,
      message: 'Une erreur interne est survenue. Veuillez réessayer plus tard.',
    });
  }
});
