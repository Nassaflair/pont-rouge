<script setup lang="ts">
const faq = [
    {
      question: 'Y a-t-il un avocat à Lancy ?',
      answer: 'Oui. Clegal Avocats est physiquement situé Route des Jeunes 9, 1227 Les Acacias — sur le territoire de la commune de Lancy, dans le quartier de Lancy-Pont-Rouge. Premier rendez-vous d\'analyse à CHF 155.-.',
    },
    {
      question: 'Quels tribunaux compétents pour Lancy ?',
      answer: 'Lancy dépend des juridictions cantonales genevoises : Tribunal de première instance, Cour de justice, Ministère public, Tribunal des prud\'hommes, Tribunal des baux et loyers, TAPI.',
    },
  ]

useLocalSeo(
  'Avocat à Lancy (Genève) | Clegal Avocats Pont-Rouge – Dès 155.-',
  'Avocat à Lancy ? Notre cabinet est situé Route des Jeunes 9, à Lancy-Acacias. Notre équipe au Barreau de Genève. 1er RDV à CHF 155.-.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'Avocat à Lancy', url: 'https://clegal-avocats.ch/avocat-lancy' }],
    faq,

  },
)
</script>

<template>
  <QuartierPage
    :faq="faq"
    city="geneve"
    quartier="Lancy"
    slug="avocat-lancy"
    :tribunal="{
      nom: 'Tribunal de première instance de Genève',
      siege: 'Rue de l\'Athénée 6-8, 1205 Genève',
      precision: 'Notre cabinet est lui-même situé sur le territoire de la commune de Lancy, Route des Jeunes 9. Les juridictions compétentes sont les juridictions cantonales genevoises, identiques pour toutes les communes du canton.',
    }"
    :contexte-local="{
      titre: 'Notre cabinet est à Lancy — ce que cela change',
      paragraphes: [
        'Nous ne desservons pas Lancy depuis ailleurs : notre étude s\'y trouve, Route des Jeunes 9, dans le quartier des Acacias. Cette implantation n\'est pas seulement pratique pour les habitants de Petit-Lancy, Grand-Lancy et Pont-Rouge ; elle nous met au contact quotidien du tissu économique de la commune, qui est l\'un des plus denses du canton.',
        'Lancy accueille en effet la zone industrielle des Acacias, le pôle commercial de La Praille et le quartier d\'affaires de Pont-Rouge, développé autour de la gare du Léman Express. Il en découle une forte proportion de dossiers de droit du travail et de droit des affaires : litiges de fin de contrat dans les entreprises de services, baux commerciaux dans les surfaces neuves de Pont-Rouge, conflits entre associés de PME, recouvrement de créances commerciales.',
        'La commune connaît par ailleurs une transformation urbaine rapide, avec de nombreux immeubles de logements livrés ces dernières années. Cette mutation produit son propre contentieux : défauts de construction et garanties de l\'entrepreneur, litiges de PPE dans les copropriétés récentes, contestations de loyers initiaux dans les nouvelles surfaces. Le loyer initial peut être contesté dans les trente jours suivant l\'entrée dans les locaux, un délai souvent ignoré.',
      ],
    }"
    :domaines="[
      { url: '/droit-travail', titre: 'Droit du travail à Lancy', description: 'Zone industrielle des Acacias et Pont-Rouge : licenciements, heures supplémentaires, non-concurrence.' },
      { url: '/droit-affaires', titre: 'PME et commerces de La Praille', description: 'Constitution de sociétés, pactes d\'associés, recouvrement, contentieux contractuel.' },
      { url: '/droit-bail', titre: 'Baux commerciaux et loyer initial', description: 'Surfaces de Pont-Rouge, contestation du loyer initial dans les 30 jours, résiliations.' },
      { url: '/droit-immobilier', titre: 'Constructions neuves et PPE', description: 'Défauts de l\'ouvrage, garanties, copropriétés récentes, règlements d\'administration.' },
      { url: '/droit-famille', titre: 'Famille', description: 'Divorce, séparation, garde, pensions devant les juridictions genevoises.' },
      { url: '/droit-penal', titre: 'Défense pénale', description: 'Ministère public, ordonnances pénales, permanence 24h/24.' },
    ]"
    intro="Notre cabinet est physiquement situé à Lancy (quartier des Acacias / Pont-Rouge). Notre équipe au Barreau de Genève au service des habitants de Lancy : Petit-Lancy, Grand-Lancy, La Praille, Lancy-Centre, Pont-Rouge."
    trajet="Notre étude se trouve Route des Jeunes 9, 1227 Les Acacias — au cœur du quartier d'affaires de Lancy-Pont-Rouge. Accès immédiat depuis tout le territoire de la commune : tram 12/15/17/18 (arrêts Pont-Rouge ou Acacias), Léman Express (gare Lancy-Pont-Rouge), bus, voiture (parking visiteurs Centre Commercial La Praille)."
    :juridictions="[
      'Tribunal de première instance de Genève',
      'Cour de justice de Genève',
      'Ministère public',
      'Tribunal correctionnel & Tribunal de police',
      'Tribunal des prud\'hommes',
      'Tribunal des baux et loyers',
      'Tribunal administratif de première instance (TAPI)',
      'Chambre administrative de la Cour de justice',
    ]"
    proximite="Lancy est la commune qui héberge notre cabinet. À ce titre, nous connaissons parfaitement le tissu économique local (entreprises de la zone industrielle des Acacias, commerces de la Praille, résidents de Petit et Grand-Lancy) et travaillons régulièrement avec les acteurs locaux."
  />
</template>
