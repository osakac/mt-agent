<template>
  <div class="relative h-[40px] flex justify-center items-center mb-5">
    <RouterLink v-if="to" :to class="absolute top-1/2 left-0 -translate-y-1/2">
      <Button severity="info" size="small" aria-label="Назад">
        <i class="pi pi-angle-left"></i>
      </Button>
    </RouterLink>

    <h2 class="font-semibold">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import type { RouteNames } from '@/router'

interface Props {
  title: string
  to?: RouteNames
}

defineProps<Props>()
</script>
