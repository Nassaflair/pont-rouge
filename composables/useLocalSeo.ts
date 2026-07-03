import { locations, isPlaceholder, type LocationKey } from '~/data/locations'
import { lawyers as allLawyers } from '~/data/team'

export interface LawyerSchemaInput {
  slug: string
  name: string
  jobTitle?: string
  email?: string
  image?: string
  alumniOf?: string[]
  knowsAbout?: string[]
  knowsLanguage?: string[]
  honors?: string[]
  sameAs?: string[]
}

// Fiches Google Business Profile officielles (liens de partage générés depuis chaque fiche)
export const GBP_PROFILE_URLS: Record<string, string> = {
  geneve: 'https://share.google/xuVGlNI4RwNY7wE3Z',
  lausanne: 'https://share.google/Sn5qYRWw5TdBy8jqO',
}

// Entités Google Knowledge Graph des deux bureaux (kgmid stables, machine-readable)
export const KGMID_URLS: Record<string, string> = {
  geneve: 'https://www.google.com/search?kgmid=/g/11kr80wp4s&q=Clegal+Avocats',
  lausanne: 'https://www.google.com/search?kgmid=/g/11zb49qxb_&q=Clegal+Avocats',
}

// Profils communs aux deux bureaux (désambiguïsation d'entité vs homonymes type "CLegal" FR)
export const SAME_AS_DEFAULT = [
  'https://odage.ch/fr/annuaire-des-etudes/clegal-avocats',
  'https://www.instagram.com/clegal.avocats/',
  'https://www.tiktok.com/@clegal.avocats',
  'https://www.youtube.com/channel/UC0KuCTzq2X4rNpwPLATgOaw',
  // À compléter au fil de la stratégie linkbuilding (M1-M4) :
  // 'https://www.linkedin.com/company/clegal-avocats/',
]

// hasMap = la fiche Google Business officielle de chaque bureau (signal local fort)
export const GOOGLE_MAPS_URLS: Record<string, string> = {
  geneve: GBP_PROFILE_URLS.geneve,
  lausanne: GBP_PROFILE_URLS.lausanne,
}

// Rayon de service par succursale (en mètres) pour GeoCircle
export const SERVICE_RADIUS: Record<string, number> = {
  geneve: 25000, // tout le canton
  lausanne: 30000, // canton de Vaud + arc lémanique vaudois
}

// Pas d'AggregateRating par défaut : les avis auto-hébergés sur sa propre entité
// LocalBusiness sont "self-serving" (guidelines Google, sept. 2019) — la note vit
// sur les fiches Google Business, référencées via hasMap/sameAs.

export interface ServiceSchemaInput {
  name: string
  serviceType?: string
  description?: string
  url?: string
  category?: string
}

