<script setup lang="ts">
const faq = [
    {
      question: 'Y a-t-il un avocat Clegal à Plainpalais ?',
      answer: 'Notre cabinet d\'avocats à Genève est situé Route des Jeunes 9, 1227 Les Acacias — à 8 minutes de Plainpalais en tram (lignes 12, 15) ou en voiture par le boulevard du Pont-d\'Arve. Premier rendez-vous d\'analyse à CHF 155.-.',
    },
    {
      question: 'Quel tribunal compétent pour Plainpalais ?',
      answer: 'Plainpalais, quartier de la Ville de Genève, dépend des juridictions cantonales : Tribunal de première instance (Rue de l\'Athénée 6/8, à 5 min de Plainpalais), Cour de justice (Place du Bourg-de-Four), Ministère public, Tribunal des prud\'hommes, Tribunal des baux et loyers, TAPI.',
    },
  ]

useLocalSeo(
  'Avocat à Plainpalais (Genève) | Clegal Avocats – Dès 155.-',
  'Avocat à Plainpalais à Genève. Clegal Avocats vous reçoit aux Acacias, à 8 min en tram. Pénal, famille, travail, étrangers. 1er RDV CHF 155.-.',
  {
    city: 'geneve',
    breadcrumbs: [{ name: 'Avocat à Plainpalais', url: 'https://clegal-avocats.ch/avocat-plainpalais' }],
    faq,

  },
)
</script>

<template>
  <QuartierPage
    :faq="faq"
    city="geneve"
    quartier="Plainpalais"
    slug="avocat-plainpalais"
    :tribunal="{
      nom: 'Tribunal de première instance de Genève',
      siege: 'Rue de l\'Athénée 6-8, 1206 Genève',
      precision: 'Les juridictions genevoises siègent à quelques minutes de Plainpalais. Le canton n\'étant pas divisé en arrondissements, les habitants du quartier relèvent des mêmes tribunaux que l\'ensemble du canton.',
    }"
    :contexte-local="{
      titre: 'Ce qui caractérise les dossiers de Plainpalais',
      paragraphes: [
        'Plainpalais est le quartier étudiant de Genève : l\'Université, dont la Faculté de droit, y concentre une population jeune, mobile et souvent étrangère. Les dossiers qui en proviennent sont d\'une nature très particulière. En droit des étrangers d\'abord : permis de séjour pour études, prolongation après l\'obtention du diplôme, passage d\'une autorisation d\'études à une autorisation de travail — une transition qui obéit à des conditions strictes et à des délais courts, et dont l\'échec conduit à une décision de renvoi.',
        'En droit du bail ensuite. La forte demande locative étudiante produit un contentieux spécifique : sous-locations non autorisées, colocations dont un colocataire part en cours de bail, loyers manifestement surfaits, logements meublés loués au-dessus du rendement admissible. La contestation du loyer initial dans les trente jours est ici un outil sous-utilisé, alors que le quartier compte parmi les plus tendus du canton.',
        'Le quartier concentre enfin une vie nocturne dense, autour de la plaine et des rues adjacentes. Il en résulte un volume régulier d\'ordonnances pénales pour des infractions de faible gravité — scandale, lésions corporelles simples, stupéfiants, conduite en état d\'ébriété. Le point décisif tient au délai : l\'opposition à une ordonnance pénale doit être formée par écrit dans les dix jours, faute de quoi elle devient un jugement définitif inscrit au casier judiciaire.',
      ],
    }"
    :domaines="[
      { url: '/droit-etrangers', titre: 'Permis étudiants et transition', description: 'Permis pour études, prolongation après diplôme, passage à une autorisation de travail, recours.' },
      { url: '/droit-bail', titre: 'Logement étudiant et colocation', description: 'Sous-location, colocation, loyer initial surfait, logements meublés, résiliation.' },
      { url: '/droit-penal', titre: 'Ordonnance pénale — 10 jours pour agir', description: 'Opposition écrite dans les 10 jours, infractions de la vie nocturne, permanence 24h/24.' },
      { url: '/droit-travail', titre: 'Premiers emplois et stages', description: 'Stages non rémunérés, contrats de durée déterminée, temps partiel étudiant.' },
      { url: '/droit-famille', titre: 'Famille', description: 'Divorce, séparation, garde et pensions devant les juridictions genevoises.' },
      { url: '/droit-affaires', titre: 'Jeunes entreprises', description: 'Création de Sàrl, statuts, propriété intellectuelle, premiers contrats.' },
    ]"
    intro="Vous habitez ou étudiez à Plainpalais ? Notre cabinet d'avocats aux Acacias est à 8 minutes en tram (lignes 12, 15). Notre équipe au Barreau de Genève pour le droit pénal, la famille, le travail, les étrangers, le bail."
    trajet="Plainpalais est connecté au quartier des Acacias par le boulevard du Pont-d'Arve. En tram, comptez 8 minutes (ligne 12 ou 15, arrêt Pont-Rouge). En voiture, 5 minutes via le pont des Acacias. À pied : 25-30 minutes via le Bois-de-la-Bâtie."
    :juridictions="[
      'Tribunal de première instance de Genève (Rue de l\'Athénée 6/8, à 5 min de Plainpalais)',
      'Cour de justice (Place du Bourg-de-Four)',
      'Ministère public (Place du Bourg-de-Four 3)',
      'Tribunal des prud\'hommes — Université de Genève à proximité',
      'Tribunal des baux et loyers',
      'Tribunal administratif de première instance (TAPI)',
    ]"
    proximite="Plainpalais, quartier universitaire et résidentiel de Genève, abrite la Faculté de droit de l'UNIGE, le Tribunal de première instance et la Cour de justice à proximité immédiate. Nos avocats interviennent quotidiennement devant ces juridictions."
  />
</template>
