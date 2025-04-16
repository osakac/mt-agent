<template>
  <h4 class="font-semibold text-lg mb-2">Сначала показывать</h4>

  <ul>
    <li v-for="sortType in sortTypes" :key="sortType.value">
      <button
        @click="selectedSort = sortType"
        class="sort-item"
        :class="{ 'sort-item--active': selectedSort?.value === sortType.value }"
      >
        {{ sortType.name }}
        <i v-if="selectedSort?.value === sortType.value" class="pi pi-check"></i>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Props {
  sortTypes: { name: string; value: string }[]
}

defineProps<Props>()

const selectedSort = defineModel<{ name: string; value: string }>()
</script>

<style scoped>
@reference 'tailwindcss';

.sort-item {
  @apply w-full flex justify-between items-center text-start py-2 hover:text-sky-500 transition-all duration-100 ease-in;
}

.sort-item--active {
  @apply text-sky-500;
}
</style>
