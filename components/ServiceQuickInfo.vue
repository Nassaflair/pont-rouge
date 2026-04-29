<script setup lang="ts">
defineProps<{
  quickAnswerHtml: string
  table: {
    title: string
    columns: string[]
    rows: (string | number)[][]
    note?: string
  }
  relatedLinks?: { label: string; url: string }[]
}>()
</script>

<template>
  <section class="py-12 bg-white border-b border-slate-100">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <QuickAnswer>
        <p v-html="quickAnswerHtml" />
      </QuickAnswer>

      <h2 class="text-xl font-semibold text-slate-900 mt-12 mb-4">{{ table.title }}</h2>
      <div class="overflow-x-auto">
        <table class="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
          <thead class="bg-slate-100">
            <tr>
              <th
                v-for="(c, i) in table.columns"
                :key="c"
                :class="['px-4 py-3 font-semibold text-slate-900', i === 0 ? 'text-left' : 'text-right']"
              >
                {{ c }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            <tr v-for="(row, i) in table.rows" :key="i">
              <td
                v-for="(cell, j) in row"
                :key="j"
                :class="['px-4 py-3', j === 0 ? 'text-left text-slate-700' : 'text-right text-slate-700']"
              >
                {{ cell }}
              </td>
            </tr>
          </tbody>
        </table>
        <p v-if="table.note" class="text-xs text-slate-500 mt-2">{{ table.note }}</p>
      </div>

      <div v-if="relatedLinks && relatedLinks.length" class="mt-8 pt-6 border-t border-slate-100">
        <p class="text-xs uppercase tracking-widest font-bold text-slate-500 mb-3">Pour aller plus loin</p>
        <ul class="flex flex-col gap-2">
          <li v-for="link in relatedLinks" :key="link.url">
            <NuxtLink :to="link.url" class="text-sm text-red-900 hover:underline">→ {{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
