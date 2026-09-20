<script setup lang="ts">
const faq = [
  {
    question: 'Quel tribunal est compétent pour un habitant de Morges ?',
    answer: 'Morges relève du Tribunal d\'arrondissement de La Côte, dont le siège est à Nyon (Route de Saint-Cergue 38, 1260 Nyon) — et non du Tribunal d\'arrondissement de Lausanne. C\'est une distinction importante : une requête déposée auprès du mauvais tribunal est transmise d\'office, mais le délai de traitement s\'en trouve rallongé. En appel, c\'est le Tribunal cantonal vaudois à Lausanne qui statue.',
  },
  {
    question: 'Où déposer une requête de mesures protectrices si j\'habite Morges ?',
    answer: 'Auprès du Président du Tribunal d\'arrondissement de La Côte, à Nyon. Le formulaire vaudois doit être imprimé, signé et envoyé en deux exemplaires par courrier, accompagné du certificat de famille, d\'une fiche de salaire par époux, d\'une copie du bail et d\'une attestation des primes d\'assurance maladie. Le tribunal du domicile de l\'un ou l\'autre époux est compétent, au choix.',
  },
  {
    question: 'Faut-il se déplacer à Nyon pour chaque audience ?',
    answer: 'Les audiences se tiennent au siège du tribunal compétent, donc à Nyon pour les affaires morgiennes de première instance. Notre bureau de Lausanne assure la préparation du dossier, les échanges d\'écritures et la représentation en audience ; vous ne vous déplacez que lorsque votre présence personnelle est requise, essentiellement en droit de la famille et en pénal.',
  },
  {
    question: 'Quel tarif pour un avocat à Morges ?',
    answer: 'Les tarifs vaudois se situent entre CHF 300 et CHF 500 de l\'heure. Clegal Avocats propose un premier rendez-vous d\'analyse forfaitaire à CHF 155.-, des forfaits pour les procédures prévisibles et accepte l\'assistance judiciaire vaudoise, qui se demande auprès du tribunal saisi.',
  },
]

useLocalSeo(
  'Avocat à Morges | Tribunal de La Côte – Clegal Avocats Lausanne',
  'Avocat à Morges ? Morges relève du Tribunal d\'arrondissement de La Côte (Nyon). Notre bureau de Lausanne à 15 min en train. 1er RDV d\'analyse à CHF 155.-.',
  {
    city: 'lausanne',
    breadcrumbs: [{ name: 'Avocat à Morges', url: 'https://clegal-avocats.ch/avocat-morges' }],
    faq,
  },
)
</script>

<template>
  <QuartierPage
    :faq="faq"
    city="lausanne"
    quartier="Morges"
    slug="avocat-morges"
    intro="Vous habitez ou travaillez à Morges ? Contrairement à une idée répandue, Morges ne relève pas des tribunaux lausannois mais du Tribunal d'arrondissement de La Côte, à Nyon. Notre bureau de Lausanne, à 15 minutes en train, plaide devant l'ensemble des juridictions vaudoises."
    :tribunal="{
      nom: 'Tribunal d\'arrondissement de La Côte',
      siege: 'Route de Saint-Cergue 38, 1260 Nyon',
      precision: 'L\'arrondissement de La Côte couvre les districts de Morges et de Nyon. Les habitants de Morges y sont rattachés pour le civil, le pénal de première instance et le droit de la famille — pas au Tribunal d\'arrondissement de Lausanne.',
    }"
    :contexte-local="{
      titre: 'Ce qui distingue un dossier morgien',
      paragraphes: [
        'Morges occupe une position particulière dans le canton : administrativement rattachée à l\'arrondissement judiciaire de La Côte, elle gravite économiquement autour de Lausanne. Une grande partie de ses habitants travaillent dans l\'agglomération lausannoise tout en résidant sur la côte. Cette dissociation entre lieu de vie et lieu de travail a une conséquence juridique concrète : en droit du travail, c\'est le Tribunal de prud\'hommes du lieu de travail ou du siège de l\'employeur qui est saisi, alors qu\'en droit de la famille c\'est le tribunal du domicile. Un même Morgien peut donc relever de deux juridictions distinctes selon la nature du litige.',
        'La ville concentre par ailleurs un tissu de PME, de commerces de centre-ville et d\'activités liées au lac. Les litiges que nous traitons pour la région portent souvent sur les baux commerciaux, les contrats de distribution et les conflits entre associés de petites structures — des matières où la valeur litigieuse détermine si le tribunal d\'arrondissement est compétent (entre CHF 10\'000 et 100\'000) ou si l\'affaire remonte directement à la Cour civile du Tribunal cantonal.',
        'Enfin, la proximité du district de Nyon et de l\'arc franco-valdo-genevois amène régulièrement des situations transfrontalières : frontaliers, doubles domiciles, successions comportant des biens en France. Ces dossiers appellent une analyse du droit international privé suisse en plus du droit de fond.',
      ],
    }"
    :domaines="[
      { url: '/droit-bail', titre: 'Baux commerciaux à Morges', description: 'Commerces de centre-ville, résiliations, hausses de loyer, défauts de la chose louée.' },
      { url: '/droit-travail', titre: 'Droit du travail — frontière Morges/Lausanne', description: 'Le tribunal compétent dépend du lieu de travail, pas du domicile. Licenciement, heures supplémentaires, certificat.' },
      { url: '/droit-affaires', titre: 'PME et indépendants morgiens', description: 'Constitution de Sàrl, pactes d\'associés, contentieux contractuel, recouvrement.' },
      { url: '/droit-famille', titre: 'Famille — Tribunal de La Côte', description: 'Divorce, mesures protectrices et garde devant le tribunal de Nyon.' },
      { url: '/droit-penal', titre: 'Défense pénale sur La Côte', description: 'Ministère public de l\'arrondissement de La Côte, ordonnances pénales, permanence 24h/24.' },
      { url: '/droit-etrangers', titre: 'Permis et situations transfrontalières', description: 'Frontaliers, permis B et C, regroupement familial, double domicile.' },
    ]"
    trajet="Morges est reliée à Lausanne par le train en 15 minutes (plusieurs liaisons par heure) et par l'autoroute A1 en une vingtaine de minutes. Notre bureau, Rue Saint-Pierre 2, se trouve à 5 minutes à pied de la gare de Lausanne — le trajet porte-à-porte depuis Morges prend donc une demi-heure environ en transports publics. Pour les audiences à Nyon, nous nous déplaçons directement au tribunal."
    :juridictions="[
      'Tribunal d\'arrondissement de La Côte (Nyon) — civil, pénal, famille',
      'Ministère public de l\'arrondissement de La Côte',
      'Justice de paix du district de Morges — protection de l\'adulte et de l\'enfant, successions',
      'Tribunal cantonal vaudois (Lausanne) — appel civil et pénal',
      'Cour de droit administratif et public (CDAP)',
      'Tribunal des baux vaudois',
      'Tribunal de prud\'hommes de l\'arrondissement de La Côte',
    ]"
    proximite="Morges compte environ 16'000 habitants. Chef-lieu du district du même nom, la ville est le pôle administratif et commercial de la région entre Lausanne et Nyon."
  />
</template>
