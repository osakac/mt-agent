<template>
  <PageTitle title="Вакансии" />

  <IconField class="mb-3">
    <InputIcon class="pi pi-search" />
    <InputText v-model="search" placeholder="Поиск" fluid />
  </IconField>

  <div class="flex max-[500px]:flex-col max-[500px]:gap-3 justify-between items-center mb-5">
    <button @click="isSortingVisible = true" class="filter-btn">
      <i class="pi pi-sort-alt"></i>
      {{ selectedSort.name }}
    </button>
    <button @click="isVacancyFilterVisible = true" class="filter-btn">
      <i class="pi pi-filter"></i>
      Фильтры
    </button>
  </div>

  <ul>
    <VacancyItem v-for="vacancy in selectedVacancies" :key="vacancy.id" :vacancy />
  </ul>

  <Drawer
    v-model:visible="isSortingVisible"
    position="bottom"
    :show-close-icon="false"
    @click="isSortingVisible = false"
    class="max-w-5xl h-fit! rounded-t-lg"
  >
    <FilterSort :sort-types="sortTypes" v-model="selectedSort" />
  </Drawer>

  <Drawer
    v-model:visible="isVacancyFilterVisible"
    position="bottom"
    :show-close-icon="false"
    @click.stop
    class="max-w-5xl h-fit! rounded-t-lg"
  >
    <FilterVacancy @apply-filter="applyFilter" />
  </Drawer>
</template>

<script setup lang="ts">
import PageTitle from '@/components/page-title/PageTitle.vue'
import VacancyItem from '@/components/vacancy-item/VacancyItem.vue'
import type { Vacancy } from '@/types/vacancy/vacancy.types'
import { computed, ref } from 'vue'
import FilterSort from './ui/filter-sort/FilterSort.vue'
import FilterVacancy from './ui/filter-vacancy/FilterVacancy.vue'

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

const search = ref('')
const selectedVacancies = computed(() =>
  vacancies
    .filter((vacancy) => vacancy.title.toLowerCase().includes(search.value.toLowerCase()))
    .sort(sortByTypeFn),
)

const isSortingVisible = ref(false)
const sortTypes = [
  {
    name: 'По умолчанию',
    value: 'default',
  },
  {
    name: 'Наибольшее количество мест',
    value: 'peopleDesc',
  },
  {
    name: 'Наименьшее количество мест',
    value: 'peopleAsc',
  },
  {
    name: 'Срочные',
    value: 'urgent',
  },
  {
    name: 'Наибольшую выплату за человека',
    value: 'salaryDesc',
  },
  {
    name: 'Наименьшую выплату за человека',
    value: 'salaryAsc',
  },
]
const selectedSort = ref(sortTypes[0])
const sortByTypeFn = (a: Vacancy, b: Vacancy) => {
  switch (selectedSort.value.value) {
    case 'default':
      return 0
    case 'peopleDesc':
      return b.people - a.people
    case 'peopleAsc':
      return a.people - b.people
    case 'urgent': {
      if (a.urgent && !b.urgent) return -1
      if (!a.urgent && b.urgent) return 1
      return 0
    }
    case 'salaryDesc':
      return b.salary - a.salary
    case 'salaryAsc':
      return a.salary - b.salary
    default:
      return 0
  }
}

const isVacancyFilterVisible = ref(false)

const applyFilter = () => {
  isVacancyFilterVisible.value = false
}
</script>

<style scoped>
@reference 'tailwindcss';

.filter-btn {
  @apply flex items-center gap-2;
}
</style>
