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
  recaptchaToken: z.string().min(1, { message: "Veuillez valider le filtre anti-robot" }),
});

type ContactData = z.infer<typeof contactSchema>;

/**
 * 2. Rate limiting basique par IP (en mémoire, adapté à un seul serveur Node)
 *    → 1 requête / 60 secondes / IP
 */
const RATE_WINDOW_MS = 10_000; // 10 secondes
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

    const { firstname, lastname, email, phone, subject, message, hasDeadline, deadlineDate, recaptchaToken } = result.data as ContactData;

    /**
     * c0) Vérification Recaptcha
     */
    const recaptchaSecret = requiredEnv('NUXT_RECAPTCHA_SECRET_KEY');
    
    // Appel à l'API Google
    const verifyResponse = await $fetch<{ success: boolean, 'error-codes'?: string[] }>('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        params: {
            secret: recaptchaSecret,
            response: recaptchaToken
        }
    });

    if (!verifyResponse.success) {
        console.warn('[CONTACT_API] Recaptcha failed:', verifyResponse['error-codes']);
        throw createError({
            statusCode: 400,
            message: 'Validation anti-robot échouée. Veuillez réessayer.'
        });
    }

    /**
     * c) Vérification du SMTP (une seule fois)
     */
    await ensureSmtpReady();

    /**
     * d) Envoi des emails
     */

    

