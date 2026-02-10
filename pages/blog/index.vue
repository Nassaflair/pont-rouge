<template>
  <div class="antialiased text-slate-800 bg-white">

    <!-- Hero Section -->
    <section class="lg:pt-32 lg:pb-20 pt-28 pb-16 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <Breadcrumb :links="[{ name: 'Blog Juridique', path: '/blog' }]" />

          <h1 class="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
            Blog Juridique Genève : Actualités et Conseils d'Avocats
          </h1>

          <p class="text-lg text-slate-600 leading-relaxed mb-8">
            Retrouvez les conseils juridiques de nos avocats à <strong>Genève</strong>. Droit du travail, droit de la famille, droit pénal et droit des étrangers : décryptage du droit suisse par l'Étude <strong>Pont-Rouge Avocats aux Acacias</strong>.
          </p>

          <div class="flex flex-wrap gap-3 text-sm">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-600">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-red-800"></i>
              Genève, Suisse
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-600">
              <i data-lucide="scale" class="w-3.5 h-3.5 text-red-800"></i>
              Barreau de Genève
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Section - La Minute Juridique -->
    <section class="py-20 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 w-fit mb-4">
            <i data-lucide="play-circle" class="w-4 h-4 text-red-900"></i>
            <span class="text-xs font-bold text-red-900 uppercase tracking-wide">La Minute Juridique</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            Conseils Juridiques en Vidéo par Me Cheema
          </h2>
          <p class="text-slate-600">
            Maître Mansour Cheema, avocat au Barreau de Genève, vous explique vos droits en format court sur TikTok.
          </p>
        </div>

        <a href="https://www.tiktok.com/@clegal.avocats" target="_blank" rel="noopener" class="block group relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 aspect-video max-w-4xl mx-auto">
          <NuxtImg format="webp" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" alt="Chaîne TikTok Clegal Avocats Genève - Conseils juridiques" class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500" loading="lazy" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
              <i data-lucide="play" class="w-8 h-8 text-white ml-1"></i>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <div class="flex items-center gap-3 mb-2">
              <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>
              <span class="text-white font-bold text-lg">@clegal.avocats</span>
            </div>
            <p class="text-slate-300 text-sm">Suivez notre actualité juridique en direct depuis Genève</p>
          </div>
        </a>
      </div>
    </section>

    <!-- Latest Articles -->
    <section class="py-20 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            Derniers Articles Juridiques
          </h2>
          <p class="text-slate-600">
            Nos avocats partagent leur expertise sur les sujets juridiques d'actualité à Genève.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <!-- Article 1 -->
          <NuxtLink to="/blog/travailler-suisse-hors-ue" class="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
            <div class="aspect-video bg-slate-100 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-red-900/20 to-slate-900/40 flex items-center justify-center">
                <i data-lucide="globe" class="w-12 h-12 text-white/80"></i>
              </div>
            </div>
            <div class="p-6">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-800 mb-3">
                Droit des Étrangers
              </span>
              <h3 class="font-semibold text-slate-900 mb-2 group-hover:text-red-800 transition-colors">Travailler en Suisse hors UE-AELE</h3>
              <p class="text-sm text-slate-600 line-clamp-2">Guide complet sur les conditions d'obtention d'un permis de travail pour les ressortissants de pays tiers.</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Articles / Topics Section -->
    <section class="py-20 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12">
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            Nos Domaines d'Expertise à Genève
          </h2>
          <p class="text-slate-600">
            Découvrez nos guides juridiques par domaine de compétence. Conseils pratiques pour les particuliers et entreprises du canton de Genève.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Droit des étrangers -->
          <NuxtLink to="/droit-etrangers" class="group bg-white rounded-xl p-6 border border-slate-200 hover:border-red-200 hover:shadow-lg transition-all">
            <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors">
              <i data-lucide="globe" class="w-6 h-6 text-slate-700 group-hover:text-red-800 transition-colors"></i>
            </div>
            <h3 class="font-semibold text-slate-900 mb-2">Droit des Étrangers</h3>
            <p class="text-sm text-slate-600 mb-4">Permis de séjour, naturalisation et regroupement familial à Genève.</p>
            <span class="text-xs font-medium text-red-800 group-hover:underline">Lire nos conseils →</span>
          </NuxtLink>

          <!-- Droit du travail -->
          <NuxtLink to="/droit-travail" class="group bg-white rounded-xl p-6 border border-slate-200 hover:border-red-200 hover:shadow-lg transition-all">
            <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors">
              <i data-lucide="briefcase" class="w-6 h-6 text-slate-700 group-hover:text-red-800 transition-colors"></i>
            </div>
            <h3 class="font-semibold text-slate-900 mb-2">Droit du Travail</h3>
            <p class="text-sm text-slate-600 mb-4">Licenciement, Prud'hommes et conflits employeur à Genève.</p>
            <span class="text-xs font-medium text-red-800 group-hover:underline">Lire nos conseils →</span>
          </NuxtLink>

          <!-- Droit de la famille -->
          <NuxtLink to="/droit-famille" class="group bg-white rounded-xl p-6 border border-slate-200 hover:border-red-200 hover:shadow-lg transition-all">
            <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors">
              <i data-lucide="heart" class="w-6 h-6 text-slate-700 group-hover:text-red-800 transition-colors"></i>
            </div>
            <h3 class="font-semibold text-slate-900 mb-2">Droit de la Famille</h3>
            <p class="text-sm text-slate-600 mb-4">Divorce, garde d'enfants et pension alimentaire.</p>
            <span class="text-xs font-medium text-red-800 group-hover:underline">Lire nos conseils →</span>
          </NuxtLink>

          <!-- Droit pénal -->
          <NuxtLink to="/droit-penal" class="group bg-white rounded-xl p-6 border border-slate-200 hover:border-red-200 hover:shadow-lg transition-all">
            <div class="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-50 transition-colors">
              <i data-lucide="shield" class="w-6 h-6 text-slate-700 group-hover:text-red-800 transition-colors"></i>
            </div>
            <h3 class="font-semibold text-slate-900 mb-2">Droit Pénal</h3>
            <p class="text-sm text-slate-600 mb-4">Défense pénale et représentation devant les tribunaux genevois.</p>
            <span class="text-xs font-medium text-red-800 group-hover:underline">Lire nos conseils →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ Section for SEO -->
    <section class="py-20 bg-white border-b border-slate-100">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            Questions Fréquentes - Avocat à Genève
          </h2>
          <p class="text-slate-600">Les réponses de nos avocats aux questions les plus posées par nos clients genevois.</p>
        </div>

        <div class="space-y-6">
          <div class="border-b border-slate-200 pb-6">
            <h3 class="text-lg font-semibold text-slate-900 mb-3 flex items-start gap-2">
              <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
              Comment trouver un bon avocat à Genève ?
            </h3>
            <p class="text-slate-600 pl-7">Pour trouver un avocat compétent à Genève, vérifiez son inscription au <strong>Barreau de Genève</strong>, consultez ses domaines de spécialisation et prenez un premier rendez-vous pour évaluer la relation. Notre étude aux Acacias propose une première consultation à CHF 155.-.</p>
          </div>

          <div class="border-b border-slate-200 pb-6">
            <h3 class="text-lg font-semibold text-slate-900 mb-3 flex items-start gap-2">
              <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
              Quels sont les tarifs d'un avocat à Genève ?
            </h3>
            <p class="text-slate-600 pl-7">Les tarifs varient selon la complexité du dossier. À Genève, le tarif horaire moyen se situe entre CHF 250.- et CHF 450.-. Notre étude propose un <strong>premier rendez-vous d'analyse à CHF 155.-</strong> pour évaluer votre situation avant tout engagement.</p>
          </div>

          <div class="border-b border-slate-200 pb-6">
            <h3 class="text-lg font-semibold text-slate-900 mb-3 flex items-start gap-2">
              <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
              Où se situe votre cabinet d'avocats ?
            </h3>
            <p class="text-slate-600 pl-7">Notre étude <strong>Pont-Rouge Avocats</strong> est située au cœur du quartier des Acacias à Genève : <strong>Route des Jeunes 9, 1227 Les Acacias</strong>. Facilement accessible en transports publics (arrêt TPG Acacias) et avec parking à proximité.</p>
          </div>

          <div class="pb-6">
            <h3 class="text-lg font-semibold text-slate-900 mb-3 flex items-start gap-2">
              <i data-lucide="help-circle" class="w-5 h-5 text-red-800 mt-0.5 shrink-0"></i>
              Puis-je bénéficier de l'assistance juridique gratuite ?
            </h3>
            <p class="text-slate-600 pl-7">Oui, sous conditions de ressources, vous pouvez demander l'<strong>assistance juridique</strong> auprès du Tribunal de Genève. Nos avocats peuvent vous accompagner dans cette démarche et acceptent les mandats d'office.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Local SEO Section -->
    <section class="py-20 bg-slate-50 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-6">Notre Étude d'Avocats à Genève</h2>
            <p class="text-slate-600 mb-8 leading-relaxed">
              Située au quartier des <strong>Acacias</strong>, l'Étude Pont-Rouge Avocats vous accueille du lundi au vendredi pour toutes vos questions juridiques. Notre équipe d'avocats inscrits au <strong>Barreau de Genève</strong> vous accompagne avec rigueur et proximité.
            </p>

            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="p-3 bg-white rounded-lg border border-slate-200 shadow-sm shrink-0">
                  <i data-lucide="map-pin" class="w-5 h-5 text-red-900"></i>
                </div>
                <div>
                  <p class="font-semibold text-slate-900">Adresse</p>
                  <p class="text-slate-600">Route des Jeunes 9, 1227 Les Acacias (Genève)</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="p-3 bg-white rounded-lg border border-slate-200 shadow-sm shrink-0">
                  <i data-lucide="phone" class="w-5 h-5 text-red-900"></i>
                </div>
                <div>
                  <p class="font-semibold text-slate-900">Téléphone</p>
                  <a href="tel:0225121050" class="text-slate-600 hover:text-red-900 transition-colors">022 512 10 50</a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="p-3 bg-white rounded-lg border border-slate-200 shadow-sm shrink-0">
                  <i data-lucide="clock" class="w-5 h-5 text-red-900"></i>
                </div>
                <div>
                  <p class="font-semibold text-slate-900">Horaires</p>
                  <p class="text-slate-600">Lundi - Vendredi : 08h30 - 18h00</p>
                </div>
              </div>
            </div>
          </div>

          <div class="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-200 h-[350px]">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?q=Route+des+Jeunes+9+1227+Les+Acacias&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Localisation Pont-Rouge Avocats Genève - Les Acacias"
              class="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20 bg-white" id="formulaire">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Besoin d'un conseil personnalisé ?</h2>
          <p class="text-slate-600">Chaque situation est unique. Réservez votre consultation avec un avocat à Genève.</p>
        </div>
        <ContactForm />
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';

