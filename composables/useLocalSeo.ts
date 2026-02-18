export const useLocalSeo = (
    title: string,
    description: string,
    options: {
        type?: 'LegalService' | 'Attorney' | 'ProfessionalService';
        image?: string;
        priceRange?: string;
        faq?: { question: string; answer: string }[];
        breadcrumbs?: { name: string; url: string }[];
    } = {}
) => {
    const {
        type = 'LegalService',
        image = 'https://clegal-avocats.ch/logo.svg',
        priceRange = 'Dès CHF 155.-',
        faq = [],
        breadcrumbs = [],
    } = options;

    const route = useRoute();
    const canonicalUrl = `https://clegal-avocats.ch${route.path}`;

    // Standard Meta Tags
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
    });

    // Base Schema for LocalBusiness
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': type,
        name: 'Clegal Avocats',
        image: image,
        url: 'https://clegal-avocats.ch',
        telephone: '+41225121050',
        email: 'info@clegal-avocats.ch',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Route des Jeunes 9',
            addressLocality: 'Les Acacias',
            postalCode: '1227',
            addressRegion: 'Genève',
            addressCountry: 'CH',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 46.1871,
            longitude: 6.1296,
        },
        priceRange: priceRange,
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:30',
                closes: '18:00',
            },
        ],
        areaServed: {
            '@type': 'City',
            name: 'Genève',
        },
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
    };

    const schemaScripts = [
        {
            key: 'schema-local-business',
            type: 'application/ld+json',
            innerHTML: JSON.stringify(localBusinessSchema),
        },
    ];

    // FAQ Schema (if provided)
    if (faq.length > 0) {
        schemaScripts.push({
            key: 'schema-faq',
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faq.map((item) => ({
                    '@type': 'Question',
                    name: item.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: item.answer,
                    },
                })),
            }),
        });
    }

    // BreadcrumbList Schema (if provided)
    if (breadcrumbs.length > 0) {
        const itemListElement = [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Accueil',
                item: 'https://clegal-avocats.ch/',
            },
            ...breadcrumbs.map((crumb, index) => ({
                '@type': 'ListItem',
                position: index + 2,
                name: crumb.name,
                item: crumb.url,
            })),
        ];
        schemaScripts.push({
            key: 'schema-breadcrumb',
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement,
            }),
        });
    }

    useHead({
        script: schemaScripts,
    });
};