// 2. Notification à l'étude (Updated)
    await transporter.sendMail({
      from: `"PONT-ROUGE by Clegal-Avocats" <${FIRM_EMAIL}>`,
      to: FIRM_EMAIL,
      replyTo: email,
      subject: `Nouveau Lead: ${lastname} ${firstname}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau Lead</title>
        </head>
        <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 20px;">
          
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025);">
            
            <!-- Logo Header -->
            <div style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
               <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                      <td style="vertical-align: middle; padding-right: 10px;">
                          <div style="height: 24px; width: 4px; background-color: #7f1d1d; border-radius: 9999px;"></div>
                      </td>
                      <td style="vertical-align: middle;">
                           <span style="font-size: 18px; font-weight: 700; letter-spacing: -0.025em; color: #0f172a; text-transform: uppercase;">
                              PONT-ROUGE <span style="color: #94a3b8; font-weight: 400; text-transform: none;">by Clegal-Avocats</span>
                          </span>
                      </td>
                  </tr>
              </table>
            </div>

            <h1 style="color: #111827; font-size: 24px; font-weight: 600; margin: 0 0 24px 0; letter-spacing: -0.5px;">
              Nouvelle demande de contact
            </h1>
            
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;">
                
                <tr>
                  <td style="padding-bottom: 16px; width: 30%; color: #64748b; font-size: 14px; font-weight: 500;">Nom complet</td>
                  <td style="padding-bottom: 16px; color: #0f172a; font-size: 15px; font-weight: 500;">${lastname} ${firstname}</td>
                </tr>
                
                <tr>
                  <td style="padding-bottom: 16px; width: 30%; color: #64748b; font-size: 14px; font-weight: 500;">Email</td>
                  <td style="padding-bottom: 16px;">
                    <a href="mailto:${email}" style="color: #b91c1c; text-decoration: none; font-size: 15px; font-weight: 500;">${email}</a>
                  </td>
                </tr>

                <tr>
                  <td style="padding-bottom: 16px; width: 30%; color: #64748b; font-size: 14px; font-weight: 500;">Téléphone</td>
                  <td style="padding-bottom: 16px; color: #0f172a; font-size: 15px;">${phone}</td>
                </tr>

                <tr>
                  <td style="padding-top: 16px; border-top: 1px solid #e2e8f0; width: 30%; color: #64748b; font-size: 14px; font-weight: 500; vertical-align: top;">Sujet</td>
                  <td style="padding-top: 16px; border-top: 1px solid #e2e8f0; color: #0f172a; font-size: 15px; font-weight: 500; line-height: 1.5;">${subject}</td>
                </tr>

              </table>
            </div>

            <div style="margin-top: 32px;">
              <div style="color: #64748b; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Message du client</div>
              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; color: #334155; line-height: 1.6; font-size: 15px; white-space: pre-wrap; font-family: 'Menlo', 'Monaco', 'Courier New', monospace; font-size: 14px;">${message}</div>
            </div>

            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #f1f5f9; display: flex; align-items: center; justify-content: space-between;">
              <span style="color: #64748b; font-size: 14px; font-weight: 500;">Délai impératif ?</span>
              <div style="display: inline-flex; align-items: center; gap: 8px;">
                   <span style="background-color: ${hasDeadline === 'oui' ? '#fef2f2' : '#f1f5f9'}; color: ${hasDeadline === 'oui' ? '#b91c1c' : '#64748b'}; padding: 6px 14px; border-radius: 9999px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.025em;">
                      ${hasDeadline === 'oui' ? 'OUI' : 'NON'}
                  </span>
                  ${hasDeadline === 'oui' && deadlineDate ? `<span style="color: #ef4444; font-weight: 600; font-size: 14px; margin-left: 8px;">Pour le: ${deadlineDate}</span>` : ''}
              </div>
            </div>

          </div>
          
          <div style="text-align: center; margin-top: 24px; color: #94a3b8; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Pont-Rouge Avocats. Système de notification interne.
          </div>

        </body>
        </html>
      `,
    });

    // 1. Auto-réponse au client (Updated)
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
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Confirmation de réception</title>
        </head>
        <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 40px 20px;">
          
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; padding: 48px 40px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.03), 0 4px 6px -2px rgba(0, 0, 0, 0.02);">
            
            <!-- Logo Header -->
            <div style="margin-bottom: 40px; text-align: left;">
               <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                  <tr>
                      <td style="vertical-align: middle; padding-right: 10px;">
                          <div style="height: 24px; width: 4px; background-color: #7f1d1d; border-radius: 9999px;"></div>
                      </td>
                      <td style="vertical-align: middle;">
                           <a href="https://pont-rouge-avocats.ch" style="text-decoration: none; font-size: 18px; font-weight: 700; letter-spacing: -0.025em; color: #0f172a; text-transform: uppercase;">
                              Pont-Rouge <span style="color: #94a3b8; font-weight: 400; text-transform: none;">by Clegal-Avocats</span>
                          </a>
                      </td>
                  </tr>
              </table>
            </div>
            
            <p style="color: #334155; line-height: 1.7; margin-bottom: 24px; font-size: 16px;">
              Chère Madame, cher Monsieur,
            </p>
            
            <p style="color: #334155; line-height: 1.7; margin-bottom: 32px; font-size: 16px;">
              Nous accusons bonne réception de votre demande concernant <strong style="color: #0f172a;">"${subject}"</strong> et vous en remercions.
            </p>

            <div style="background-color: #f8fafc; border-left: 4px solid #7f1d1d; padding: 20px 24px; border-radius: 0 8px 8px 0; margin-bottom: 32px; color: #475569; font-style: italic; line-height: 1.6;">
              "${message}"
            </div>
            
            <p style="color: #334155; line-height: 1.7; margin-bottom: 40px; font-size: 16px;">
              Notre équipe prendra prochainement contact avec vous pour donner suite à votre sollicitation.
            </p>
            
            <div style="border-top: 1px solid #f1f5f9; padding-top: 32px;">
              <p style="color: #64748b; font-size: 15px; line-height: 1.6; margin-bottom: 8px;">
                Dans l’intervalle, nous vous prions de nous croire, chère Madame, cher Monsieur, vos dévoués.
              </p>
              
              <p style="color: #0f172a; font-weight: 600; font-size: 15px; margin-top: 24px;">
                L'équipe PONT-ROUGE by Clegal-Avocats
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 32px;">
            <p style="color: #94a3b8; font-size: 13px; margin-bottom: 8px;">© ${new Date().getFullYear()} PONT-ROUGE by Clegal-Avocats. Tous droits réservés.</p>
            <div style="font-size: 12px;">
               <a href="#" style="color: #cbd5e1; text-decoration: none; margin: 0 8px;">Mentions légales</a>
               <span style="color: #e2e8f0;">•</span>
               <a href="#" style="color: #cbd5e1; text-decoration: none; margin: 0 8px;">Contact</a>
            </div>
          </div>
        </body>
        </html>
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
