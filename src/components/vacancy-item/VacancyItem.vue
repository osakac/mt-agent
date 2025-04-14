<template>
  <li class="vacancy">
    <router-link :to="RouteNames.Vacancies">
      <Card class="hover:bg-sky-100! transition-all duration-100 ease-in">
        <template #content>
          <div class="flex flex-col">
            <div class="flex justify-between items-center text-sm mb-2">
              <span>{{ vacancy.location }}</span>
              <span>до {{ vacancy.date }}</span>
            </div>

            <h3 class="font-semibold">{{ vacancy.title }}</h3>
            <span class="text-sm">{{ pluralizePeople(vacancy.people) }}</span>
            <Divider class="my-2!" />

            <div class="flex justify-between items-center">
              <span class="text-sm flex items-center gap-2">
                <span class="font-bold text-sky-500 text-lg">
                  {{ formatNumber(vacancy.salary) }} ₽
                </span>
                / за человека
              </span>
              <Badge v-if="vacancy.hot">
                <i class="pi pi-thumbs-up"></i>
              </Badge>
            </div>
          </div>
        </template>
      </Card>
    </router-link>
  </li>
</template>

<script setup lang="ts">
import { RouteNames } from '@/router'
import type { Vacancy } from '@/types/vacancy/vacancy.types'
import { formatNumber } from '@/utils/format-number'
import { pluralizePeople } from '@/utils/pluralize'

defineProps<{ vacancy: Vacancy }>()
</script>

<style scoped>
@reference 'tailwindcss';

.vacancy {
  @apply not-last:mb-3;
}
</style>
