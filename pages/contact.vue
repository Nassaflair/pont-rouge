<template>
  <div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div class="grid lg:grid-cols-12 gap-12">
                
                <!-- Left Column: SEO Info, NAP & Map -->
                <div class="lg:col-span-5 flex flex-col gap-8">
                    
                    <!-- Header Text -->
                    <div>
                        <Breadcrumb :links="[{ name: 'Contact', path: '/contact' }]" />
                        <div class="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-red-50 border border-red-100 w-fit mb-4">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span class="text-[10px] font-bold text-red-900 uppercase tracking-wide">Réponse sous 24h</span>
                        </div>
                        <h1 class="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-4">
                            Contactez Clegal Avocats à Genève – Les Acacias.
                        </h1>
                        <p class="text-slate-600 text-lg leading-relaxed">
                            Nous sommes situés au cœur des Acacias (Genève). Prenez rendez-vous pour une consultation rapide.
                        </p>
                    </div>

                    <!-- NAP Card (Structured Data for Local SEO) -->
                    <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden" itemscope="" itemtype="https://schema.org/LegalService">
                        <div class="p-6 space-y-6">
                            
                            <!-- Name -->
                            <div class="flex items-start gap-4">
                                <div class="p-2 bg-slate-50 rounded-lg border border-slate-100 text-slate-700">
                                    <i data-lucide="briefcase" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <h2 class="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">Étude</h2>
                                    <p class="text-base font-semibold text-slate-900" itemprop="name">Clegal Avocats</p>
                                </div>
                            </div>

                            <!-- Address -->
                            <div class="flex items-start gap-4">
                                <div class="p-2 bg-slate-50 rounded-lg border border-slate-100 text-slate-700">
                                    <i data-lucide="map-pin" class="w-5 h-5"></i>
                                </div>
                                <div itemprop="address" itemscope="" itemtype="https://schema.org/PostalAddress">
                                    <h2 class="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">Adresse</h2>
                                    <p class="text-base font-medium text-slate-900">
                                        <span itemprop="streetAddress">Route des Jeunes 9</span><br>
                                        <span itemprop="postalCode">1227 Les Acacias</span> <span itemprop="addressLocality">Genève</span>
                                    </p>
                                    <p class="text-xs text-slate-500 mt-1">Au cœur des Acacias, Genève.</p>
                                </div>
                            </div>

                            <!-- Phone -->
                            <div class="flex items-start gap-4">
                                <div class="p-2 bg-slate-50 rounded-lg border border-slate-100 text-slate-700">
                                    <i data-lucide="phone" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <h2 class="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">Téléphone</h2>
                                    <a href="tel:0225121050" class="text-base font-semibold text-slate-900 hover:text-red-900 transition-colors" itemprop="telephone">022 512 10 50</a>
                                    <p class="text-xs text-slate-400 mt-1">Du Lundi au Vendredi, 08h30 - 18h00</p>
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="flex items-start gap-4">
                                <div class="p-2 bg-slate-50 rounded-lg border border-slate-100 text-slate-700">
                                    <i data-lucide="mail" class="w-5 h-5"></i>
                                </div>
                                <div>
                                    <h2 class="text-sm font-medium text-slate-500 uppercase tracking-wide mb-1">Email</h2>
                                    <a href="mailto:info@clegal-avocats.ch" class="text-base font-medium text-slate-900 hover:text-red-900 transition-colors" itemprop="email">info@clegal-avocats.ch</a>
                                </div>
                            </div>
                        </div>

                        <!-- Map Embed -->
                        <div class="h-64 w-full bg-slate-100 border-t border-slate-200 relative grayscale hover:grayscale-0 transition-all duration-500">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.8893456789!2d6.123456789!3d46.191234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c7b2e12345678%3A0x123456789abcdef!2sRoute%20des%20Jeunes%209%2C%201227%20Carouge!5e0!3m2!1sfr!2sch!4v1620000000000!5m2!1sfr!2sch" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        
                        <!-- Access Note -->
                        <div class="bg-slate-50 p-4 border-t border-slate-200">
                            <div class="flex gap-2 text-xs text-slate-600">
                                <i data-lucide="car" class="w-4 h-4"></i>
                                <span>Parking visiteurs disponible (Centre Commercial La Praille).</span>
                            </div>
                            <div class="flex gap-2 text-xs text-slate-600 mt-2">
                                <i data-lucide="train" class="w-4 h-4"></i>
                                <span>Accès direct via Gare Lancy-Pont-Rouge (Léman Express) et TPG (Tram 15, 17).</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column: Lead Qualification Form -->
                <div class="lg:col-span-7" id="formulaire">
                    <ContactForm />
                </div>
            </div>
        </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

useLocalSeo(
  'Contact | Avocat Genève – Clegal Avocats – 022 512 10 50',
  'Contactez Clegal Avocats à Genève. RDV d\'analyse à 155.-. Route des Jeunes 9, 1227 Les Acacias. Tél : 022 512 10 50.',
  {
    type: 'LegalService',
    priceRange: 'Dès CHF 155.-'
  }
)

const showDate = ref(false);
</script>