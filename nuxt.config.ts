import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap', '@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    domains: ['hoirqrkdgbmvpwutwuwj.supabase.co', 'images.unsplash.com']
  } as any,
  site: {
    url: 'https://clegal-avocats.ch',
    name: 'Pont-Rouge Avocats',
  },
  app: {
    head: {
      title: "Avocat Genève | Étude à Genève Pont-Rouge (Acacias) - Dès 155.-",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Avocats aux Acacias (Genève) experts en Droit du Travail, Famille & Pénal. Défense rigoureuse devant tous les tribunaux. 1er RDV d'analyse à CHF 155.-" },
        { name: "keywords", content: "avocats genève, expertise juridique, conseil stratégique" },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Pont-Rouge Avocats Genève" },
        { name: "theme-color", content: "#ffffff" },
        { name: "og:title", content: "Avocat Genève | Étude à Genève Pont-Rouge (Acacias) - Dès 155.-" },
        { name: "og:description", content: "Avocats aux Acacias (Genève) experts en Droit du Travail, Famille & Pénal. Défense rigoureuse devant tous les tribunaux. 1er RDV d'analyse à CHF 155.-" },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://clegal-avocats.ch/" },
        { name: "og:image", content: "https://clegal-avocats.ch/logo.svg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "PONT-ROUGE by Clegal-Avocats" },
        { name: "twitter:description", content: "Avocats aux Acacias (Genève) experts en Droit du Travail, Famille & Pénal. Défense rigoureuse devant tous les tribunaux. 1er RDV d'analyse à CHF 155.-" },
        { name: "twitter:image", content: "https://clegal-avocats.ch/logo.svg" },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'canonical', href: 'https://clegal-avocats.ch/' }
      ],
      script: [
        { src: "https://unpkg.com/lucide@latest" },
        { src: "https://www.google.com/recaptcha/api.js?render=explicit", async: true, defer: true }
      ],
      style: [
        {
          innerHTML: `
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