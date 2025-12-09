<template>
  <div class="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8 md:p-10 relative overflow-hidden" id="formulaire-contact">
    <!-- Decorative top gradient -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 via-slate-800 to-slate-900"></div>

    <div class="mb-8">
        <h2 class="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Décrivez votre situation et réservez votre consultation.</h2>
        <p class="text-slate-500 text-sm">Les champs marqués d'un astérisque (*) sont obligatoires pour le traitement de votre dossier.</p>
    </div>

    <!-- Feedback Messages -->
    <div v-if="success" class="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start">
        <i data-lucide="check-circle" class="w-5 h-5 text-green-600 mr-2 mt-0.5"></i>
        <div>
            <h3 class="text-sm font-medium text-green-800">Demande envoyée avec succès</h3>
            <p class="text-sm text-green-700 mt-1">Nous avons bien reçu votre demande. Un email de confirmation vous a été envoyé.</p>
        </div>
    </div>

    <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
        <i data-lucide="alert-circle" class="w-5 h-5 text-red-600 mr-2 mt-0.5"></i>
        <div>
            <h3 class="text-sm font-medium text-red-800">Une erreur est survenue</h3>
            <p class="text-sm text-red-700 mt-1">{{ error }}</p>
        </div>
    </div>

    <form class="space-y-6" @submit.prevent="submitForm">
        
        <!-- Name Fields -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
                <label for="nom" class="block text-sm font-medium text-slate-700">Nom *</label>
                <input type="text" id="nom" v-model="form.nom" required class="block w-full rounded-md border-slate-200 shadow-sm focus:border-red-900 focus:ring-red-900 sm:text-sm py-2.5 px-3 bg-slate-50 hover:bg-white transition-colors">
            </div>
            <div class="space-y-2">
                <label for="prenom" class="block text-sm font-medium text-slate-700">Prénom *</label>
                <input type="text" id="prenom" v-model="form.prenom" required class="block w-full rounded-md border-slate-200 shadow-sm focus:border-red-900 focus:ring-red-900 sm:text-sm py-2.5 px-3 bg-slate-50 hover:bg-white transition-colors">
            </div>
        </div>

        <!-- Contact Fields -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-slate-700">Email *</label>
                <input type="email" id="email" v-model="form.email" required class="block w-full rounded-md border-slate-200 shadow-sm focus:border-red-900 focus:ring-red-900 sm:text-sm py-2.5 px-3 bg-slate-50 hover:bg-white transition-colors">
            </div>
            <div class="space-y-2">
                <label for="phone" class="block text-sm font-medium text-slate-700">Numéro de téléphone *</label>
                <input type="tel" id="phone" v-model="form.phone" required class="block w-full rounded-md border-slate-200 shadow-sm focus:border-red-900 focus:ring-red-900 sm:text-sm py-2.5 px-3 bg-slate-50 hover:bg-white transition-colors">
            </div>
        </div>

        <!-- Case Summary -->
        <div class="space-y-2">
            <label for="message" class="block text-sm font-medium text-slate-700">Votre affaire en quelques mots *</label>
            <textarea id="message" v-model="form.message" rows="4" required placeholder="Ex: Je souhaite divorcer, j'ai reçu un commandement de payer..." class="block w-full rounded-md border-slate-200 shadow-sm focus:border-red-900 focus:ring-red-900 sm:text-sm py-3 px-3 bg-slate-50 hover:bg-white transition-colors resize-none"></textarea>
        </div>

        <!-- Qualification Question: Deadline -->
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <label class="block text-sm font-medium text-slate-900 mb-3">L'autorité vous a t-elle imparti un délai de réponse ? *</label>
            <div class="flex items-center gap-6">
                <div class="flex items-center">
                    <input id="delai-non" name="delai" type="radio" value="non" v-model="form.hasDeadline" @change="form.deadlineDate = ''" class="h-4 w-4 border-slate-300 text-red-900 focus:ring-red-900">
                    <label for="delai-non" class="ml-2 block text-sm text-slate-700">Non</label>
                </div>
                <div class="flex items-center">
                    <input id="delai-oui" name="delai" type="radio" value="oui" v-model="form.hasDeadline" class="h-4 w-4 border-slate-300 text-red-900 focus:ring-red-900">
                    <label for="delai-oui" class="ml-2 block text-sm text-slate-700">Oui</label>
                </div>
            </div>

            <!-- Conditional Field -->
            <div v-if="form.hasDeadline === 'oui'" class="mt-4 transition-all duration-300 ease-in-out">
                <label for="date-delai" class="block text-xs font-semibold uppercase tracking-wide text-red-800 mb-1">Date du délai (Urgent)</label>
                <input type="date" id="date-delai" v-model="form.deadlineDate" required class="block w-full md:w-1/2 rounded-md border-red-200 shadow-sm focus:border-red-900 focus:ring-red-900 sm:text-sm py-2 px-3 text-red-900 bg-white">
            </div>
        </div>

        <!-- Submit Button -->
        <button type="submit" :disabled="loading" class="w-full flex items-center justify-center py-4 px-4 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all mt-2 group disabled:opacity-70 disabled:cursor-not-allowed">
            <span v-if="loading">Envoi en cours...</span>
            <span v-else class="flex items-center">
                Envoyer ma demande &amp; Réserver mon créneau à CHF 155.-
                <i data-lucide="chevron-right" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"></i>
            </span>
        </button>

        <!-- Confidentiality Reassurance -->
        <div class="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4 bg-slate-50 py-2 rounded">
            <i data-lucide="lock" class="w-3 h-3"></i>
            <span>Vos données sont soumises au secret professionnel de l'avocat.</span>
        </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';

const loading = ref(false);
const success = ref(false);
const error = ref('');

const form = reactive({
  nom: '',
  prenom: '',
  email: '',
  phone: '',
  message: '',
  hasDeadline: 'non',
  deadlineDate: ''
});

onMounted(() => {
    // Re-initialize icons if loaded dynamically
    if (window.lucide) {
        window.lucide.createIcons();
    }
});

const submitForm = async () => {
  loading.value = true;
  success.value = false;
  error.value = '';

  try {
    const { data, error: fetchError } = await useFetch('/api/contact', {
      method: 'POST',
      body: form
    });

    if (fetchError.value) throw fetchError.value;
    
    success.value = true;
    // Reset form
    Object.assign(form, {
        nom: '',
        prenom: '',
        email: '',
        phone: '',
        message: '',
        hasDeadline: 'non',
        deadlineDate: ''
    });
    
  } catch (e: any) {
    console.error(e);
    error.value = "Une erreur est survenue lors de l'envoi. Veuillez nous contacter par téléphone.";
  } finally {
    loading.value = false;
  }
};
</script>
