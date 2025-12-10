import { defineEventHandler, readBody, createError } from 'h3';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
    firstname: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
    lastname: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
    email: z.string().email({ message: "Email invalide" }),
    phone: z.string().min(10, { message: "Numéro de téléphone invalide" }),
    subject: z.string().min(5, { message: "Sujet requis" }),
    privacy: z.boolean().refine(val => val === true, { message: "Vous devez accepter la politique de confidentialité" }),
});

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        
        // Validation
        const result = contactSchema.safeParse(body);
        if (!result.success) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Validation Error',
                data: result.error.flatten().fieldErrors
            });
        }

        const { firstname, lastname, email, phone, subject } = result.data;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Verify connection configuration
        try {
            await transporter.verify();
        } catch (error) {
            console.error('SMTP Connection Error:', error);
            throw createError({
                statusCode: 500,
                statusMessage: 'Service de messagerie indisponible temporairement.'
            });
        }

        // 1. Send Auto-reply to Client
        await transporter.sendMail({
            from: `"Pont-Rouge Avocats" <${process.env.FIRM_EMAIL}>`,
            to: email,
            subject: "Pont-Rouge Avocats : Votre demande de rendez-vous",
            text: `Chère Madame, cher Monsieur,\n\nNous accusons bonne réception de votre demande concernant "${subject}" et vous en remercions. Nous prendrons prochainement contact avec vous.\n\nDans l’intervalle, nous vous prions de nous croire, chère Madame, cher Monsieur, vos dévoués.`
        });

        // 2. Send Notification to Firm
        await transporter.sendMail({
            from: '"Website Form" <noreply@clegal-avocats.ch>',
            to: process.env.FIRM_EMAIL,
            replyTo: email,
            subject: `Nouveau Lead: ${lastname} ${firstname}`,
            html: `
                <h2>Nouvelle demande de contact</h2>
                <ul>
                    <li><strong>Nom:</strong> ${lastname}</li>
                    <li><strong>Prénom:</strong> ${firstname}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Téléphone:</strong> ${phone}</li>
                    <li><strong>Sujet:</strong> ${subject}</li>
                </ul>
            `
        });

        return { success: true, message: 'Demande envoyée avec succès' };

    } catch (error: any) {
        // If it's already an H3 error, rethrow it
        if (error.statusCode) throw error;

        console.error('Unhandled Contact Error:', error);
        throw createError({
            statusCode: 500,
            statusMessage: "Une erreur interne est survenue. Veuillez réessayer plus tard."
        });
    }
});
