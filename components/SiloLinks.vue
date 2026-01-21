<template>
  <div v-if="filteredLinks.length > 0" class="py-12 bg-slate-50 border-t border-slate-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <h3 class="text-xl font-bold text-slate-900">Voir aussi dans cette thématique</h3>
        <p class="text-slate-600 text-sm">D'autres services juridiques qui pourraient vous intéresser.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink 
          v-for="link in filteredLinks" 
          :key="link.path" 
          :to="link.path"
          class="group block p-6 bg-white rounded-xl border border-slate-200 hover:border-red-900/30 hover:shadow-md transition-all"
        >
          <div class="flex items-center gap-3 mb-2">
            <div class="p-2 bg-slate-50 rounded-lg text-red-900 group-hover:bg-red-900 group-hover:text-white transition-colors">
              <component :is="link.icon" class="w-5 h-5" />
            </div>
            <span class="font-bold text-slate-900 group-hover:text-red-900 transition-colors">{{ link.title }}</span>
          </div>
          <p class="text-sm text-slate-500 pl-[3.25rem]">{{ link.description }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  Scale, 
  Users, 
  Baby, 
  Coins, 
  Scroll, 
  Briefcase, 
  Home, 
  Globe 
} from 'lucide-vue-next';

const props = defineProps<{
  silo: 'famille' | 'travail' | 'immobilier' | 'etrangers';
  currentPath?: string;
}>();

const links = {
  famille: [
    { 
      title: 'Avocat Divorce', 
      path: '/droit-famille/avocat-divorce', 
      icon: Scale,
      description: 'Procédure amiable ou contentieuse.'
    },
    { 
      title: 'Séparation (MPUC)', 
      path: '/droit-famille/avocat-separation', 
      icon: Users,
      description: 'Mesures protectrices de l\'union conjugale.'
    },
    { 
      title: 'Garde d\'Enfants', 
      path: '/droit-famille/avocat-garde-enfant', 
      icon: Baby,
      description: 'Autorité parentale et droit de visite.'
    },
    { 
      title: 'Pension Alimentaire', 
      path: '/droit-famille/avocat-pension-alimentaire', 
      icon: Coins,
      description: 'Calcul et recouvrement des contributions.'
    },
    { 
      title: 'Succession', 
      path: '/droit-famille/avocat-succession', 
      icon: Scroll,
      description: 'Testaments et partage d\'héritage.'
    }
  ],
  travail: [
    {
      title: 'Licenciement',
      path: '/droit-travail/avocat-licenciement',
      icon: Briefcase,
      description: 'Contestation de licenciement abusif.'
    },
    {
      title: 'Droit du Travail (Hub)',
      path: '/droit-travail',
      icon: Scale,
      description: 'Retour à la page principale.'
    }
  ],
  immobilier: [
    {
      title: 'Droit du Bail',
      path: '/droit-immobilier/avocat-droit-bail',
      icon: Home,
      description: 'Litiges locataires et bailleurs.'
    },
    {
      title: 'Droit Immobilier (Hub)',
      path: '/droit-immobilier',
      icon: Scale,
      description: 'Retour à la page principale.'
    }
  ],
  etrangers: [
    {
      title: 'Permis de Séjour',
      path: '/droit-etrangers/avocat-permis-sejour',
      icon: Globe,
      description: 'Demande et renouvellement de permis.'
    },
    {
      title: 'Droit des Étrangers (Hub)',
      path: '/droit-etrangers',
      icon: Scale,
      description: 'Retour à la page principale.'
    }
  ]
};

const filteredLinks = computed(() => {
  const siloLinks = links[props.silo] || [];
  
  // If we are on a specific page, filter it out
  if (props.currentPath) {
    return siloLinks.filter(link => link.path !== props.currentPath);
  }
  
  return siloLinks;
});
</script>
