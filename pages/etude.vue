<template>
    <!-- Hero Section: Authority & Law -->
    <section class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-slate-200 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-4xl">
                <Breadcrumb :links="[{ name: 'L\'Étude', path: '/etude' }]" />
                <div
                    class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 w-fit mb-8">
                    <span class="w-1.5 h-1.5 rounded-full bg-red-900"></span>
                    <span class="text-xs font-medium text-slate-600 uppercase tracking-wide">Barreau de Genève</span>
                </div>

                <h1
                    class="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
                    Une pratique exigeante du <br class="hidden lg:block">
                    <span class="text-slate-400">Droit Suisse.</span>
                </h1>

                <p class="sm:text-xl leading-relaxed text-lg text-slate-600 max-w-2xl border-red-900 border-l-2 pl-6">
                    Pont-Rouge Avocats incarne une vision moderne de la profession d'avocat : une alliance entre la
                    maîtrise technique et une stratégie de défense offensive, au service exclusif de vos intérêts.</p>

                <!-- STRONG HERO CTA -->
                <div class="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <a href="#contact"
                        class="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-red-900 hover:bg-red-950 rounded-md transition-all shadow-sm ring-1 ring-red-900/5 group">
                        Consultation Juridique
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            data-lucide="arrow-right"
                            class="lucide lucide-arrow-right ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </a>
                    <a href="/honoraires"
                        class="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-all">
                        Voir nos honoraires
                    </a>
                </div>
                <div class="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        data-lucide="check-circle-2" class="lucide lucide-check-circle-2 w-3.5 h-3.5 text-emerald-600">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    <span class="">Premier rendez-vous forfaitaire (CHF 155.-)</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 1: The Firm & Legal Identity -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">

                <!-- Content -->
                <div class="prose prose-slate max-w-none">
                    <h2 class="text-2xl font-semibold text-slate-900 tracking-tight mb-6">De Clegal à Pont-Rouge :
                        L'Évolution d'une Expertise</h2>

                    <div class="space-y-6 text-slate-600">
                        <p class="">Fondée par Me Mansour Cheema, notre Étude s'est bâtie sur un principe fondamental :
                            la loi est un outil puissant qui nécessite une précision chirurgicale et qui ne devrait pas
                            être réservé seulement à ceux qui peuvent s'offrir un avocat. Initialement établie sous le
                            nom Clegal-Avocats, notre transformation en marque une nouvelle ère.</p>
                        <p class="">
                            Ce changement d'identité reflète notre ancrage au cœur du quartier d'affaires de
                            Lancy-Pont-Rouge. Ce positionnement géographique n'est pas anodin : il nous place au centre
                            des échanges économiques, tout en maintenant une proximité immédiate avec le Palais de
                            Justice.
                        </p>
                        <p class="">
                            Notre structure, composée de 5 Associés et 2 avocats-stagiaires, fonctionne comme un pôle de
                            compétences unifié. Nous ne pratiquons pas le droit de manière isolée ; nous confrontons nos
                            analyses juridiques pour offrir à chaque dossier la robustesse d'une réflexion collective.
                        </p>
                    </div>

                    <div class="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-8">
                        <div class="">
                            <div class="text-3xl font-semibold text-slate-900 tracking-tight">7</div>
                            <div class="text-sm text-slate-500 mt-1">Juristes dédiés</div>
                        </div>
                        <div class="">
                            <div class="text-3xl font-semibold text-slate-900 tracking-tight">100%</div>
                            <div class="text-sm text-slate-500 mt-1">de clients statisfaits</div>
                        </div>
                    </div>
                </div>

                <!-- Image: Legal Atmosphere -->
                <div class="relative h-full min-h-[400px]">
                    <div class="absolute inset-0 bg-slate-100 rounded-2xl transform rotate-3"></div>
                    <div
                        class="relative h-full w-full bg-slate-200 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5">
                        <NuxtImg format="webp" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                            alt="Recueils juridiques et environnement de travail"
                            class="absolute inset-0 w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent">
                        </div>
                        <div class="text-white absolute right-6 bottom-6 left-6">
                            <p class="text-sm font-medium opacity-90">Rigueur &amp; pragmatisme</p>
                            <p class="text-xs opacity-70 mt-1">Nos compétences et notre expériences sont le socle de nos
                                victoires</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 2: Core Legal Values -->
    <section class="border-y bg-slate-50 border-slate-200 pt-24 pb-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-sm font-bold text-red-900 uppercase tracking-widest mb-2">Notre Serment</h2>
                <p class="text-3xl font-semibold text-slate-900 tracking-tight">Les piliers de notre pratique</p>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Feature 1 -->
                <div
                    class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div
                        class="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-red-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            data-lucide="book-open" class="lucide lucide-book-open w-6 h-6">
                            <path d="M12 7v14"></path>
                            <path
                                d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-slate-900 mb-3">Maîtrise technique</h3>
                    <p class="leading-relaxed text-sm text-slate-600">
                        Le droit est une matière vivante et complexe. Nous garantissons une veille juridique permanente
                        pour appliquer les jurisprudences les plus récentes du Tribunal Fédéral.
                    </p>
                </div>

                <!-- Feature 2 -->
                <div
                    class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div
                        class="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-red-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            data-lucide="scale" class="lucide lucide-scale w-6 h-6">
                            <path d="M12 3v18"></path>
                            <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
                            <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
                            <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
                            <path d="M7 21h10"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-slate-900 mb-3">Indépendance &amp; Éthique</h3>
                    <p class="leading-relaxed text-sm text-slate-600">Notre loyauté envers le client est absolue et
                        notre tarification claire, sans surprise et juste.</p>
                </div>

                <!-- Feature 3 -->
                <div
                    class="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div
                        class="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-red-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            data-lucide="shield-check" class="lucide lucide-shield-check w-6 h-6">
                            <path
                                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                            </path>
                            <path d="m9 12 2 2 4-4"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-slate-900 mb-3">Combativité Procédurale</h3>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Nous ne subissons pas la procédure, nous la menons. Chaque acte judiciaire est rédigé pour
                        convaincre le magistrat et défendre vos droits avec vigueur.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Section 3: Professional Environment -->
    <section class="py-24 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:flex lg:items-center lg:gap-16">
                <div class="lg:w-1/2 relative order-last lg:order-first">
                    <!-- Image: Modern Architecture -->
                    <NuxtImg format="webp" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
                        alt="Bureaux Pont-Rouge Avocats"
                        class="rounded-lg shadow-xl ring-1 ring-slate-900/5 object-cover h-[400px] w-full grayscale hover:grayscale-0 transition-all duration-700" />
                    <div
                        class="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center border-4 border-white z-10">
                        <span class="text-xs font-bold text-slate-400 text-center leading-tight">GE1227</span>
                    </div>
                </div>

                <div class="lg:w-1/2 mt-12 lg:mt-0">
                    <h2 class="text-2xl font-semibold text-slate-900 tracking-tight mb-6">Au cœur de la Genève juridique
                        et économique</h2>
                    <p class="leading-relaxed text-slate-600 mb-6">L'exercice du droit moderne nécessite des
                        infrastructures adaptées. Nos bureaux au Centre du quartier des affaires de Genève sont conçus
                        pour être facilement accessibles et garantir la confidentialité de nos échanges.</p>
                    <ul class="space-y-4">
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" data-lucide="check"
                                class="lucide lucide-check w-5 h-5 text-red-900 mt-0.5 mr-3 flex-shrink-0">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span class="text-sm text-slate-700">Au cœur du quartier des affaires.</span>
                        </li>
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" data-lucide="check"
                                class="lucide lucide-check w-5 h-5 text-red-900 mt-0.5 mr-3 flex-shrink-0">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span class="text-slate-700 text-sm">Accès direct aux principales juridictions
                                genevoises.</span>
                        </li>
                        <li class="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" data-lucide="check"
                                class="lucide lucide-check w-5 h-5 text-red-900 mt-0.5 mr-3 flex-shrink-0">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span class="text-slate-700 text-sm">Technologie sécurisée pour la protection des données
                                clients.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Conversion Section (Formulaire) -->
    <section class="bg-slate-50 pt-20 pb-20 border-b border-slate-200" id="blog">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                    <div class="flex text-red-800 mb-3">
                        <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 fill-current">
                            <path
                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                            </path>
                        </svg>
                    </div>
                    <p class="text-sm text-slate-600 mb-4">"Me Mansour Cheema a fait preuve de professionnalisme,
                        d’écoute et de réactivité tout au long de mon dossier. Je recommande vivement ses services !"
                    </p>
                    <p class="text-xs font-semibold text-slate-900">SB - Droit du travail, Genève</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                    <div class="flex text-red-800 mb-3">
                        <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 fill-current">
                            <path
                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                            </path>
                        </svg>
                    </div>
                    <p class="text-sm text-slate-600 mb-4">"Professionnel, dynamique, réactif. Efficient (pas de
                        conversations interminables) "Droit" au but. Je recommande vivement même à nouveau si besoin.
                        Tarifs abordables ..."</p>
                    <p class="text-xs font-semibold text-slate-900">CR - Droit de la famille, Genève</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                    <div class="flex text-red-800 mb-3">
                        <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 fill-current">
                            <path
                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                            </path>
                        </svg>
                    </div>
                    <p class="text-sm text-slate-600 mb-4">"Maître Cheema était compétent, compatissant et sûr de lui.
                        Il m'a guidé à chaque étape du processus avec clarté et confiance, rendant cette période
                        difficile beaucoup plus facile à gérer. Je me suis senti très soutenu."</p>
                    <p class="text-xs font-semibold text-slate-900">AN- Droit pénal, Lausanne</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Conversion Section (Formulaire) -->

    <ContactForm />

    <!-- STRONG BOTTOM CTA Block -->
    <section class="bg-slate-900 py-24 relative overflow-hidden">
        <!-- decorative bg elements -->
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-red-900/10 blur-3xl"></div>
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-900/10 blur-3xl"></div>

        <div class="relative max-w-4xl mx-auto px-4 text-center">
            <h2 class="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">Ne laissez pas le doute
                s'installer.</h2>
            <p class="text-slate-300 mb-10 max-w-2xl mx-auto text-base leading-relaxed">
                Une situation juridique complexe demande une réaction immédiate. Nous proposons une première
                consultation d'orientation claire, sans jargon, pour définir votre stratégie.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4 items-center">
                <a href="#contact"
                    class="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Réserver ma consultation (CHF 155.-)
                </a>
                <a href="tel:0225121050"
                    class="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white border border-slate-700 hover:bg-slate-800 rounded-md transition-all w-full sm:w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        data-lucide="phone" class="lucide lucide-phone w-4 h-4 mr-2">
                        <path
                            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                        </path>
                    </svg>
                    022 512 10 50
                </a>
            </div>
            <p class="mt-6 text-xs text-slate-500 uppercase tracking-widest font-medium">Réponse sous 24h ouvrables</p>
        </div>
    </section>

</template>
<script lang="ts" setup>
import ContactForm from '@/components/ContactForm.vue';

useLocalSeo(
  'Notre Étude | Avocat Genève – Clegal Avocats Pont-Rouge',
  '7 avocats à Genève Pont-Rouge (Acacias). Rigueur juridique, combativité procédurale et 100% de satisfaction client. Clegal Avocats.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-'
  }
)
</script>