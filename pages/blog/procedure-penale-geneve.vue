<script setup lang="ts">
useLocalSeo(
  'Procédure pénale à Genève : guide complet 2026 — Clegal Avocats',
  'Procédure pénale à Genève : étapes, délais, droits du prévenu et de la victime, coût d\'un avocat pénaliste. Du Ministère public au Tribunal correctionnel.',
  {
    city: 'geneve',
    breadcrumbs: [
      { name: 'Blog', url: 'https://clegal-avocats.ch/blog' },
      { name: 'Procédure pénale à Genève', url: 'https://clegal-avocats.ch/blog/procedure-penale-geneve' },
    ],
    faq: [
      {
        question: 'Combien dure une procédure pénale à Genève ?',
        answer: 'À Genève, une procédure pénale simple (ordonnance pénale du Ministère public) est traitée en 3 à 6 mois. Une procédure de jugement devant le Tribunal de police ou le Tribunal correctionnel dure généralement 12 à 24 mois en première instance. En cas d\'appel devant la Chambre pénale d\'appel et de révision, comptez 6 à 12 mois supplémentaires.',
      },
      {
        question: 'Quels sont mes droits en tant que prévenu à Genève ?',
        answer: 'Le prévenu a le droit fondamental à un avocat dès la première audition (art. 158 CPP), au silence, à être informé des faits qui lui sont reprochés, à la consultation du dossier, à la présomption d\'innocence et à un procès équitable. Pour les délits passibles de plus d\'un an de prison, l\'assistance d\'un avocat est obligatoire (défense d\'office si nécessaire).',
      },
      {
        question: 'Quel est le coût d\'un avocat pénaliste à Genève ?',
        answer: 'Les honoraires d\'un avocat pénaliste à Genève se situent entre CHF 350 et CHF 500 de l\'heure. Pour des dossiers forfaitaires, comptez CHF 3\'000 à CHF 8\'000 selon la complexité. La défense d\'office (assistance judiciaire pénale, art. 132 CPP) est accordée si vos moyens sont insuffisants ou si la défense est obligatoire et que vous n\'avez pas d\'avocat.',
      },
      {
        question: 'Que faire si je suis convoqué par la police ou le Ministère public ?',
        answer: 'Ne répondez à aucune question avant d\'avoir consulté un avocat. Vous avez le droit fondamental au silence. Une convocation n\'est pas une condamnation. Contactez immédiatement un avocat pénaliste pour préparer votre audition, examiner les pièces du dossier et définir votre stratégie de défense.',
      },
      {
        question: 'Comment porter plainte pénale à Genève ?',
        answer: 'Vous pouvez déposer plainte au commissariat de police, par courrier au Ministère public (Place du Bourg-de-Four 3, 1204 Genève) ou en ligne sur le portail Suisse-ePolice. Pour les infractions passibles de poursuite sur plainte (art. 30 CP), le délai est de 3 mois dès la connaissance des faits et de l\'auteur. Un avocat peut vous accompagner pour formaliser la plainte et faire valoir vos droits de partie plaignante (LAVI le cas échéant).',
      },
      {
        question: 'L\'ordonnance pénale est-elle contestable à Genève ?',
        answer: 'Oui. L\'ordonnance pénale du Ministère public peut être frappée d\'opposition dans un délai de 10 jours dès sa notification (art. 354 CPP). Sans opposition, elle devient définitive et exécutoire. L\'opposition entraîne le renvoi du dossier devant le Tribunal de police ou correctionnel. Un avocat est essentiel pour analyser l\'opportunité de l\'opposition et préparer le procès.',
      },
    ],
  },
)

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Procédure pénale à Genève : guide complet 2026',
        description: 'Procédure pénale à Genève : étapes, délais, droits du prévenu et de la victime, coût d\'un avocat pénaliste.',
        image: 'https://clegal-avocats.ch/images/landing_hero_optimized.jpg',
        datePublished: '2026-04-28',
        dateModified: '2026-04-28',
        author: {
          '@type': 'Person',
          name: 'Me Mansour Cheema',
          jobTitle: 'Avocat au Barreau – Associé fondateur',
          url: 'https://clegal-avocats.ch/equipe#mansour-cheema',
          worksFor: { '@type': 'LegalService', name: 'Clegal Avocats Genève' },
        },
        publisher: {
          '@type': 'LegalService',
          name: 'Clegal Avocats',
          logo: { '@type': 'ImageObject', url: 'https://clegal-avocats.ch/logo.svg' },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://clegal-avocats.ch/blog/procedure-penale-geneve' },
        about: { '@type': 'Thing', name: 'Procédure pénale à Genève' },
        keywords: 'procédure pénale Genève, avocat pénaliste Genève, ordonnance pénale, ministère public Genève, droits prévenu',
      }),
    },
  ],
})
</script>

