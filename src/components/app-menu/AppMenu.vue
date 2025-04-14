<template>
  <div class="sticky bottom-0 left-0 right-0 px-3 py-2 bg-white border-t border-gray-200">
    <nav class="max-w-3xl mx-auto">
      <ul class="flex justify-between">
        <li>
          <RouterLink to="/" class="menu-item">
            <i class="pi pi-briefcase"></i>
            Мои заявки
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="RouteNames.Vacancies" class="menu-item">
            <i class="pi pi-align-justify"></i>
            Вакансии
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="menu-item">
            <i class="pi pi-user"></i>
            Кандидаты
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/" class="menu-item">
            <i class="pi pi-wallet"></i>
            Кошелек
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="RouteNames.Cabinet" class="menu-item">
            <i class="pi pi-cog"></i>
            Кабинет
          </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { RouteNames } from '@/router'
</script>

<style scoped>
@reference 'tailwindcss';

.menu-item {
  @apply flex flex-col items-center text-[12px] sm:text-sm md:text-lg;
  transition: color 0.2s ease;

  &:hover {
    @apply text-sky-500/40;
  }
}

.router-link-active {
  @apply text-sky-500;
}
</style>
