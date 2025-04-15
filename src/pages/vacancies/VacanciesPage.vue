<template>
  <PageTitle title="Вакансии" />

  <IconField class="mb-3">
    <InputIcon class="pi pi-search" />
    <InputText v-model="search" placeholder="Поиск" fluid />
  </IconField>

  <div class="flex justify-between items-center mb-5">
    <button class="filter-btn">
      <i class="pi pi-sort-alt"></i>
      По умолчанию
    </button>
    <button>
      <i class="pi pi-filter"></i>
      Фильтры
    </button>
  </div>

  <ul>
    <VacancyItem v-for="vacancy in selectedVacancies" :key="vacancy.id" :vacancy />
  </ul>
</template>

<script setup lang="ts">
import PageTitle from '@/components/page-title/PageTitle.vue'
import VacancyItem from '@/components/vacancy-item/VacancyItem.vue'
import type { Vacancy } from '@/types/vacancy/vacancy.types'
import { computed, shallowRef } from 'vue'

const vacancies: Vacancy[] = [
  {
    id: 1,
    title: 'Подсобный рабочий',
    location: 'Москва',
    salary: 11_000,
    people: 3,
    date: '05.06.2025',
    urgent: true,
  },
  {
    id: 2,
    title: 'Любая специальность',
    location: 'Санкт-Петербург',
    salary: 26_000,
    people: 1,
    date: '05.06.2025',
    urgent: false,
  },
  {
    id: 3,
    title: 'Монтажник',
    location: 'Казань',
    salary: 15_000,
    people: 2,
    date: '05.06.2025',
    urgent: true,
  },
  {
    id: 4,
    title: 'Слесарь',
    location: 'Краснодар',
    salary: 8_000,
    people: 5,
    date: '05.06.2025',
    urgent: false,
  },
]

const search = shallowRef('')
const selectedVacancies = computed(() =>
  vacancies.filter((vacancy) => vacancy.title.toLowerCase().includes(search.value.toLowerCase())),
)
</script>

<style scoped>
@reference 'tailwindcss';

.filter-btn {
  @apply flex items-center gap-2;
}
</style>
