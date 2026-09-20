<script setup lang="ts">
/**
 * Page pénale vaudoise. Le CPP est fédéral, mais l'organisation du Ministère public,
 * les tribunaux compétents et les autorités de recours sont cantonaux — et la permanence
 * 24h/24 trouve ici son terrain le plus utile : la garde à vue ne prévient pas.
 * La page genevoise reste /droit-penal ; les deux ne se recouvrent pas.
 */
const faq = [
  {
    question: 'Je viens d\'être arrêté dans le canton de Vaud, que faire ?',
    answer: 'Vous avez le droit d\'être informé des faits reprochés, de garder le silence et d\'avertir un proche (art. 158 CPP). Vous avez surtout le droit de faire appel à un avocat et de vous entretenir librement avec lui dès le début de la première audition — c\'est ce que l\'on appelle l\'avocat de la première heure (art. 159 CPP). N\'attendez pas l\'audition pour appeler : ce qui est dit sans conseil se retrouve au dossier. Notre permanence répond 24h/24 au 021 512 10 25.',
  },
  {
    question: 'Quel est le délai pour faire opposition à une ordonnance pénale dans le canton de Vaud ?',
    answer: 'Dix jours à compter de la notification (art. 354 CPP), comme partout en Suisse. L\'opposition doit être écrite et parvenir au Ministère public dans ce délai — un courriel simple ne satisfait pas à l\'exigence de forme écrite de l\'art. 110 CPP. Passé ce délai, l\'ordonnance devient un jugement définitif, inscrit au casier judiciaire et exécutoire. C\'est le délai le plus souvent manqué en pratique.',
  },
  {
    question: 'Quels tribunaux pénaux dans le canton de Vaud ?',
    answer: 'Le Ministère public vaudois conduit l\'instruction, avec un ministère public central et des ministères publics d\'arrondissement. En première instance, ce sont les tribunaux d\'arrondissement qui jugent — Lausanne, Est vaudois à Vevey, La Côte à Nyon, Broye et Nord vaudois — selon la gravité et le lieu de l\'infraction. L\'appel se porte devant la Cour d\'appel pénale du Tribunal cantonal vaudois, à Lausanne. En dernière instance, le Tribunal fédéral, également à Lausanne.',
  },
  {
    question: 'La procédure pénale vaudoise diffère-t-elle de la genevoise ?',
    answer: 'Le Code de procédure pénale est fédéral : les droits, les délais et les voies de recours sont identiques. Ce qui change, c\'est l\'organisation — Vaud répartit ses juridictions de première instance en quatre arrondissements là où Genève concentre tout au Palais de justice, et les pratiques du Ministère public en matière de classement, de procédure simplifiée ou de peines requises varient d\'un canton à l\'autre. [À VALIDER — Me Cheema : préciser les différences de pratique que vous observez concrètement entre les deux ministères publics.]',
  },
  {
    question: 'Puis-je obtenir un avocat d\'office dans le canton de Vaud ?',
    answer: 'Oui. La défense d\'office est ordonnée lorsque la cause n\'est pas de peu de gravité et que le prévenu ne peut assumer les frais de sa défense (art. 132 CPP). Dans les cas de défense obligatoire — notamment une détention provisoire de plus de dix jours ou une peine privative de liberté de plus d\'un an envisagée — un défenseur est désigné même sans demande. La requête se dépose auprès de la direction de la procédure.',
  },
  {
    question: 'Intervenez-vous en urgence la nuit et le week-end ?',
    answer: 'Oui. Notre permanence fonctionne 24h/24 et 7j/7 : 021 512 10 25 pour le canton de Vaud, 022 512 10 50 pour Genève. Une arrestation ou une audition ne se planifie pas, et les premières heures sont celles où la défense se joue.',
  },
]

