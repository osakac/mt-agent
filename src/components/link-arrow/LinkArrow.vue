<template>
  <RouterLink :to="{ name: to }" class="relative link-arrow">
    <slot></slot>

    <i class="pi pi-angle-right absolute top-1/2 right-0 -translate-y-1/2 text-sky-500" />
  </RouterLink>
</template>

<script setup lang="ts">
import type { RouteNames } from '@/router'

interface Props {
  to: RouteNames
}

defineProps<Props>()
</script>

<style scoped>
@reference 'tailwindcss';

.link-arrow {
  transition: color 0.2s ease;

  &:hover {
    @apply text-sky-500;
  }

  &:not(:first-child) {
    @apply pt-1.5;
  }

  &:not(:last-child) {
    @apply pb-1.5;
  }
}
</style>
