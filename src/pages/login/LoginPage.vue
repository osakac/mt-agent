<template>
  <div class="flex flex-col justify-between h-full max-w-[500px] w-full mx-auto py-5">
    <div></div>

    <div>
      <h1 class="text-black text-3xl text-center mb-10">MT Agent</h1>

      <div class="w-full flex flex-col gap-2 mb-5">
        <InputMask v-model="phone" mask="+7 (999) 999-99-99" placeholder="Телефон" />
        <Password v-model="password" :feedback="false" placeholder="Пароль" />
      </div>

      <RouterLink :to="RouteNames.Home">
        <Button severity="info" class="w-full">Войти</Button>
      </RouterLink>
    </div>

    <RouterLink :to="RouteNames.Register">
      <Button severity="success" class="w-full">Зарегистрироваться</Button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouteNames } from '@/router'
import { ref } from 'vue'

const phone = ref('')
const password = ref('')
</script>
