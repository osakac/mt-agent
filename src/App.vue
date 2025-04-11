<template>
  <main class="mx-auto max-w-5xl py-5 px-3 h-screen">
    <router-view></router-view>
  </main>

  <AppMenu v-if="isShowNav" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppMenu from './components/app-menu/AppMenu.vue'

const route = useRoute()
const isShowNav = computed(() => route.meta.showNavigationPanel)
</script>