useLocalSeo(
  'Avocat Pénal Lausanne (Vaud) | Garde à vue 24h/24 – Clegal Avocats',
  'Avocat pénaliste à Lausanne. Garde à vue, opposition à ordonnance pénale (10 jours), tribunaux vaudois. Permanence 24h/24 au 021 512 10 25.',
  {
    city: 'lausanne',
    breadcrumbs: [
      { name: 'Droit pénal', url: 'https://clegal-avocats.ch/droit-penal' },
      { name: 'Avocat pénal Lausanne', url: 'https://clegal-avocats.ch/droit-penal-lausanne' },
    ],
    services: [
      {
        name: 'Avocat pénaliste à Lausanne',
        serviceType: 'Défense pénale',
        description: 'Défense pénale devant les juridictions vaudoises : garde à vue et avocat de la première heure, opposition à ordonnance pénale, tribunaux d\'arrondissement, Cour d\'appel pénale du Tribunal cantonal vaudois. Permanence 24h/24.',
        url: 'https://clegal-avocats.ch/droit-penal-lausanne',
        category: 'Droit pénal',
      },
    ],
    faq,
  },
)
</script>

<template>
  <main class="bg-slate-50">
    <!-- Urgence en tête : c'est le besoin réel de qui arrive sur cette page -->
    <section class="pt-32 pb-8 bg-white border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          :links="[
            { name: 'Droit pénal', path: '/droit-penal' },
            { name: 'Pénal Lausanne', path: '/droit-penal-lausanne' },
          ]"
        />

        <div class="mt-6 bg-red-900 text-white rounded-xl p-6">
          <p class="text-xs uppercase tracking-widest font-bold text-red-200 mb-2">
            Urgence pénale — canton de Vaud
          </p>
          <p class="text-2xl font-semibold">
            <a href="tel:0215121025" class="hover:underline">021 512 10 25</a>
            <span class="text-base font-normal text-red-100 ml-3">24h/24 · 7j/7</span>
          </p>
          <p class="text-sm text-red-100 mt-3 leading-relaxed">
            Arrestation, garde à vue, convocation du Ministère public : appelez avant l'audition.
            Vous avez le droit à un avocat dès la première heure (art. 159 CPP), et ce qui est dit
            sans conseil reste au dossier.
          </p>
        </div>

        <h1 class="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-8 mb-4">
          Avocat pénaliste à Lausanne
        </h1>
        <p class="text-lg text-slate-600 max-w-3xl">
          Défense devant le Ministère public vaudois, les tribunaux d'arrondissement et la Cour d'appel
          pénale du Tribunal cantonal. Bureau à Lausanne, Rue Saint-Pierre 2. Premier rendez-vous
          d'analyse à CHF 155.-.
        </p>
      </div>
    </section>

    <!-- Garde à vue : la section qui manquait au site -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-semibold text-slate-900 mb-4">Garde à vue : vos droits, tout de suite</h2>

        <div class="bg-slate-50 border-l-4 border-red-900 rounded-r-xl p-6 mb-8">
          <p class="text-xs uppercase tracking-widest font-bold text-red-900 mb-2">Réponse rapide</p>
          <p class="text-slate-800 leading-relaxed">
            Dès votre interpellation, vous devez être informé des faits reprochés, vous pouvez garder le
            silence, avertir un proche et exiger un avocat <strong>avant la première audition</strong>.
            Ces droits découlent des art. 158 et 159 CPP et valent dans toute la Suisse, canton de Vaud compris.
          </p>
        </div>

        <ul class="space-y-4 text-slate-700">
          <li class="flex gap-3">
            <span class="text-red-900 font-bold shrink-0">1.</span>
            <span><strong>Être informé.</strong> La police doit vous indiquer les infractions reprochées et vos droits. Une audition menée sans cette information est viciée.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-red-900 font-bold shrink-0">2.</span>
            <span><strong>Garder le silence.</strong> Vous n'êtes jamais tenu de vous incriminer. Le silence ne vaut pas aveu et ne peut fonder une condamnation.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-red-900 font-bold shrink-0">3.</span>
            <span><strong>Appeler un avocat.</strong> L'avocat de la première heure peut s'entretenir librement avec vous avant l'audition et y assister. C'est le moment le plus déterminant de la procédure.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-red-900 font-bold shrink-0">4.</span>
            <span><strong>Avertir un proche.</strong> Sauf risque de collusion retenu par la direction de la procédure.</span>
          </li>
          <li class="flex gap-3">
            <span class="text-red-900 font-bold shrink-0">5.</span>
            <span><strong>Relire avant de signer.</strong> Le procès-verbal fait foi. Toute imprécision doit être corrigée avant signature.</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Ordonnance pénale : le délai de 10 jours -->
    <section class="py-16 border-t border-slate-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-semibold text-slate-900 mb-4">
          Ordonnance pénale : dix jours, par écrit
        </h2>
        <p class="text-slate-700 leading-relaxed mb-6">
          La majorité des affaires pénales se terminent par une ordonnance pénale du Ministère public,
          sans audience. Si vous ne réagissez pas dans les <strong>dix jours suivant la notification</strong>
          (art. 354 CPP), elle devient un jugement définitif : inscription au casier judiciaire, peine
          exécutoire, plus aucun recours.
        </p>
        <div class="bg-white border border-slate-200 rounded-xl p-6">
          <p class="text-slate-800 leading-relaxed">
            L'opposition doit être <strong>écrite</strong>. L'art. 110 CPP impose la forme écrite : un simple
            courriel ne suffit pas. Elle n'a pas besoin d'être motivée à ce stade — l'essentiel est qu'elle
            parvienne au Ministère public dans le délai. Une opposition déposée à temps fait tomber
            l'ordonnance et ouvre la procédure ordinaire.
          </p>
        </div>
      </div>
    </section>

    <!-- Organisation judiciaire vaudoise -->
    <section class="py-16 bg-white border-t border-slate-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-semibold text-slate-900 mb-4">Les juridictions pénales vaudoises</h2>
        <p class="text-slate-700 leading-relaxed mb-6">
          Le Code de procédure pénale est fédéral, mais l'organisation judiciaire est cantonale. Vaud
          répartit ses juridictions de première instance en quatre arrondissements, là où Genève concentre
          tout au Palais de justice.
        </p>
        <ul class="space-y-3 text-slate-700">
          <li class="flex gap-3"><span class="text-red-900 font-bold">›</span><span><strong>Ministère public vaudois</strong> — instruction, ordonnances pénales, mise en accusation</span></li>
          <li class="flex gap-3"><span class="text-red-900 font-bold">›</span><span><strong>Tribunaux d'arrondissement</strong> — jugement en première instance : Lausanne, Est vaudois (Vevey), La Côte (Nyon), Broye et Nord vaudois</span></li>
          <li class="flex gap-3"><span class="text-red-900 font-bold">›</span><span><strong>Tribunal des mesures de contrainte</strong> — détention provisoire et mesures de surveillance</span></li>
          <li class="flex gap-3"><span class="text-red-900 font-bold">›</span><span><strong>Cour d'appel pénale du Tribunal cantonal vaudois</strong> (Lausanne) — appel</span></li>
          <li class="flex gap-3"><span class="text-red-900 font-bold">›</span><span><strong>Tribunal fédéral</strong> (Lausanne) — recours en matière pénale</span></li>
        </ul>
        <p class="text-slate-700 leading-relaxed mt-6">
          Pour une affaire relevant du canton de Genève, voir notre
          <NuxtLink to="/droit-penal" class="text-red-900 hover:underline font-medium">page sur le droit pénal à Genève</NuxtLink>.
        </p>
      </div>
    </section>

    <FaqSection :items="faq" title="Droit pénal vaudois — questions fréquentes" />

    <section class="py-16 bg-slate-900 text-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-semibold tracking-tight">Une urgence ne s'analyse pas demain</h2>
        <p class="mt-3 text-slate-300">
          Permanence 24h/24 pour le canton de Vaud. Premier rendez-vous d'analyse à CHF 155.-
          à notre bureau de Lausanne.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:0215121025" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md">
            021 512 10 25 — 24h/24
          </a>
          <NuxtLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md">
            Prendre rendez-vous
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
