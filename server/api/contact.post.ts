
import { defineEventHandler, readBody } from 'h3';
// import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    // TODO: Configure SMTP Transport

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.example.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // 1. Send Auto-reply to Client
    await transporter.sendMail({
        from: `"Pont-Rouge Avocats" <${process.env.FIRM_EMAIL}>`,
        to: body.email,
        subject: "Pont-Rouge Avocats : Votre demande de rendez-vous",
        text: `Chère Madame, cher Monsieur,\n\nNous accusons bonne réception de votre demande et vous en remercions. Nous prendrons prochainement contact avec vous.\n\nDans l’intervalle, nous vous prions de nous croire, chère Madame, cher Monsieur, vos dévoués.`
    });

    // 2. Send Notification to Firm
    await transporter.sendMail({
        from: '"Website Form" <noreply@clegal-avocats.ch>',
        to: process.env.FIRM_EMAIL,
        subject: `Nouveau Lead: ${body.nom} ${body.prenom}`,
        text: JSON.stringify(body, null, 2)
    });


    return { success: true, message: 'Email sent successfully (simulated)' };
});
