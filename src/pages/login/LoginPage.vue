<template>
  <div class="flex flex-col justify-center h-full max-w-[500px] w-full mx-auto">
    <div>
      <h1 class="text-3xl text-center mb-10">MT Agent</h1>

      <div class="w-full flex flex-col gap-2 mb-5">
        <IconField>
          <InputIcon class="pi pi-phone"></InputIcon>
          <InputMask
            id="phone"
            v-model="phone"
            mask="+7 (999) 999-99-99"
            placeholder="Телефон"
            fluid
          />
        </IconField>
        <IconField>
          <InputIcon class="pi pi-lock"></InputIcon>
          <Password id="password" v-model="password" :feedback="false" placeholder="Пароль" fluid />
        </IconField>
      </div>

      <div class="flex flex-col gap-2">
        <RouterLink :to="RouteNames.Home">
          <Button @click.prevent="handleLogin" severity="info" label="Войти" fluid></Button>
        </RouterLink>
        <RouterLink :to="RouteNames.Register">
          <Button severity="success" label="Зарегистрироваться" fluid></Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouteNames } from '@/router'
import { ref } from 'vue'

const phone = ref('')
const password = ref('')

const handleLogin = () => {}
</script>
