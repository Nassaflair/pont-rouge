<template>
    <section id="contact" class="py-24 bg-white relative overflow-hidden">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 pointer-events-none overflow-hidden">
             <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-50/50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
        </div>

        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-slate-300/50">
                <div class="bg-slate-900 p-10 text-center relative overflow-hidden">
                    <!-- Subtle pattern overlay -->
                    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    
                    <h2 class="relative z-10 text-3xl font-bold text-white tracking-tight font-heading">
                        Prenez le contrôle de votre situation
                    </h2>
                    <p class="relative z-10 text-slate-300 mt-3 text-lg font-light">
                        Réservez votre premier rendez-vous d'analyse et de conseil.
                    </p>
                    <div class="relative z-10 mt-6 inline-flex items-center gap-2 bg-red-900/40 border border-red-500/30 backdrop-blur-sm rounded-full px-5 py-1.5 shadow-lg">
                        <span class="flex h-2 w-2 relative">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span class="font-medium text-red-100 tracking-wide text-sm">Tarif avantageux : CHF 155.-</span>
                    </div>
                </div>

                <div class="p-8 lg:p-12">
                    <TransitionGroup 
                        enter-active-class="transition duration-300 ease-out"
                        enter-from-class="transform -translate-y-2 opacity-0"
                        enter-to-class="transform translate-y-0 opacity-100"
                        leave-active-class="transition duration-200 ease-in"
                        leave-from-class="transform translate-y-0 opacity-100"
                        leave-to-class="transform -translate-y-2 opacity-0"
                    >
                        <!-- Success Message -->
                        <div v-if="success" key="success" class="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-start shadow-sm">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-base font-semibold text-green-800">Demande envoyée avec succès</h3>
                                <p class="text-sm text-green-700 mt-1">Nous avons bien reçu votre demande. Un email de confirmation vous a été envoyé.</p>
                                <button @click="success = false" class="mt-3 text-sm font-medium text-green-800 hover:text-green-900 underline underline-offset-2">Envoyer une autre demande</button>
                            </div>
                        </div>

                        <!-- Global Error Message -->
                        <div v-if="error" key="error" class="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl flex items-start shadow-sm">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-base font-semibold text-red-800">Une erreur est survenue</h3>
                                <p class="text-sm text-red-700 mt-1">{{ error }}</p>
                            </div>
                        </div>
                        <!-- <div v-if="error" key="success" class="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl flex items-start shadow-sm">
                            <div class="flex-shrink-0">
                                <svg class="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            <div class="ml-4">
                                <h3 class="text-base font-semibold text-green-800">Demande envoyée avec succès</h3>
                                <p class="text-sm text-green-700 mt-1">Nous avons bien reçu votre demande. Un email de confirmation vous a été envoyé.</p>
                                <button @click="success = false" class="mt-3 text-sm font-medium text-green-800 hover:text-green-900 underline underline-offset-2">Envoyer une autre demande</button>
                            </div>
                        </div> -->
                    </TransitionGroup>

                    <form v-if="!success" class="space-y-8" @submit.prevent="submitForm" novalidate>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="group">
                                <label for="firstname" class="block text-sm font-medium text-slate-700 mb-1.5 ml-1">Prénom <span class="text-red-500">*</span></label>
                                <div class="relative">
                                    <input 
                                        type="text" 
                                        id="firstname" 
                                        v-model="form.firstname" 
                                        :class="{'!border-red-300 focus:!ring-red-200': fieldErrors.firstname}"
                                        class="w-full rounded-lg border-slate-200 bg-slate-50/50 shadow-sm focus:bg-white focus:border-red-900 focus:ring-4 focus:ring-red-900/10 transition-all duration-200 sm:text-sm py-3 px-4 border placeholder:text-slate-400" 
                                        placeholder="Votre prénom"
                                        @input="clearError('firstname')"
                                    >
                                </div>
                                <p v-if="fieldErrors.firstname" class="mt-1 text-sm text-red-600 ml-1">{{ fieldErrors.firstname }}</p>
                            </div>

                            <div class="group">
                                <label for="lastname" class="block text-sm font-medium text-slate-700 mb-1.5 ml-1">Nom <span class="text-red-500">*</span></label>
                                <div class="relative">
                                    <input 
                                        type="text" 
                                        id="lastname" 
                                        v-model="form.lastname" 
                                        :class="{'!border-red-300 focus:!ring-red-200': fieldErrors.lastname}"
                                        class="w-full rounded-lg border-slate-200 bg-slate-50/50 shadow-sm focus:bg-white focus:border-red-900 focus:ring-4 focus:ring-red-900/10 transition-all duration-200 sm:text-sm py-3 px-4 border placeholder:text-slate-400" 
                                        placeholder="Votre nom"
                                        @input="clearError('lastname')"
                                    >
                                </div>
                                <p v-if="fieldErrors.lastname" class="mt-1 text-sm text-red-600 ml-1">{{ fieldErrors.lastname }}</p>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="group">
                                <label for="email" class="block text-sm font-medium text-slate-700 mb-1.5 ml-1">Email <span class="text-red-500">*</span></label>
                                <div class="relative">
                                    <input 
                                        type="email" 
                                        id="email" 
                                        v-model="form.email" 
                                        :class="{'!border-red-300 focus:!ring-red-200': fieldErrors.email}"
                                        class="w-full rounded-lg border-slate-200 bg-slate-50/50 shadow-sm focus:bg-white focus:border-red-900 focus:ring-4 focus:ring-red-900/10 transition-all duration-200 sm:text-sm py-3 px-4 border placeholder:text-slate-400" 
                                        placeholder="exemple@email.com"
                                        @input="clearError('email')"
                                    >
                                </div>
                                <p v-if="fieldErrors.email" class="mt-1 text-sm text-red-600 ml-1">{{ fieldErrors.email }}</p>
                            </div>

                            <div class="group">
                                <label for="phone" class="block text-sm font-medium text-slate-700 mb-1.5 ml-1">Téléphone <span class="text-red-500">*</span></label>
                                <div class="relative">
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        v-model="form.phone" 
                                        :class="{'!border-red-300 focus:!ring-red-200': fieldErrors.phone}"
                                        class="w-full rounded-lg border-slate-200 bg-slate-50/50 shadow-sm focus:bg-white focus:border-red-900 focus:ring-4 focus:ring-red-900/10 transition-all duration-200 sm:text-sm py-3 px-4 border placeholder:text-slate-400" 
                                        placeholder="+41 79 000 00 00"
                                        @input="clearError('phone')"
                                    >
                                </div>
                                <p v-if="fieldErrors.phone" class="mt-1 text-sm text-red-600 ml-1">{{ fieldErrors.phone }}</p>
                            </div>
                        </div>

                        <div class="space-y-2">
                            <label for="message" class="block text-sm font-medium text-slate-700">Votre affaire en quelques mots <span class="text-red-500">*</span></label>
                            <textarea 
                                id="message" 
                                v-model="form.message" 
                                rows="4" 
                                :class="{'!border-red-300 focus:!ring-red-200': fieldErrors.message}"
                                placeholder="Ex: Je souhaite divorcer, j'ai reçu un commandement de payer..." 
                                class="block w-full rounded-md border-slate-200 shadow-sm focus:border-red-900 focus:ring-red-900 sm:text-sm py-3 px-3 bg-slate-50 hover:bg-white transition-colors resize-none border"
                                @input="clearError('message')"
                            ></textarea>
                            <p v-if="fieldErrors.message" class="mt-1 text-sm text-red-600 ml-1">{{ fieldErrors.message }}</p>
                        </div>

                        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200">
                            <label class="block text-sm font-medium text-slate-900 mb-3">Etes vous soumis à un délai ? *</label>
                            <div class="flex items-center gap-6">
                                <div class="flex items-center">
                                    <input 
                                        id="delai-non" 
                                        name="delai" 
                                        type="radio" 
                                        value="non" 
                                        v-model="form.hasDeadline" 
                                        class="h-4 w-4 border-slate-300 text-red-900 focus:ring-red-900"
                                    >
                                    <label for="delai-non" class="ml-2 block text-sm text-slate-700">Non</label>
                                </div>
                                <div class="flex items-center">
                                    <input 
                                        id="delai-oui" 
                                        name="delai" 
                                        type="radio" 
                                        value="oui" 
                                        v-model="form.hasDeadline" 
                                        class="h-4 w-4 border-slate-300 text-red-900 focus:ring-red-900"
                                    >
                                    <label for="delai-oui" class="ml-2 block text-sm text-slate-700">Oui</label>
                                </div>
                            </div>

                            <!-- Conditional Field -->
                            <div v-if="form.hasDeadline === 'oui'" class="mt-4 transition-all duration-300 ease-in-out">
                                <label for="date-delai" class="block text-xs font-semibold uppercase tracking-wide text-red-800 mb-1">Date du délai (Urgent)</label>
                                <input 
                                    type="date" 
                                    id="date-delai" 
                                    v-model="form.deadlineDate"
                                    class="block w-full md:w-1/2 rounded-md border-red-200 shadow-sm focus:border-red-900 focus:ring-red-900 sm:text-sm py-2 px-3 text-red-900 bg-white"
                                    @input="clearError('deadlineDate')"
                                >
                                <p v-if="fieldErrors.deadlineDate" class="mt-1 text-sm text-red-600 ml-1">{{ fieldErrors.deadlineDate }}</p>
                            </div>
                        </div>

                        <div class="pt-2">
                            <div class="flex items-start group cursor-pointer" @click="form.privacy = !form.privacy">
                                <div class="flex h-6 items-center">
                                    <input 
                                        id="privacy" 
                                        name="privacy" 
                                        type="checkbox" 
                                        v-model="form.privacy" 
                                        :class="{'!border-red-300': fieldErrors.privacy}"
                                        class="h-5 w-5 rounded border-slate-300 text-red-900 focus:ring-red-900 transition duration-150 ease-in-out cursor-pointer" 
                                    >
                                </div>
                                <div class="ml-3 text-sm select-none">
                                    <label for="privacy" class="font-medium text-slate-900 cursor-pointer">J'accepte la politique de confidentialité</label>
                                    <p class="text-slate-500 text-xs mt-1">Vos données sont traitées avec la plus stricte confidentialité (secret professionnel).</p>
                                    <p v-if="fieldErrors.privacy" class="mt-1 text-sm text-red-600">{{ fieldErrors.privacy }}</p>
                                </div>
                            </div>
                            </div>


                        <div class="py-0">
                             <ClientOnly>
                                <VueRecaptcha 
                                    :sitekey="siteKey"
                                    @verify="onVerify" 
                                    @expired="onExpired"
                                />
                            </ClientOnly>
                            <p v-if="fieldErrors.recaptcha" class="mt-1 text-sm text-red-600">{{ fieldErrors.recaptcha }}</p>
                        </div>

                        <button 
                            type="submit" 
                            :disabled="loading" 
                            class="w-full relative flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg shadow-red-900/20 text-base font-bold text-white bg-gradient-to-r from-red-900 to-red-800 hover:to-red-700 focus:outline-none focus:ring-4 focus:ring-red-900/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <span v-if="loading" class="absolute left-6 flex items-center">
                                <svg class="animate-spin h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </span>
                            <span>{{ loading ? 'Traitement en cours...' : 'Confirmer ma Réservation de 155.- CHF' }}</span>
                        </button>
                        
                        <div class="flex items-center justify-center gap-2 mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-slate-400/80"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            <span class="text-xs font-medium text-slate-400 uppercase tracking-widest">Paiement sécurisé sur place ou par facture</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { useFetch, useRuntimeConfig } from 'nuxt/app';
