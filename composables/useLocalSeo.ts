export const useLocalSeo = (
    title: string,
    description: string,
    options: {
        type?: 'LegalService' | 'Attorney' | 'ProfessionalService';
        image?: string;
        priceRange?: string;
        faq?: { question: string; answer: string }[];
    } = {}
) => {
    const {
        type = 'LegalService',
        image = 'https://clegal-avocats.ch/logo.svg',
        priceRange = 'Dès CHF 155.-',
        faq = [],
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
        name: 'Pont-Rouge Avocats',
        image: image,
        url: 'https://clegal-avocats.ch',
        telephone: '+41225121050',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Route des Jeunes 9',
            addressLocality: 'Les Acacias',
            postalCode: '1227',
            addressCountry: 'CH',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 46.191234567,
            longitude: 6.123456789,
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
    };

    const schemaScripts = [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(localBusinessSchema),
        },
    ];

    // FAQ Schema (if provided)
    if (faq.length > 0) {
        schemaScripts.push({
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

    useHead({
        script: schemaScripts,
    });
};