useLocalSeo(
  'Blog Juridique Genève | Conseils d\'Avocats – Clegal Avocats',
  'Blog juridique de Clegal Avocats à Genève. Conseils en droit du travail, famille, pénal et immigration. La Minute Juridique par Me Cheema.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-',
    faq: [
      {
        question: 'Comment trouver un bon avocat à Genève ?',
        answer: 'Pour trouver un avocat compétent à Genève, vérifiez son inscription au Barreau de Genève, consultez ses domaines de spécialisation et prenez un premier rendez-vous pour évaluer la relation. Notre étude aux Acacias propose une première consultation à CHF 155.-.'
      },
      {
        question: 'Quels sont les tarifs d\'un avocat à Genève ?',
        answer: 'Les tarifs varient selon la complexité du dossier. À Genève, le tarif horaire moyen se situe entre CHF 250.- et CHF 450.-. Notre étude propose un premier rendez-vous d\'analyse à CHF 155.- pour évaluer votre situation avant tout engagement.'
      },
      {
        question: 'Où se situe votre cabinet d\'avocats ?',
        answer: 'Notre étude Pont-Rouge Avocats est située au cœur du quartier des Acacias à Genève : Route des Jeunes 9, 1227 Les Acacias. Facilement accessible en transports publics (arrêt TPG Acacias) et avec parking à proximité.'
      },
      {
        question: 'Puis-je bénéficier de l\'assistance juridique gratuite ?',
        answer: 'Oui, sous conditions de ressources, vous pouvez demander l\'assistance juridique auprès du Tribunal de Genève. Nos avocats peuvent vous accompagner dans cette démarche et acceptent les mandats d\'office.'
      }
    ]
  }
);

// Additional VideoObject schema for TikTok content
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        'name': 'La Minute Juridique - Conseils d\'avocats à Genève',
        'description': 'Conseils juridiques en vidéo par Maître Mansour Cheema, avocat au Barreau de Genève. Droit du travail, famille, pénal et immigration.',
        'thumbnailUrl': 'https://clegal-avocats.ch/logo.svg',
        'uploadDate': '2024-01-01',
        'contentUrl': 'https://www.tiktok.com/@clegal.avocats',
        'embedUrl': 'https://www.tiktok.com/@clegal.avocats',
        'publisher': {
          '@type': 'Organization',
          'name': 'Clegal Avocats',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://clegal-avocats.ch/logo.svg'
          }
        }
      })
    }
  ]
});
</script>
