<script setup lang="ts">
import { locations, type LocationKey } from '~/data/locations'

const props = withDefaults(
  defineProps<{
    city?: LocationKey
    variant?: 'inline' | 'card'
  }>(),
  { city: 'geneve', variant: 'inline' },
)

const loc = locations[props.city]
</script>

<template>
  <address
    :class="[
      'not-italic',
      variant === 'card'
        ? 'bg-white border border-slate-200 rounded-xl p-6 space-y-3'
        : 'space-y-2 text-sm text-slate-600',
    ]"
    :itemscope="true"
    itemtype="https://schema.org/LegalService"
  >
    <meta itemprop="name" :content="loc.name" />

    <p v-if="variant === 'card'" class="text-xs uppercase tracking-widest font-bold text-red-900">
      {{ loc.name }}
    </p>

    <div :itemscope="true" itemprop="address" itemtype="https://schema.org/PostalAddress" class="space-y-1">
      <p v-if="loc.streetAddress !== 'À COMPLÉTER'" itemprop="streetAddress">{{ loc.streetAddress }}</p>
      <p>
        <span itemprop="postalCode">{{ loc.postalCode }}</span>
        <span itemprop="addressLocality"> {{ loc.addressLocality }}</span>
        <span class="text-slate-400">/</span>
        <span itemprop="addressRegion"> {{ loc.addressRegion }}</span>
        <meta itemprop="addressCountry" :content="loc.addressCountry" />
      </p>
    </div>

    <p v-if="loc.telephone !== '+41XXXXXXXXX'" class="pt-1">
      <span class="text-slate-400">Tél&nbsp;:</span>
      <a :href="`tel:${loc.telephone}`" class="hover:text-red-900 transition-colors underline" itemprop="telephone">
        {{ loc.telephone.replace('+41', '0').replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4') }}
      </a>
    </p>
    <p>
      <span class="text-slate-400">Email&nbsp;:</span>
      <a :href="`mailto:${loc.email}`" class="hover:text-red-900 transition-colors underline" itemprop="email">
        {{ loc.email }}
      </a>
    </p>

    <p class="text-xs font-medium text-emerald-700 pt-1">
      Permanence 24h/24 · 7j/7
    </p>
  </address>
</template>