import { ref, reactive, onMounted } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha';

const config = useRuntimeConfig();
const siteKey = config.public.recaptchaSiteKey;

const loading = ref(false);
const success = ref(false);
const error = ref('');
const fieldErrors = reactive<Record<string, string>>({});

const form = reactive({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
    hasDeadline: 'non',
    deadlineDate: '',
    subject: 'Demande de rendez-vous',
    privacy: false
});

const clearError = (field: string) => {
    if (fieldErrors[field]) {
        delete fieldErrors[field];
    }
    error.value = '';
};

const recaptchaToken = ref('');
const onVerify = (token: string) => {
    recaptchaToken.value = token;
    if (fieldErrors.recaptcha) {
        delete fieldErrors.recaptcha;
    }
};

const onExpired = () => {
    recaptchaToken.value = '';
};


const validateForm = () => {
    let isValid = true;
    Object.keys(fieldErrors).forEach(key => delete fieldErrors[key]);

    if (!form.firstname.trim() || form.firstname.length < 2) {
        fieldErrors.firstname = "Le prénom est requis (min 2 caractères)";
        isValid = false;
    }

    if (!form.lastname.trim() || form.lastname.length < 2) {
        fieldErrors.lastname = "Le nom est requis (min 2 caractères)";
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email)) {
        fieldErrors.email = "Une adresse email valide est requise";
        isValid = false;
    }

    if (!form.phone || form.phone.length < 10) {
        fieldErrors.phone = "Un numéro de téléphone valide est requis";
        isValid = false;
    }

    if (!form.message.trim() || form.message.length < 10) {
        fieldErrors.message = "Veuillez décrire brièvement votre situation (min 10 caractères)";
        isValid = false;
    }

    if (form.hasDeadline === 'oui' && !form.deadlineDate) {
        fieldErrors.deadlineDate = "La date du délai est requise";
        isValid = false;
    }

    if (!form.privacy) {
        fieldErrors.privacy = "Vous devez accepter la politique de confidentialité";
        isValid = false;
    }

    if (!recaptchaToken.value) {
        fieldErrors.recaptcha = "Veuillez valider le filtre anti-robot";
        isValid = false;
    }

    return isValid;
};

