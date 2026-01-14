<template>
  <div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            
            <!-- H1 & Intro Section -->
            <div class="max-w-3xl mb-16">
                <Breadcrumb :links="[{ name: 'Blog', path: '/blog' }]" />
                <div class="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-red-50 border border-red-100 w-fit mb-4">
                    <i data-lucide="play-circle" class="w-3 h-3 text-red-900"></i>
                    <span class="text-[10px] font-bold text-red-900 uppercase tracking-wide">La Minute Juridique</span>
                </div>
                <h1 class="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                    Actualités Juridiques et Conseils en Vidéo – Pont-Rouge Avocats.
                </h1>
                <p class="text-lg text-slate-600 leading-relaxed font-light mb-8">
                    Maître Mansour CHEEMA décrypte pour vous l'actualité et les subtilités du <span class="text-slate-900 font-medium">Droit Suisse</span> sur TikTok. Retrouvez tous nos formats courts pour comprendre vos droits.
                </p>
                
                <div class="flex flex-col sm:flex-row gap-4">
                    <a href="https://www.tiktok.com/@clegal.avocats" target="_blank" class="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-black hover:bg-slate-900 rounded-lg shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-1">
                        <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/></svg>
                        Voir nos vidéos sur TikTok
                    </a>
                </div>
            </div>

            <!-- TikTok Embed / Placeholder or Direct Link visual -->
            <div class="mb-24">
                <a href="https://www.tiktok.com/@clegal.avocats" target="_blank" class="block group relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-black aspect-video md:aspect-[21/9]">
                     <NuxtImg format="webp" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" alt="TikTok Channel" class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                     <div class="absolute inset-0 flex items-center justify-center">
                         <div class="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                             <i data-lucide="external-link" class="w-8 h-8 text-white"></i>
                         </div>
                     </div>
                     <div class="absolute bottom-0 left-0 p-8">
                         <h3 class="text-white text-2xl font-bold mb-2">@clegal.avocats</h3>
                         <p class="text-slate-300">Suivez notre actualité juridique en direct.</p>
                     </div>
                </a>
            </div>

            <!-- Contact Form Section -->
            <div class="border-t border-slate-200 pt-16" id="formulaire">
                <div class="max-w-4xl mx-auto">
                    <div class="text-center mb-12">
                        <h2 class="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Besoin d'un conseil personnalisé ?</h2>
                        <p class="text-slate-600">Au-delà des vidéos, chaque situation est unique. Réservez votre consultation.</p>
                    </div>
                    <ContactForm />
                </div>
            </div>

        </div>
  </div>
</template>

<script setup lang="ts">
// Page specific logic
</script>