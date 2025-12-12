import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Pont-Rouge Avocats Genève",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Cabinet d'avocats à Genève. Expertise juridique et conseil stratégique." },
        { name: "keywords", content: "avocats genève, expertise juridique, conseil stratégique" },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Pont-Rouge Avocats Genève" },
        { name: "theme-color", content: "#ffffff" },
        { name: "og:title", content: "Pont-Rouge Avocats Genève" },
        { name: "og:description", content: "Cabinet d'avocats à Genève. Expertise juridique et conseil stratégique." },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://pont-rouge-avocats-genève.com" },
        { name: "og:image", content: "https://pont-rouge-avocats-genève.com/images/og-image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Pont-Rouge Avocats Genève" },
        { name: "twitter:description", content: "Cabinet d'avocats à Genève. Expertise juridique et conseil stratégique." },
        { name: "twitter:image", content: "https://pont-rouge-avocats-genève.com/images/og-image.jpg" },
      ],
      script: [
        { children: "tailwind.config = { darkMode: 'class' }" },
        { src: "https://cdn.tailwindcss.com" },
        { src: "https://unpkg.com/lucide@latest" },
        { src: "https://www.google.com/recaptcha/api.js?render=explicit", async: true, defer: true }
      ],
      style: [
        { children: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
          :root { color-scheme: light; }
          body { font-family: 'Inter', sans-serif; font-feature-settings: "cv11", "ss01"; }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-track { background: #f1f5f9; }
          ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
          ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
          .bg-grid-slate {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(226, 232, 240, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.5) 1px, transparent 1px);
          }
        `}
      ]
    }
  },
  vite: {
    server: {
        allowedHosts: ['georgianna-lowerable-laurene.ngrok-free.dev'],
    },
  },
  runtimeConfig: {
    // Private keys (server-side only)
    smtpHost: process.env.SMTP_HOST,
    smtpPort: process.env.SMTP_PORT,
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    firmEmail: process.env.FIRM_EMAIL,
    recaptchaSecretKey: process.env.NUXT_RECAPTCHA_SECRET_KEY,
    // Public keys (client-side)
    public: {
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY
    }
  }
  // Trigger rebuild for env vars
})