const submitForm = async () => {
    if (!validateForm()) {
        error.value = "Veuillez corriger les erreurs dans le formulaire.";
        return;
    }

    loading.value = true;
    success.value = false;
    error.value = '';

    try {
        const { data, error: fetchError } = await useFetch('/api/contact', {
            method: 'POST',
            body: { 
                ...form, 
                recaptchaToken: recaptchaToken.value 
            }
        });

        if (fetchError.value) {
            // Handle specific validation errors from backend if available
            if (fetchError.value.data?.data) {
                 // Map backend Zod errors to frontend fields if structure matches
                 const backendErrors = fetchError.value.data.data;
                 if (typeof backendErrors === 'object') {
                     Object.keys(backendErrors).forEach(key => {
                         fieldErrors[key] = backendErrors[key][0];
                     });
                 }
                 throw new Error("Veuillez vérifier les champs indiqués.");
            }
            throw new Error(fetchError.value.statusMessage || fetchError.value.message);
        }

        success.value = true;
        
        // Reset form safely
        form.firstname = '';
        form.lastname = '';
        form.email = '';
        form.phone = '';
        form.message = '';
        form.hasDeadline = 'non';
        form.deadlineDate = '';
        form.privacy = false;
        
        // Scroll to success message
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }

    } catch (e: any) {
        console.error(e);
        error.value = e.message || "Une erreur est survenue lors de l'envoi. Veuillez réessayer.";
    } finally {
        loading.value = false;
    }
};
</script>
