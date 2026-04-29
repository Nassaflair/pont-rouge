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

export const SAME_AS_DEFAULT = [
  'https://share.google/QFbFusfEbqJIMUoNF',
  // À compléter au fil de la stratégie linkbuilding (M1-M4) :
  // 'https://www.linkedin.com/company/clegal-avocats/',
  // 'https://www.facebook.com/clegalavocats/',
  // 'https://odage.ch/<id-cabinet>',
]

// URL Google Maps officielle pour le bureau (hasMap = signal local fort)
export const GOOGLE_MAPS_URLS: Record<string, string> = {
  geneve: 'https://www.google.com/maps?q=Clegal+Avocats+Route+des+Jeunes+9+1227+Les+Acacias',
  lausanne: 'https://www.google.com/maps?q=Clegal+Avocats+Lausanne',
}

// Rayon de service par succursale (en mètres) pour GeoCircle
export const SERVICE_RADIUS: Record<string, number> = {
  geneve: 25000, // tout le canton
  lausanne: 30000, // canton de Vaud + arc lémanique vaudois
}

export const AGGREGATE_RATING_DEFAULT = {
  ratingValue: '5.0',
  bestRating: '5',
  worstRating: '1',
  // ratingCount à mettre à jour mensuellement depuis Google Business Profile
  ratingCount: '12',
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
    aggregateRating = AGGREGATE_RATING_DEFAULT,
    sameAs = SAME_AS_DEFAULT,
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

  if (sameAs.length > 0) {
    localBusinessSchema.sameAs = sameAs
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
    email: lawyer.email,
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
