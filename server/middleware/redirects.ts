export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  const path = url.pathname.toLowerCase()

  // ===========================================
  // EXACT REDIRECTS - Old WordPress URLs
  // ===========================================
  const exactRedirects: Record<string, string> = {
    // Main pages WordPress -> Nuxt
    '/droit-de-la-famille': '/droit-famille',
    '/droit-de-la-famille/': '/droit-famille',
    '/droit-des-etrangers': '/droit-etrangers',
    '/droit-des-etrangers/': '/droit-etrangers',
    '/droit-du-travail': '/droit-travail',
    '/droit-du-travail/': '/droit-travail',
    '/droit-du-bail': '/droit-immobilier/avocat-droit-bail',
    '/droit-du-bail/': '/droit-immobilier/avocat-droit-bail',
    '/droit-administratif': '/droit-administratif',
    '/droit-administratif/': '/droit-administratif',
    '/droit-des-assurances': '/droit-assurance',
    '/droit-des-assurances/': '/droit-assurance',
    '/droit-penal': '/droit-penal',
    '/droit-penal/': '/droit-penal',
    '/droit-du-divorce': '/droit-famille/avocat-divorce',
    '/droit-du-divorce/': '/droit-famille/avocat-divorce',
    '/droit-du-travail-2': '/droit-travail',
    '/droit-du-travail-2/': '/droit-travail',

    // Avocat specific pages
    '/avocat-divorce-geneve': '/droit-famille/avocat-divorce',
    '/avocat-divorce-geneve/': '/droit-famille/avocat-divorce',
    '/avocat-divorce-geneve-2': '/droit-famille/avocat-divorce',
    '/avocat-divorce-geneve-2/': '/droit-famille/avocat-divorce',
    '/avocat-droit-de-la-famille-geneve': '/droit-famille',
    '/avocat-droit-de-la-famille-geneve/': '/droit-famille',
    '/avocat-droit-penal-geneve': '/droit-penal',
    '/avocat-droit-penal-geneve/': '/droit-penal',
    '/avocat-droit-des-etrangers': '/droit-etrangers',
    '/avocat-droit-des-etrangers/': '/droit-etrangers',
    '/avocat-droit-des-etranger': '/droit-etrangers',
    '/avocat-droit-des-etranger/': '/droit-etrangers',
    '/avocat-droit-du-bail-geneve': '/droit-immobilier/avocat-droit-bail',
    '/avocat-droit-du-bail-geneve/': '/droit-immobilier/avocat-droit-bail',
    '/avocat-droit-du-bail-geneve-2': '/droit-immobilier/avocat-droit-bail',
    '/avocat-droit-du-bail-geneve-2/': '/droit-immobilier/avocat-droit-bail',
    '/avocat-droit-administratif-geneve': '/droit-administratif',
    '/avocat-droit-administratif-geneve/': '/droit-administratif',
    '/avocat-droit-des-assurances': '/droit-assurance',
    '/avocat-droit-des-assurances/': '/droit-assurance',
    '/avocat-geneve-droit-du-travail': '/droit-travail',
    '/avocat-geneve-droit-du-travail/': '/droit-travail',

    // General pages
    '/avocat-geneve': '/',
    '/avocat-geneve/': '/',
    '/avocat-martigny': '/',
    '/avocat-martigny/': '/',
    '/meilleur-avocat-geneve-a-votre-service': '/',
    '/meilleur-avocat-geneve-a-votre-service/': '/',
    '/avocat-geneve-clegal-etude-succes': '/',
    '/avocat-geneve-clegal-etude-succes/': '/',
    '/fondateur-clegal-avocat': '/etude',
    '/fondateur-clegal-avocat/': '/etude',
    '/letude-davocat-clegal': '/etude',
    '/letude-davocat-clegal/': '/etude',
    '/domaines-de-competences-avocat': '/domaine-de-competence',
    '/domaines-de-competences-avocat/': '/domaine-de-competence',
    '/foire-aux-questions': '/contact',
    '/foire-aux-questions/': '/contact',
    '/politique-de-confidentialite': '/contact',
    '/politique-de-confidentialite/': '/contact',
    '/sample-page': '/',
    '/sample-page/': '/',
    '/procedure-simplifiee-un-guide-pour-les-non-inities': '/blog',
    '/procedure-simplifiee-un-guide-pour-les-non-inities/': '/blog',
    '/type-of-license-in-switzerland': '/blog/travailler-suisse-hors-ue',
    '/type-of-license-in-switzerland/': '/blog/travailler-suisse-hors-ue',

    // WordPress system
    '/wp-admin': '/',
    '/wp-login.php': '/',
    '/xmlrpc.php': '/',
    '/wp-json': '/',
  }

  // Check exact match first
  const exactMatch = exactRedirects[path]
  if (exactMatch) {
    return sendRedirect(event, exactMatch, 301)
  }

  // ===========================================
  // PATTERN-BASED REDIRECTS
  // ===========================================

  // English /en/ pages -> French equivalents
  if (path.startsWith('/en/') || path.startsWith('/eng/')) {
    const frenchPath = path.replace(/^\/(en|eng)\//, '/')

    // Map English paths to French
    const enToFrMap: Record<string, string> = {
      '/': '/',
      '/blog': '/blog',
      '/contact': '/contact',
      '/honoraires': '/honoraires',
      '/droit-de-la-famille': '/droit-famille',
      '/droit-des-etrangers': '/droit-etrangers',
      '/droit-du-travail': '/droit-travail',
      '/droit-du-bail': '/droit-immobilier/avocat-droit-bail',
      '/droit-administratif': '/droit-administratif',
      '/droit-des-assurances': '/droit-assurance',
      '/droit-penal': '/droit-penal',
      '/domaines-de-competences-avocat': '/domaine-de-competence',
      '/foire-aux-questions': '/contact',
      '/avocat-geneve': '/',
      '/avocat-divorce-geneve': '/droit-famille/avocat-divorce',
      '/avocat-divorce-geneve-2': '/droit-famille/avocat-divorce',
      '/avocat-droit-des-etranger': '/droit-etrangers',
      '/avocat-droit-du-bail-geneve': '/droit-immobilier/avocat-droit-bail',
      '/avocat-droit-administratif-geneve': '/droit-administratif',
      '/avocat-droit-des-assurances': '/droit-assurance',
      '/avocat-droit-penal-geneve': '/droit-penal',
      '/avocat-geneve-droit-du-travail': '/droit-travail',
      '/fondateur-clegal-avocat': '/etude',
      '/meilleur-avocat-geneve-a-votre-service': '/',
      '/politique-de-confidentialite': '/contact',
      '/type-of-license-in-switzerland': '/blog/travailler-suisse-hors-ue',
    }

    // Clean up the french path (remove trailing slash, query params for matching)
    const cleanFrenchPath = frenchPath.split('?')[0].replace(/\/$/, '') || '/'
    const mappedPath = enToFrMap[cleanFrenchPath]

    if (mappedPath) {
      return sendRedirect(event, mappedPath, 301)
    }

    // Default: redirect /en/* or /eng/* to home
    return sendRedirect(event, '/', 301)
  }

  // WordPress category pages
  if (path.startsWith('/category/')) {
    const category = path.replace('/category/', '').replace(/\/$/, '').split('/')[0]
    const categoryMap: Record<string, string> = {
      'droit-des-etrangers': '/droit-etrangers',
      'droit-du-travail': '/droit-travail',
      'droit-penal': '/droit-penal',
      'droit-des-assurances': '/droit-assurance',
      'divers': '/blog',
    }
    return sendRedirect(event, categoryMap[category] || '/blog', 301)
  }

  // WordPress author pages -> home
  if (path.startsWith('/author/')) {
    return sendRedirect(event, '/', 301)
  }

  // WordPress tag pages -> blog
  if (path.startsWith('/tag/')) {
    return sendRedirect(event, '/blog', 301)
  }

  // WordPress blog pagination
  if (path.startsWith('/blog/page/')) {
    return sendRedirect(event, '/blog', 301)
  }

  // WordPress paths
  if (path.startsWith('/wp-') ||
      path.startsWith('/wp-content') ||
      path.startsWith('/wp-admin') ||
      path.startsWith('/wp-includes') ||
      path.includes('/feed') ||
      path.endsWith('.php') ||
      path.includes('/amp/') ||
      path.endsWith('/amp')) {
    return sendRedirect(event, '/', 301)
  }

  // WordPress post ID format /?p=123
  if (path === '/' && url.searchParams.has('p')) {
    return sendRedirect(event, '/', 301)
  }

  // Google Ads tracking URLs with gclid/gad parameters -> clean URL
  if (url.searchParams.has('gclid') || url.searchParams.has('gad_source')) {
    const cleanPath = path === '/' ? '/' : path.replace(/\/$/, '')
    return sendRedirect(event, cleanPath, 301)
  }

  // Elementor pages
  if (path.startsWith('/elementor')) {
    return sendRedirect(event, '/', 301)
  }

  // CDN paths
  if (path.startsWith('/cdn-cgi/')) {
    return sendRedirect(event, '/', 301)
  }

  // Handle pagination /page/X
  if (path.match(/\/page\/\d+/)) {
    const basePath = path.replace(/\/page\/\d+\/?$/, '')
    return sendRedirect(event, basePath || '/', 301)
  }

  // Trailing slashes (except root)
  if (path.length > 1 && path.endsWith('/')) {
    return sendRedirect(event, path.slice(0, -1), 301)
  }
})
