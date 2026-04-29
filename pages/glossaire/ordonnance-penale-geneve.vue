<script setup lang="ts">
useLocalSeo(
  'Ordonnance pénale à Genève : définition, opposition, délai',
  'Ordonnance pénale à Genève : décision du Ministère public, peine ≤ 180 jours-amende, opposition sous 10 jours (art. 354 CPP). Définition juridique complète.',
  {
    city: 'geneve',
    breadcrumbs: [
      { name: 'Glossaire', url: 'https://clegal-avocats.ch/glossaire' },
      { name: 'Ordonnance pénale', url: 'https://clegal-avocats.ch/glossaire/ordonnance-penale-geneve' },
    ],
    faq: [
      {
        question: 'Que faire si je reçois une ordonnance pénale à Genève ?',
        answer: 'Vous avez 10 jours dès la notification pour faire opposition (art. 354 CPP). L\'opposition est gratuite, n\'a pas besoin d\'être motivée, et entraîne le renvoi devant le Tribunal de police ou correctionnel. Sans opposition, l\'ordonnance devient définitive et entre au casier judiciaire.',
      },
      {
        question: 'Qui prononce une ordonnance pénale ?',
        answer: 'Le Ministère public (Place du Bourg-de-Four 3, 1204 Genève) à Genève. La peine maximale possible est de 180 jours-amende ou 6 mois de privation de liberté avec sursis (art. 352 CPP).',
      },
    ],
  },
)
</script>

<template>
    <main class="bg-slate-50">
      <section class="pt-32 pb-8 bg-white border-b border-slate-200">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb :links="[
            { name: 'Glossaire', path: '/glossaire' },
            { name: 'Ordonnance pénale', path: '/glossaire/ordonnance-penale-geneve' },
          ]" />
          <p class="text-xs uppercase tracking-widest text-red-900 font-semibold mt-6">Glossaire · Droit pénal</p>
          <h1 class="text-4xl font-semibold text-slate-900 tracking-tight mt-3 mb-4">Ordonnance pénale</h1>
        </div>
      </section>

      <section class="py-12">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuickAnswer label="Définition rapide">
            <p>
              L'<strong>ordonnance pénale</strong> est une décision écrite du <strong>Ministère public</strong> qui
              statue sur la culpabilité et la peine <strong>sans procès</strong>. Elle peut prononcer une peine
              jusqu'à 180 jours-amende ou 6 mois de privation de liberté (art. 352 CPP). Vous disposez de
              <strong>10 jours dès notification</strong> pour faire opposition (art. 354 CPP) — sans quoi elle devient
              définitive et inscrite au casier judiciaire.
            </p>
          </QuickAnswer>

          <div class="prose prose-slate prose-lg">
            <h2>À Genève, qui prononce les ordonnances pénales ?</h2>
            <p>
              Le Ministère public de Genève (Place du Bourg-de-Four 3, 1204 Genève) prononce des ordonnances pénales
              dans les affaires où les faits sont clairs et où la peine envisagée n'excède pas le seuil légal.
            </p>

            <h2>Comment faire opposition ?</h2>
            <p>
              L'opposition se dépose par écrit auprès du Ministère public dans les 10 jours dès la notification (art.
              354 CPP). Elle peut être déposée par courrier, par dépôt physique ou par e-mail dans certaines conditions.
              Elle est <strong>gratuite</strong> et <strong>n'a pas besoin d'être motivée</strong>.
            </p>

            <h2>Quels sont les risques d'une opposition ?</h2>
            <p>
              L'opposition entraîne le renvoi du dossier devant le Tribunal de police ou le Tribunal correctionnel de
              Genève. Le tribunal n'est pas lié par la peine proposée par le procureur — il peut <strong>confirmer,
              alourdir ou réduire</strong> la peine. Un avocat pénaliste évalue avec vous l'opportunité de l'opposition
              avant le délai de 10 jours.
            </p>

            <p>
              Voir aussi notre article complet : <NuxtLink to="/blog/procedure-penale-geneve" class="text-red-900 hover:underline">Procédure pénale à Genève — guide complet</NuxtLink>.
            </p>
          </div>
        </div>
      </section>
    </main>
</template>