export const useLocalSeo = (
  title: string,
  description: string,
  options: {
    type?: 'LegalService' | 'Attorney' | 'ProfessionalService'
    image?: string
    priceRange?: string
    faq?: { question: string; answer: string }[]
    breadcrumbs?: { name: string; url: string }[]
    city?: LocationKey
    lawyerSlugs?: string[]
    aggregateRating?: { ratingValue: string; ratingCount: string; bestRating?: string; worstRating?: string } | false
    sameAs?: string[]
    services?: ServiceSchemaInput[]
  } = {}
) => {
  const {
    type = 'LegalService',
    image = 'https://clegal-avocats.ch/logo.svg',
    priceRange = 'Dès CHF 155.-',
    faq = [],
    breadcrumbs = [],
    city = 'geneve',
    lawyerSlugs = [],
    aggregateRating = false,
    sameAs = SAME_AS_DEFAULT,
    services = [],
  } = options

  const route = useRoute()
  const canonicalUrl = `https://clegal-avocats.ch${route.path}`
  const location = locations[city]

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: image },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
    ],
    link: [{ rel: 'canonical', href: canonicalUrl }],
  })

  const address: Record<string, any> = {
    '@type': 'PostalAddress',
    addressLocality: location.addressLocality,
    postalCode: location.postalCode,
    addressRegion: location.addressRegion,
    addressCountry: location.addressCountry,
  }
  if (!isPlaceholder(location.streetAddress)) {
    address.streetAddress = location.streetAddress
  }

  const localBusinessSchema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `https://clegal-avocats.ch/#${city}`,
    name: location.name,
    image,
    url: 'https://clegal-avocats.ch',
    email: location.email,
    ...(isPlaceholder(location.telephone) ? {} : { telephone: location.telephone }),
    address,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    },
    priceRange,
    openingHoursSpecification: location.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    hasMap: GOOGLE_MAPS_URLS[city] ?? undefined,
    areaServed: [
      ...location.areaServed.map((a) => ({ '@type': 'City', name: a })),
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: location.geo.latitude,
          longitude: location.geo.longitude,
        },
        geoRadius: String(SERVICE_RADIUS[city] ?? 25000),
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services juridiques',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Droit de la famille' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Droit du travail' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Droit pénal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Droit des étrangers' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Droit immobilier' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Droit des affaires' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Droit des assurances' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Droit administratif' } },
      ],
    },
  }

  // sameAs de l'entité = sa fiche Google + son entité Knowledge Graph + profils communs
  const entitySameAs = [GBP_PROFILE_URLS[city], KGMID_URLS[city], ...sameAs].filter(Boolean)
  if (entitySameAs.length > 0) {
    localBusinessSchema.sameAs = entitySameAs
  }

  if (aggregateRating) {
    localBusinessSchema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: aggregateRating.ratingValue,
      bestRating: aggregateRating.bestRating ?? '5',
      worstRating: aggregateRating.worstRating ?? '1',
      ratingCount: aggregateRating.ratingCount,
    }
  }

  const employees = lawyerSlugs.length > 0
    ? allLawyers.filter((l) => lawyerSlugs.includes(l.slug))
    : allLawyers.filter((l) => l.cities.includes(city))

  if (employees.length > 0) {
    localBusinessSchema.employee = employees.map((l) => buildPersonSchema(l, city))
  }

  const schemaScripts: { type: string; innerHTML: string }[] = [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(localBusinessSchema),
    },
  ]

  if (faq.length > 0) {
    schemaScripts.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }),
    })
  }

  if (services.length > 0) {
    services.forEach((svc) => {
      schemaScripts.push({
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: svc.name,
          ...(svc.serviceType ? { serviceType: svc.serviceType } : {}),
          ...(svc.description ? { description: svc.description } : {}),
          ...(svc.url ? { url: svc.url } : {}),
          ...(svc.category ? { category: svc.category } : {}),
          provider: {
            '@type': 'LegalService',
            '@id': `https://clegal-avocats.ch/#${city}`,
            name: location.name,
          },
          areaServed: location.areaServed.map((a) => ({ '@type': 'City', name: a })),
          offers: {
            '@type': 'Offer',
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'CHF',
              price: '155',
              description: 'Premier rendez-vous d\'analyse',
            },
          },
        }),
      })
    })
  }

  if (breadcrumbs.length > 0) {
    const itemListElement = [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://clegal-avocats.ch/' },
      ...breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: crumb.name,
        item: crumb.url,
      })),
    ]
    schemaScripts.push({
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement,
      }),
    })
  }

  useHead({ script: schemaScripts })
}

const buildPersonSchema = (lawyer: LawyerSchemaInput, city: LocationKey) => {
  const location = locations[city]
  const person: Record<string, any> = {
    '@type': 'Person',
    '@id': `https://clegal-avocats.ch/equipe#${lawyer.slug}`,
    name: lawyer.name,
    jobTitle: lawyer.jobTitle ?? 'Avocat au Barreau',
    worksFor: { '@type': 'LegalService', name: location.name },
    image: lawyer.image ? `https://clegal-avocats.ch${lawyer.image}` : undefined,
    email: lawyer.email && !isPlaceholder(lawyer.email) ? lawyer.email : undefined,
  }
  if (lawyer.alumniOf?.length) {
    person.alumniOf = lawyer.alumniOf.map((a) => ({ '@type': 'EducationalOrganization', name: a }))
  }
  if (lawyer.knowsAbout?.length) {
    person.knowsAbout = lawyer.knowsAbout
  }
  if (lawyer.knowsLanguage?.length) {
    person.knowsLanguage = lawyer.knowsLanguage
  }
  if (lawyer.honors?.length) {
    person.honorificPrefix = 'Maître'
    person.award = lawyer.honors
  }
  if (lawyer.sameAs?.length) {
    person.sameAs = lawyer.sameAs
  }
  Object.keys(person).forEach((k) => person[k] === undefined && delete person[k])
  return person
}
