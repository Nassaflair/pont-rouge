<script setup lang="ts">
const faq = [
    {
      question: 'Quel avocat pour le plateau de Champel à Genève ?',
      answer: 'Clegal Avocats accueille les habitants de Champel à son cabinet de la Route des Jeunes 9, 1227 Les Acacias — à 10 minutes en voiture ou 15 en tram (lignes 12, 17 jusqu\'à Pont-Rouge). Premier rendez-vous d\'analyse à CHF 155.-.',
    },
    {
      question: 'Quel tribunal compétent pour Champel ?',
      answer: 'Champel dépend des juridictions cantonales genevoises ordinaires : Tribunal de première instance, Cour de justice, Ministère public, Tribunal des prud\'hommes, Tribunal des baux et loyers, TAPI.',
    },
  ]

useLocalSeo(
  'Avocat à Champel (Genève) | Clegal Avocats – Dès 155.-',
  'Avocat à Champel ? Clegal Avocats vous reçoit aux Acacias, à 10 minutes du plateau de Champel. Notre équipe à Genève. 1er RDV à CHF 155.-.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'Avocat à Champel', url: 'https://clegal-avocats.ch/avocat-champel' }],
    faq,

  },
)
</script>

<template>
  <QuartierPage
    :faq="faq"
    city="geneve"
    quartier="Champel"
    slug="avocat-champel"
    :tribunal="{
      nom: 'Tribunal de première instance de Genève',
      siege: 'Rue de l\'Athénée 6-8, 1205 Genève',
      precision: 'Le canton de Genève ne connaît pas de découpage en arrondissements judiciaires : toutes les communes, Champel compris, relèvent des mêmes juridictions cantonales. Ce qui change d\'un quartier à l\'autre, ce n\'est donc pas le tribunal, mais la nature des litiges qui s\'y présentent.',
    }"
    :contexte-local="{
      titre: 'Ce qui caractérise les dossiers de Champel',
      paragraphes: [
        'Champel est un quartier résidentiel de propriétaires, à la population plus âgée que la moyenne genevoise et au patrimoine immobilier souvent ancien. Cette réalité oriente très nettement les dossiers : les successions y sont surreprésentées, fréquemment avec un immeuble comme actif principal. Les difficultés portent alors sur la réserve héréditaire, le rapport des donations effectuées du vivant, l\'évaluation d\'un bien détenu depuis des décennies, et le partage entre héritiers dont l\'un occupe le logement familial.',
        'La présence des Hôpitaux universitaires de Genève au cœur du quartier constitue la seconde spécificité. Elle génère deux types de dossiers distincts : d\'une part des litiges d\'assurances sociales et de responsabilité médicale, d\'autre part des questions de droit du travail propres au personnel hospitalier — horaires, gardes, statut du personnel soignant, contrats de médecins-assistants.',
        'Enfin, Champel comprend une proportion importante de résidents étrangers de longue durée et de familles binationales. Les dossiers de famille y présentent régulièrement une dimension internationale : divorce avec régime matrimonial étranger, garde d\'enfants avec résidence envisagée hors de Suisse, reconnaissance d\'un jugement rendu à l\'étranger. Ces situations relèvent de la loi fédérale sur le droit international privé autant que du Code civil.',
      ],
    }"
    :domaines="[
      { url: '/droit-famille/avocat-succession', titre: 'Successions à Champel', description: 'Réserve héréditaire, rapport des donations, partage d\'un immeuble familial, exécution testamentaire.' },
      { url: '/droit-assurance', titre: 'Assurances et responsabilité médicale', description: 'Litiges AI, LAA, complémentaires, expertises médicales et erreurs de traitement.' },
      { url: '/droit-famille', titre: 'Famille et situations internationales', description: 'Divorce avec élément étranger, régimes matrimoniaux, garde transfrontalière.' },
      { url: '/droit-immobilier', titre: 'Immobilier et copropriété', description: 'PPE, travaux, servitudes, voisinage, vente et défauts de l\'ouvrage.' },
      { url: '/droit-travail', titre: 'Travail — secteur hospitalier et privé', description: 'Statut du personnel soignant, gardes, certificats, licenciements.' },
      { url: '/droit-penal', titre: 'Défense pénale', description: 'Ministère public, ordonnances pénales, permanence 24h/24 pour les urgences.' },
    ]"
    intro="Vous résidez sur le plateau de Champel ? Notre cabinet d'avocats à Genève accueille les habitants du quartier pour tous les domaines du droit : pénal, famille, travail, étrangers, bail, affaires."
    trajet="Champel est relié aux Acacias par le pont de Carouge et la route de Drize. Comptez 10 minutes en voiture, 15 en tram (lignes 12 ou 17, arrêt Pont-Rouge), ou 20 en taxi/Uber. La gare Lancy-Pont-Rouge (Léman Express) est aussi accessible depuis Champel."
    :juridictions="[
      'Tribunal de première instance de Genève (Rue de l\'Athénée 6/8)',
      'Cour de justice de Genève (Place du Bourg-de-Four)',
      'Ministère public',
      'Tribunal des prud\'hommes',
      'Tribunal des baux et loyers',
      'Tribunal administratif de première instance (TAPI)',
      'Chambre des assurances sociales du Tribunal cantonal',
    ]"
    proximite="Le plateau de Champel, quartier résidentiel et hospitalier (HUG), accueille de nombreuses familles et professionnels. Notre cabinet aux Acacias est facilement accessible en transports publics ou en voiture, avec parking visiteurs au Centre Commercial La Praille."
  />
</template>
