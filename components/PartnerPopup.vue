<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-slate-900/75 backdrop-blur-sm transition-opacity" @click="close"></div>

    <div class="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
      <!-- Modal panel -->
      <div class="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-4xl border border-slate-100">
        
        <!-- Close button -->
        <button @click="close" class="absolute top-6 right-6 z-20 p-2 text-slate-400 hover:text-slate-600 bg-white/80 backdrop-blur rounded-full hover:bg-white border border-slate-200 transition-all shadow-sm">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="px-4 sm:px-6 lg:px-8 py-10 sm:py-10">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                      
            <!-- Image Column (Portrait) -->
            <div class="lg:col-span-5 relative mb-12 lg:mb-0 order-1">
              <div class="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] group border border-slate-100">
                <img :src="partner?.image" :alt="partner?.name" class="object-cover w-full h-full">
                              
                <!-- Overlay Gradient -->
                <div class="bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
                              
                <div class="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div class="w-12 h-1 bg-red-600 mb-4"></div>
                  <p class="text-2xl font-semibold tracking-tight mb-1">{{ partner?.name }}</p>
                  <p class="text-sm font-medium text-slate-300 uppercase tracking-wider">{{ partner?.role || 'Avocat Associé' }}</p>
                </div>
              </div>
                          
              <!-- Decorative background elements -->
              <div class="absolute -top-12 -left-12 w-64 h-64 bg-slate-100 rounded-full blur-3xl -z-10 opacity-60"></div>
              <div class="absolute -bottom-8 -right-8 w-48 h-48 bg-red-50 rounded-full blur-3xl -z-10 opacity-60"></div>
            </div>
          
            <!-- Content Column -->
            <div class="lg:col-span-7 order-2">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 w-fit mb-6">
                <span class="text-xs font-medium text-slate-600 uppercase tracking-wide">Votre Partenaire de Confiance</span>
              </div>
                          
              <div class="space-y-4 mb-8">
                <!-- Email -->
                <div v-if="partner?.email" class="flex items-center gap-3 text-slate-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a :href="'mailto:' + partner.email" class="hover:text-red-800 transition-colors font-medium">{{ partner.email }}</a>
                </div>

                <!-- Languages -->
                <div v-if="partner?.languages" class="flex items-start gap-3 text-slate-700">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-800 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.204-2.5a4.5 4.5 0 011.756 1.25m3.75 3.75l1.625 2.5m-3.75-3.75L12 12m-2.25 2.25L13.5 18M12 12l2.25 2.25M12 12l-2.25-2.25" />
                  </svg>
                  <span>{{ partner.languages }}</span>
                </div>
              </div>
                          
              <div v-if="partner?.bio" class="text-base text-slate-600 mb-8 space-y-4 leading-relaxed">
                <p v-for="(paragraph, index) in partner.bio.split('\n\n')" :key="index">
                    {{ paragraph }}
                </p>
              </div>
          
              <a href="#contact" @click="close" class="inline-flex items-center justify-center hover:bg-slate-800 transition-all group text-sm font-medium text-white bg-slate-900 rounded-md pt-3 pr-6 pb-3 pl-6 shadow-sm">1er rendez-vous à CHF 155.-</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  partner: Object
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}
</script>
