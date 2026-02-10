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
    name: 'Clegal Avocats',
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  app: {
    head: {
      title: "Avocat Genève | Clegal Avocats – Étude Pont-Rouge – Dès 155.-",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Cabinet d'avocats à Genève (Acacias). Expertise droit pénal, famille, travail & immigration. 1er RDV à 155.-. 7 avocats à votre service." },
        { name: "keywords", content: "avocat genève, clegal avocats, cabinet avocat genève, droit pénal, droit famille, droit travail" },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Clegal Avocats" },
        { name: "theme-color", content: "#ffffff" },
        { property: "og:title", content: "Avocat Genève | Clegal Avocats – Étude Pont-Rouge – Dès 155.-" },
        { property: "og:description", content: "Cabinet d'avocats à Genève (Acacias). Expertise droit pénal, famille, travail & immigration. 1er RDV à 155.-. 7 avocats à votre service." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://clegal-avocats.ch/" },
        { property: "og:image", content: "https://clegal-avocats.ch/logo.svg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Avocat Genève | Clegal Avocats" },
        { name: "twitter:description", content: "Cabinet d'avocats à Genève (Acacias). Expertise droit pénal, famille, travail & immigration. 1er RDV à 155.-. 7 avocats à votre service." },
        { name: "twitter:image", content: "https://clegal-avocats.ch/logo.svg" },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        // Google Fonts avec preload pour éviter le render-blocking
        { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap', as: 'style', onload: "this.onload=null;this.rel='stylesheet'" },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap', media: 'print', onload: "this.media='all'" }
      ],
      script: [
        // Google Analytics 4 - différé pour ne pas bloquer le rendu
        { src: "https://www.googletagmanager.com/gtag/js?id=G-CJQF3LS3C2", async: true, defer: true },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CJQF3LS3C2');

          // Tracking des conversions
          document.addEventListener('DOMContentLoaded', function() {
            // Clic sur téléphone
            document.querySelectorAll('a[href^="tel:"]').forEach(function(el) {
              el.addEventListener('click', function() {
                gtag('event', 'phone_click', {
                  event_category: 'contact',
                  event_label: el.href.replace('tel:', '')
                });
              });
            });

            // Clic sur email
            document.querySelectorAll('a[href^="mailto:"]').forEach(function(el) {
              el.addEventListener('click', function() {
                gtag('event', 'email_click', {
                  event_category: 'contact',
                  event_label: el.href.replace('mailto:', '')
                });
              });
            });

            // Soumission de formulaire
            document.querySelectorAll('form').forEach(function(form) {
              form.addEventListener('submit', function() {
                gtag('event', 'form_submit', {
                  event_category: 'conversion',
                  event_label: 'contact_form'
                });
              });
            });

            // Scroll à 90%
            var scrollTracked = false;
            window.addEventListener('scroll', function() {
              if (!scrollTracked) {
                var scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight * 100;
                if (scrollPercent >= 90) {
                  gtag('event', 'scroll_90', {
                    event_category: 'engagement',
                    event_label: window.location.pathname
                  });
                  scrollTracked = true;
                }
              }
            });
          });`,
          type: 'text/javascript'
        }
      ],
      style: [
        {
          innerHTML: `
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
  nitro: {
    compressPublicAssets: true,
    // Cache statique pour les assets
    routeRules: {
      '/images/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    },
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