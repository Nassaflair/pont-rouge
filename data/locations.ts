export type LocationKey = 'geneve' | 'lausanne'

export interface Location {
  key: LocationKey
  name: string
  legalName: string
  streetAddress: string
  addressLocality: string
  postalCode: string
  addressRegion: string
  addressCountry: string
  telephone: string
  email: string
  geo: { latitude: number; longitude: number }
  hours: { dayOfWeek: string[]; opens: string; closes: string }[]
  areaServed: string[]
  courts: string[]
  active: boolean
}

export const locations: Record<LocationKey, Location> = {
  geneve: {
    key: 'geneve',
    name: 'Clegal Avocats Genève',
    legalName: 'Clegal Avocats',
    streetAddress: 'Route des Jeunes 9',
    addressLocality: 'Les Acacias',
    postalCode: '1227',
    addressRegion: 'Genève',
    addressCountry: 'CH',
    telephone: '+41225121050',
    email: 'info@clegal-avocats.ch',
    geo: { latitude: 46.1871, longitude: 6.1296 },
    hours: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '18:00',
      },
    ],
    areaServed: [
      'Genève',
      'Carouge',
      'Lancy',
      'Vernier',
      'Meyrin',
      'Versoix',
      'Onex',
      'Plan-les-Ouates',
      'Chêne-Bougeries',
      'Cologny',
      'Veyrier',
    ],
    courts: [
      'Tribunal de première instance de Genève',
      'Cour de justice de Genève',
      'Tribunal des prud\'hommes de Genève',
      'Tribunal des baux et loyers',
      'Tribunal administratif de première instance (TAPI)',
      'Chambre administrative de la Cour de justice',
      'Ministère public',
      'Conseil d\'État de Genève',
      'Chambre des assurances sociales du Tribunal cantonal',
    ],
    active: true,
  },
  lausanne: {
    key: 'lausanne',
    name: 'Clegal Avocats Lausanne',
    legalName: 'Clegal Avocats',
    // Adresse précise à compléter — laisser le placeholder fait que le composant
    // LocalNAP et le schema JSON-LD masquent le streetAddress jusqu'à fourniture.
    streetAddress: 'À COMPLÉTER',
    addressLocality: 'Lausanne',
    postalCode: '1003',
    addressRegion: 'Vaud',
    addressCountry: 'CH',
    // Numéro Lausanne à fournir — le placeholder est filtré du schema JSON-LD.
    // En attendant, le numéro Genève reste utilisé dans l'UI (cabinet unifié).
    telephone: '+41XXXXXXXXX',
    email: 'info@clegal-avocats.ch',
    geo: { latitude: 46.5197, longitude: 6.6323 },
    hours: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:30',
        closes: '18:00',
      },
    ],
    areaServed: [
      'Lausanne',
      'Pully',
      'Renens',
      'Ecublens',
      'Prilly',
      'Morges',
      'Vevey',
      'Montreux',
      'Yverdon-les-Bains',
      'Nyon',
    ],
    courts: [
      'Tribunal cantonal vaudois',
      'Cour civile',
      'Cour d\'appel pénale',
      'Cour de droit administratif et public (CDAP)',
      'Tribunal d\'arrondissement de Lausanne',
      'Justice de paix de Lausanne',
      'Chambre des avocats du canton de Vaud',
      'Tribunal des baux',
      'Tribunal de prud\'hommes du canton de Vaud',
    ],
    active: true,
  },
}

// Helper : un champ vaut-il un placeholder ? (utilisé pour filtrer le JSON-LD)
export const isPlaceholder = (value: string | undefined | null): boolean => {
  if (!value) return true
  return value === 'À COMPLÉTER' || value.includes('XXXXXXXXX')
}

export const getLocation = (key: LocationKey): Location => locations[key]

export const getActiveLocations = (): Location[] =>
  Object.values(locations).filter((loc) => loc.active)
