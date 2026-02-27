import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap', '@nuxtjs/tailwindcss', '@nuxt/image'],
  image: {
    domains: ['hoirqrkdgbmvpwutwuwj.supabase.co', 'images.unsplash.com'],
    quality: 70,
    format: ['webp', 'jpg'],
  } as any,
  site: {
    url: 'https://clegal-avocats.ch',
    name: 'Clegal Avocats',
  },
  sitemap: {
    // Toutes les routes générées automatiquement depuis pages/
    autoLastmod: true,
    xsl: false,
  },
  app: {
    head: {
      title: "Avocat Genève | Clegal Avocats – Dès 155.- le 1er RDV",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Cabinet d'avocats à Genève (Acacias). Expertise droit pénal, famille, travail & immigration. 1er RDV à 155.-. 7 avocats à votre service." },
        { name: "keywords", content: "avocat genève, clegal avocats, cabinet avocat genève, droit pénal, droit famille, droit travail" },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Clegal Avocats" },
        { name: "theme-color", content: "#ffffff" },
        { property: "og:title", content: "Avocat Genève | Clegal Avocats – Dès 155.- le 1er RDV" },
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
        { rel: 'dns-prefetch', href: 'https://maps.google.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        // Fonts Inter self-hosted – preload du subset latin (le plus critique)
        { rel: 'preload', href: '/fonts/inter-400-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/inter-600-latin.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      ],
      noscript: [],
      script: [
        // Google Analytics 4 - chargé après première interaction (scroll/click/touch)
        {
          innerHTML: `(function(){
            var loaded=false;
            function loadGA(){
              if(loaded)return;loaded=true;
              var s=document.createElement('script');
              s.src='https://www.googletagmanager.com/gtag/js?id=G-CJQF3LS3C2';
              s.async=true;document.head.appendChild(s);
              window.dataLayer=window.dataLayer||[];
              function gtag(){dataLayer.push(arguments);}
              window.gtag=gtag;
              gtag('js',new Date());
              gtag('config','G-CJQF3LS3C2');
              document.querySelectorAll('a[href^="tel:"]').forEach(function(el){
                el.addEventListener('click',function(){gtag('event','phone_click',{event_category:'contact',event_label:el.href.replace('tel:','')});});
              });
              document.querySelectorAll('a[href^="mailto:"]').forEach(function(el){
                el.addEventListener('click',function(){gtag('event','email_click',{event_category:'contact',event_label:el.href.replace('mailto:','')});});
              });
              document.querySelectorAll('form').forEach(function(form){
                form.addEventListener('submit',function(){gtag('event','form_submit',{event_category:'conversion',event_label:'contact_form'});});
              });
              var scrollTracked=false;
              window.addEventListener('scroll',function(){
                if(!scrollTracked){
                  var p=(window.scrollY+window.innerHeight)/document.body.scrollHeight*100;
                  if(p>=90){gtag('event','scroll_90',{event_category:'engagement',event_label:window.location.pathname});scrollTracked=true;}
                }
              });
            }
            ['scroll','click','touchstart'].forEach(function(e){window.addEventListener(e,loadGA,{once:true,passive:true});});
            setTimeout(loadGA,5000);
          })();`,
          type: 'text/javascript'
        }
      ],
      style: [
        {
          innerHTML: `
          @font-face { font-family: 'Inter'; font-style: normal; font-weight: 400; font-display: swap; src: url('/fonts/inter-400-latin.woff2') format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
          @font-face { font-family: 'Inter'; font-style: normal; font-weight: 400; font-display: swap; src: url('/fonts/inter-400-latin-ext.woff2') format('woff2'); unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF; }
          @font-face { font-family: 'Inter'; font-style: normal; font-weight: 600; font-display: swap; src: url('/fonts/inter-600-latin.woff2') format('woff2'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
          @font-face { font-family: 'Inter'; font-style: normal; font-weight: 600; font-display: swap; src: url('/fonts/inter-600-latin-ext.woff2') format('woff2'); unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF; }
          :root { color-scheme: light; }
          body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; font-feature-settings: "cv11", "ss01"; }
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
  experimental: {
    payloadExtraction: true,
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
    },
    routeRules: {
      // Pré-rendu statique de toutes les pages (TTFB immédiat depuis le CDN)
      '/**': { prerender: true },
      // L'API reste une fonction serverless (formulaire de contact)
      '/api/**': { prerender: false },
      // Cache long pour les assets immuables
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