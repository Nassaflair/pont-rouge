import type { LocationKey } from './locations'

export interface Lawyer {
  slug: string
  name: string
  jobTitle: string
  role: 'partner' | 'intern'
  email: string
  image: string
  languages: string
  bio: string
  cities: LocationKey[]
  honors?: string[]
  affiliations?: string[]
  alumniOf?: string[]
  sameAs?: string[]
  knowsAbout?: string[]
  knowsLanguage?: string[]
}

export const lawyers: Lawyer[] = [
  {
    slug: 'mansour-cheema',
    name: 'Me Mansour Cheema',
    jobTitle: 'Avocat au Barreau – Associé fondateur',
    role: 'partner',
    email: 'm.cheema@clegal-avocats.ch',
    image: '/images/mansour_cheema.png',
    languages: 'Français, Anglais, Hindi, Urdu, Punjabi',
    bio: 'Mansour Cheema est titulaire d’un Bachelor en droit délivré par l’Université de Lausanne et d’un Master mention magna cum laude délivré conjointement par les Universités de Lausanne et Zurich et d’un Certificat de spécialisation en matière d’avocature. Durant ses études, il s’est intéressé aux questions migratoires en travaillant pour le Service d’Aide Juridique aux Exilés (SAJE). Il a ensuite accompagné l’application de la nouvelle loi sur l’asile en travaillant en qualité de représentant juridique pour Caritas au sein des Centres fédéraux pour requérants d’asile. Il a effectué son stage au sein d’une Étude de la place genevoise reconnue pour son expertise en droit pénal et en droit de la famille. Après avoir fondé son Étude, Me Mansour Cheema a rejoint Clegal Avocats en qualité d’associé. Il pratique aujourd’hui la représentation dans tous les domaines du droit et bénéficie d’une expertise reconnue en droit des étrangers.',
    cities: ['geneve', 'lausanne'],
    alumniOf: ['Université de Lausanne', 'Université de Zurich'],
    knowsAbout: ['Droit des étrangers', 'Droit pénal', 'Droit de la famille', 'Droit d’asile'],
    knowsLanguage: ['fr', 'en', 'hi', 'ur', 'pa'],
    sameAs: [],
  },
  {
    slug: 'cyril-marc-amberger',
    name: 'Me Cyril-Marc Amberger',
    jobTitle: 'Avocat au Barreau',
    role: 'partner',
    email: 'amberger@swissavocat.ch',
    image: '/images/cyril_marc.png',
    languages: 'Français, Anglais, Allemand, Espagnol',
    bio: 'Cyril-Marc Amberger a effectué ses études de droit dans les universités de Genève, Lausanne et Zurich et a obtenu en 2016, un Master avec double mention en droit commercial et en droit international. Durant ses études, il a travaillé au sein de Lalive à Genève. Après l’obtention de son brevet d’avocat en 2018, il a pratiqué le barreau au sein d’une étude de la place genevoise, avant de rejoindre en 2020 Reymond, Ulmann & Associés à Lausanne.',
    cities: ['geneve', 'lausanne'],
    alumniOf: ['Université de Genève', 'Université de Lausanne', 'Université de Zurich'],
    knowsAbout: ['Droit commercial', 'Droit international'],
    knowsLanguage: ['fr', 'en', 'de', 'es'],
    sameAs: [],
  },
  {
    slug: 'tano-barth',
    name: 'Me Tano Barth',
    jobTitle: 'Docteur en droit – Avocat au Barreau',
    role: 'partner',
    email: 'tano.barth@pra.law',
    image: '/images/tano_barth.png',
    languages: 'Français, Anglais, Allemand, Suisse-allemand, Espagnol, Néerlandais',
    bio: 'Tano Barth a effectué ses études de droit dans les universités de Genève et Zurich. Il est Docteur en droit et chargé de cours à l’École d’avocature de l’Université de Genève, où il enseigne le droit de la profession d’avocat. Il intervient également à la Faculté de droit de l’Université de Genève dans le cadre du cours « Pratique du droit et technologies (Legaltech) » et est l’auteur de nombreuses conférences et publications. Il est membre suppléant de la Commission du barreau (autorité de surveillance des avocats) et membre de la Commission Innovations et Modernisation du Barreau (CIMBAR) de l’Ordre des avocats de Genève.',
    cities: ['geneve'],
    honors: [
      'Docteur en droit',
      'Chargé de cours – École d’avocature, Université de Genève',
      'Membre suppléant de la Commission du barreau de Genève',
    ],
    affiliations: [
      'Ordre des avocats de Genève (ODA)',
      'Commission Innovations et Modernisation du Barreau (CIMBAR)',
    ],
    alumniOf: ['Université de Genève', 'Université de Zurich'],
    knowsAbout: ['Droit de la profession d’avocat', 'Legaltech', 'Droit et numérique'],
    knowsLanguage: ['fr', 'en', 'de', 'gsw', 'es', 'nl'],
    sameAs: [],
  },
  {
    slug: 'remy-bucheler',
    name: 'Me Rémy Bucheler',
    jobTitle: 'Avocat au Barreau – Juge suppléant',
    role: 'partner',
    email: 'remy.bucheler@pra.law',
    image: '/images/remy_bucheler.png',
    languages: 'Français, Anglais',
    bio: 'Rémy Bucheler est titulaire d’un Master en finance de HEC Genève et d’un Master en droit obtenu à Genève, Aix et Paris. Il a été distingué à deux reprises pour les meilleurs résultats de diplôme. Durant ses études, il a effectué ses stages d’avocat en France et en Suisse. Après ses études, il a commencé sa carrière comme collaborateur au sein d’une étude genevoise active en droit des affaires. Il a également conçu et dispensé de nombreuses formations en finance et comptabilité, et a publié de nombreux ouvrages dans ces domaines. En janvier 2025, il a été élu juge suppléant au Tribunal civil et a prêté serment devant le Grand Conseil de la République et canton de Genève.',
    cities: ['geneve'],
    honors: [
      'Juge suppléant au Tribunal civil de Genève (depuis 2025)',
      'Distinction meilleurs résultats de diplôme (x2)',
    ],
    affiliations: [
      'Ordre des avocats de Genève (ODA)',
      'Fédération suisse des avocats (FSA)',
      'EXPERTSuisse',
      'SWISCO',
    ],
    alumniOf: ['HEC Genève', 'Université de Genève', 'Aix-en-Provence', 'Paris'],
    knowsAbout: ['Droit des affaires', 'Finance', 'Comptabilité'],
    knowsLanguage: ['fr', 'en'],
    sameAs: [],
  },
  {
    slug: 'olivier-jacot-des-combes',
    name: 'Me Olivier Jacot Des Combes',
    jobTitle: 'Avocat au Barreau',
    role: 'partner',
    email: 'ojdc@olassocies.ch',
    image: '/images/olivier_jacot.png',
    languages: 'Français',
    bio: 'Olivier Jacot Des Combes a effectué ses études dans les universités de Genève et Lausanne et a obtenu un master en droit et économie de la Faculté des Hautes Études Commerciales de l’Université de Lausanne. En marge de ses études, il effectue un stage au sein d’un cabinet d’avocats de renommée internationale, et œuvre à l’assistance et aux conseils de requérants d’asile au sein d’une permanence juridique spécialisée dans le domaine. Après avoir effectué son stage au sein du Tribunal de première instance, puis d’une prestigieuse Étude de la place, il obtient son brevet d’avocat en 2022.',
    cities: ['geneve'],
    alumniOf: ['Université de Genève', 'HEC Lausanne (UNIL)'],
    knowsAbout: ['Droit', 'Droit et économie', 'Droit d’asile'],
    knowsLanguage: ['fr'],
    sameAs: [],
  },
  {
    slug: 'lea-rodrigues',
    name: 'Me Léa Rodrigues',
    jobTitle: 'Avocate-stagiaire',
    role: 'intern',
    email: 'lea.rodrigues@pra.law',
    image: '/images/lea_rodrigues.png',
    languages: 'Français, Anglais, Portugais',
    bio: 'Léa Rodrigues a effectué ses études de droit à l’Université de Lausanne, où elle a obtenu un Bachelor, puis un Master avec mention magna cum laude. Elle a ensuite obtenu le Certificat de spécialisation en matière d’avocature auprès de l’Université de Genève. Durant ses études, elle a travaillé comme assistante administrative à la Clinique de La Source, puis comme secrétaire juridique au sein de l’Étude Palud avocats à Lausanne. Elle a également été greffière ad hoc auprès de la Chambre pénale du Tribunal d’arrondissement de Lausanne, ainsi que greffière stagiaire à la Justice de paix de l’arrondissement de la Sarine, à Fribourg. Elle a rejoint l’Étude en qualité d’avocate-stagiaire à compter du 1er août 2025.',
    cities: ['lausanne', 'geneve'],
    alumniOf: ['Université de Lausanne', 'Université de Genève'],
    knowsAbout: ['Droit pénal', 'Droit civil'],
    knowsLanguage: ['fr', 'en', 'pt'],
    sameAs: [],
  },
  {
    slug: 'jean-labaume',
    name: 'Me Jean Labaume',
    jobTitle: 'Avocat-stagiaire',
    role: 'intern',
    email: 'labaume@swissavocat.ch',
    image: '/images/labaume.png',
    languages: 'Français, Anglais',
    bio: 'Jean Labaume a effectué ses études de droit à l’Université de Genève, où il a obtenu un Master en droit en juin 2025 avec mention magna cum laude. Il a également obtenu le Certificat de spécialisation en matière d’avocature auprès de l’Université de Genève en 2024. Durant ses études, il a effectué un stage académique au sein de Clegal Avocats, avant d’y rejoindre l’équipe en tant qu’avocat-stagiaire. Il a participé en 2024 au prestigieux concours de plaidoirie Nancoz, organisé par l’Ordre des avocats de Genève (ODAGE), ainsi qu’au Swiss Moot Court, où il s’est classé 3ᵉ avec son équipe lors de la phase orale.',
    cities: ['geneve'],
    honors: [
      '3ᵉ – Swiss Moot Court 2024 (phase orale)',
      'Concours de plaidoirie Nancoz 2024 (ODAGE)',
    ],
    alumniOf: ['Université de Genève'],
    knowsAbout: ['Droit'],
    knowsLanguage: ['fr', 'en'],
    sameAs: [],
  },
]

export const getLawyersByCity = (city: LocationKey): Lawyer[] =>
  lawyers.filter((l) => l.cities.includes(city))

export const getPartners = (): Lawyer[] => lawyers.filter((l) => l.role === 'partner')

export const getInterns = (): Lawyer[] => lawyers.filter((l) => l.role === 'intern')