<template>
    <main class="bg-slate-50">
      <article class="pt-32 pb-12 bg-white border-b border-slate-200">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            :links="[
              { name: 'Blog', path: '/blog' },
              { name: 'Procédure pénale à Genève', path: '/blog/procedure-penale-geneve' },
            ]"
          />

          <p class="text-xs uppercase tracking-widest text-red-900 font-semibold mt-6">Droit pénal · Genève</p>
          <h1 class="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mt-3">
            Procédure pénale à Genève : guide complet
          </h1>
          <p class="text-lg text-slate-600 mt-4">
            Étapes, délais, droits du prévenu et de la victime, coût d'un avocat pénaliste — du Ministère public au Tribunal correctionnel.
          </p>

          <div class="mt-6 flex items-center gap-4 text-xs text-slate-500">
            <div class="flex items-center gap-2">
              <NuxtImg
                src="/images/mansour_cheema.jpg"
                alt="Me Mansour Cheema"
                width="32"
                height="32"
                class="w-8 h-8 rounded-full object-cover"
              />
              <span>Par <strong class="text-slate-700">Me Mansour Cheema</strong></span>
            </div>
            <span>·</span>
            <time datetime="2026-04-28">28 avril 2026</time>
            <span>·</span>
            <span>Lecture 10 min</span>
          </div>
        </div>
      </article>

      <section class="py-12">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <aside class="bg-red-50 border-l-4 border-red-900 p-6 rounded-r-xl">
            <p class="text-xs uppercase tracking-widest text-red-900 font-bold mb-3">Réponse rapide</p>
            <p class="text-slate-800 leading-relaxed">
              La procédure pénale à Genève suit le <strong>Code de procédure pénale suisse (CPP)</strong>. Elle commence par
              l'instruction du <strong>Ministère public</strong> (Place du Bourg-de-Four 3) et peut se terminer par une
              <strong>ordonnance pénale</strong> (peine ≤ 180 jours-amende, opposition sous 10 jours) ou un renvoi devant
              le <strong>Tribunal de police</strong> ou le <strong>Tribunal correctionnel</strong>. Durée moyenne : 3-6 mois
              pour une ordonnance, 12-24 mois pour un jugement, +6-12 mois en cas d'appel à la Chambre pénale d'appel et
              de révision (CPAR). L'assistance d'un avocat est essentielle dès la première audition (art. 158 CPP).
            </p>
          </aside>
        </div>
      </section>

      <section class="pb-16">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">Les autorités pénales à Genève</h2>
          <p class="text-slate-700">
            Avant d'aborder la procédure, il faut comprendre qui fait quoi à Genève. Cinq autorités principales
            interviennent au pénal&nbsp;:
          </p>
          <ul class="list-disc list-inside text-slate-700 space-y-2 mt-3">
            <li><strong>Police</strong>&nbsp;: enquête initiale, premières auditions, transmission au Ministère public</li>
            <li><strong>Ministère public</strong> (Place du Bourg-de-Four 3, 1204 Genève) : direction de l'instruction, ordonnances pénales, mise en accusation</li>
            <li><strong>Tribunal des mesures de contrainte (TMC)</strong>&nbsp;: ordonne et contrôle la détention provisoire et les mesures de surveillance</li>
            <li><strong>Tribunal de police</strong>&nbsp;: juge les contraventions et délits jusqu'à 2 ans de privation de liberté</li>
            <li><strong>Tribunal correctionnel</strong>&nbsp;: juge les infractions plus graves (jusqu'à 10 ans de privation de liberté)</li>
            <li><strong>Tribunal criminel</strong>&nbsp;: juge les crimes les plus graves (au-delà de 10 ans)</li>
            <li><strong>Chambre pénale d'appel et de révision (CPAR)</strong>&nbsp;: examine les appels contre les jugements de première instance</li>
          </ul>

          <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">Les étapes d'une procédure pénale à Genève</h2>

          <h3 class="text-xl font-semibold text-slate-900 mt-8 mb-3">1. La phase d'enquête (police + Ministère public)</h3>
          <p class="text-slate-700">
            Tout commence soit par une <strong>plainte</strong>, soit par une <strong>dénonciation</strong>, soit par une
            <strong>action d'office</strong> de la police. La police mène les premiers actes&nbsp;: auditions, perquisitions,
            saisies. Elle transmet le dossier au Ministère public qui dirige l'instruction (art. 16 CPP).
          </p>

          <div class="my-6 bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
            <p class="text-sm font-bold text-amber-900">Action prioritaire</p>
            <p class="text-sm text-amber-900 mt-2">
              Dès une convocation, contactez un avocat pénaliste avant toute audition. Vos premières déclarations
              déterminent souvent l'orientation du dossier.
            </p>
          </div>

          <h3 class="text-xl font-semibold text-slate-900 mt-8 mb-3">2. L'instruction par le Ministère public</h3>
          <p class="text-slate-700">
            Le procureur examine les éléments, ordonne des actes d'instruction (auditions, expertises, mandats), peut
            demander la détention provisoire au TMC. À l'issue, il a trois options&nbsp;:
          </p>
          <ul class="list-disc list-inside text-slate-700 space-y-2 mt-3">
            <li><strong>Classement</strong> (art. 319 CPP) si les preuves sont insuffisantes</li>
            <li><strong>Ordonnance pénale</strong> (art. 352 CPP) pour une peine ≤ 180 jours-amende ou 6 mois de privation de liberté</li>
            <li><strong>Mise en accusation</strong> (art. 324 CPP) renvoyant l'affaire devant le tribunal compétent</li>
          </ul>

          <h3 class="text-xl font-semibold text-slate-900 mt-8 mb-3">3. L'ordonnance pénale et l'opposition</h3>
          <p class="text-slate-700">
            L'ordonnance pénale est une décision écrite du Ministère public qui statue sur la culpabilité et la peine sans
            procès. Vous disposez de <strong>10 jours dès la notification</strong> pour faire opposition (art. 354 CPP).
            Sans opposition, elle devient définitive et entre au casier judiciaire.
          </p>
          <p class="text-slate-700 mt-3">
            <strong>L'opposition est gratuite et n'a pas besoin d'être motivée</strong>, mais elle déclenche un renvoi devant
            le tribunal. Un avocat évalue si l'opposition est dans votre intérêt&nbsp;: si la peine peut être confirmée ou
            aggravée au procès, mieux vaut parfois ne pas s'opposer.
          </p>

          <h3 class="text-xl font-semibold text-slate-900 mt-8 mb-3">4. Le procès devant le tribunal</h3>
          <p class="text-slate-700">
            Devant le Tribunal de police, le Tribunal correctionnel ou le Tribunal criminel, l'affaire est plaidée. Le
            juge entend le prévenu, les témoins, les parties plaignantes, examine les preuves, écoute le réquisitoire du
            Ministère public et la plaidoirie de la défense. Le jugement peut être prononcé immédiatement ou notifié dans
            les semaines suivantes.
          </p>

          <h3 class="text-xl font-semibold text-slate-900 mt-8 mb-3">5. L'appel devant la Chambre pénale</h3>
          <p class="text-slate-700">
            Le jugement est susceptible d'appel dans les 10 jours dès sa notification écrite (art. 399 CPP). L'appel est
            traité par la Chambre pénale d'appel et de révision de la Cour de justice. Un recours au Tribunal fédéral
            (Lausanne) reste possible pour les violations du droit fédéral ou de la Constitution.
          </p>

          <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">Vos droits en tant que prévenu</h2>
          <div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p class="text-sm font-bold text-slate-900">Droit à l'avocat dès la 1ère audition</p>
              <p class="text-sm text-slate-600 mt-2">
                Art. 158 CPP. Avant toute déclaration, vous devez être informé de votre droit d'être assisté d'un avocat
                et du droit au silence.
              </p>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p class="text-sm font-bold text-slate-900">Droit au silence</p>
              <p class="text-sm text-slate-600 mt-2">
                Vous n'avez aucune obligation de répondre aux questions ni de vous incriminer. Le silence ne peut être
                interprété en votre défaveur.
              </p>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p class="text-sm font-bold text-slate-900">Présomption d'innocence</p>
              <p class="text-sm text-slate-600 mt-2">
                Art. 10 CPP. La charge de la preuve incombe à l'accusation. Le doute profite au prévenu (in dubio pro reo).
              </p>
            </div>
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <p class="text-sm font-bold text-slate-900">Accès au dossier</p>
              <p class="text-sm text-slate-600 mt-2">
                Art. 101 CPP. Votre avocat peut consulter et copier l'intégralité du dossier dès la fin de la première
                audition (sauf restrictions liées à l'enquête).
              </p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">Coût d'un avocat pénaliste à Genève</h2>
          <div class="my-6 overflow-x-auto">
            <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead class="bg-slate-100">
                <tr>
                  <th class="px-4 py-3 text-left font-semibold text-slate-900">Type d'intervention</th>
                  <th class="px-4 py-3 text-right font-semibold text-slate-900">Coût indicatif</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr><td class="px-4 py-3">1er rendez-vous d'analyse Clegal Avocats</td><td class="px-4 py-3 text-right">CHF 155 forfait</td></tr>
                <tr><td class="px-4 py-3">Tarif horaire pénaliste Genève</td><td class="px-4 py-3 text-right">CHF 350 - 500 / h</td></tr>
                <tr><td class="px-4 py-3">Assistance lors d'une audition (police / MP)</td><td class="px-4 py-3 text-right">CHF 700 - 1'500</td></tr>
                <tr><td class="px-4 py-3">Opposition à ordonnance pénale + procès</td><td class="px-4 py-3 text-right">CHF 3'000 - 8'000</td></tr>
                <tr><td class="px-4 py-3">Défense devant le Tribunal correctionnel</td><td class="px-4 py-3 text-right">CHF 8'000 - 25'000+</td></tr>
                <tr><td class="px-4 py-3">Appel à la CPAR</td><td class="px-4 py-3 text-right">CHF 5'000 - 15'000+</td></tr>
              </tbody>
            </table>
          </div>

          <p class="text-slate-700 mt-4">
            <strong>Défense d'office</strong> (art. 132 CPP)&nbsp;: si vous n'avez pas d'avocat alors qu'il en faut un
            obligatoirement (peine privative de liberté > 1 an, dossier complexe, mineur), un avocat est désigné par
            l'autorité. Le coût est avancé par l'État ; en cas de condamnation, vous pouvez être condamné aux frais.
          </p>

          <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">Si vous êtes victime (LAVI)</h2>
          <p class="text-slate-700">
            La <strong>Loi sur l'aide aux victimes d'infractions (LAVI)</strong> permet aux victimes d'atteintes graves à
            l'intégrité physique, psychique ou sexuelle d'obtenir&nbsp;:
          </p>
          <ul class="list-disc list-inside text-slate-700 space-y-2 mt-3">
            <li>Un soutien psychologique et juridique gratuit auprès du <strong>Centre LAVI Genève</strong> (Boulevard Saint-Georges)</li>
            <li>Une aide financière immédiate et à plus long terme</li>
            <li>Une indemnisation et une réparation morale</li>
            <li>Le droit de se constituer partie plaignante au pénal (et au civil par adhésion)</li>
          </ul>
          <p class="text-slate-700 mt-3">
            Notre cabinet accompagne tant les prévenus que les victimes. Le rôle de l'avocat de la partie plaignante est
            central pour faire valoir les droits, sécuriser la preuve et obtenir réparation.
          </p>

          <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">Selon notre expérience</h2>
          <blockquote class="border-l-4 border-red-900 pl-6 italic text-slate-700 my-6">
            <p>
              «&nbsp;Beaucoup de personnes signent une ordonnance pénale sans en mesurer les conséquences&nbsp;: inscription
              au casier, impact sur l'emploi, sur le permis de séjour pour les étrangers, sur le permis de conduire. Une
              consultation rapide avec un pénaliste avant l'expiration du délai de 10 jours coûte rarement plus de
              CHF 500 et peut éviter des années de complications.&nbsp;»
            </p>
            <footer class="text-xs text-slate-500 mt-3 not-italic">
              — Me Mansour Cheema, Clegal Avocats Genève
            </footer>
          </blockquote>

          <h2 class="text-2xl font-bold text-slate-900 mt-12 mb-4">Pour aller plus loin</h2>
          <ul class="text-slate-700 space-y-2">
            <li><NuxtLink to="/droit-penal" class="text-red-900 hover:underline">→ Notre page Avocat Droit Pénal Genève</NuxtLink></li>
            <li><NuxtLink to="/droit-etrangers/avocat-permis-sejour" class="text-red-900 hover:underline">→ Conséquences d'une condamnation sur le permis de séjour</NuxtLink></li>
            <li><NuxtLink to="/honoraires" class="text-red-900 hover:underline">→ Tous nos honoraires</NuxtLink></li>
          </ul>

          <div class="mt-12 p-6 bg-slate-900 text-white rounded-xl">
            <p class="text-sm uppercase tracking-widest font-bold text-red-300">Urgence pénale</p>
            <h3 class="text-2xl font-semibold mt-2">Convoqué ? Audition demain ? Appelez maintenant.</h3>
            <p class="text-slate-300 mt-2 text-sm">
              Premier rendez-vous d'analyse à CHF 155 — examen du dossier et stratégie de défense en 60 minutes.
            </p>
            <div class="mt-5 flex flex-col sm:flex-row gap-3">
              <a href="tel:0225121050" class="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-md">022 512 10 50</a>
              <NuxtLink to="/contact" class="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md">Demander un rendez-vous</NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>
