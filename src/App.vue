<template>
  <div class="min-h-screen flex flex-col">
    <main class="mx-auto max-w-5xl w-full py-5 px-3 flex flex-grow">
      <router-view></router-view>
    </main>

    <AppMenu v-if="isShowNav" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppMenu from './components/app-menu/AppMenu.vue'

const route = useRoute()
const isShowNav = computed(() => route.meta.showNavigationPanel)
</script>
