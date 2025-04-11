<template>
  <div class="max-w-[500px] w-full mx-auto">
    <PageTitle title="Регистрация" :to="RouteNames.Login" />

    <div class="flex flex-col">
      <h3 class="text-3xl font-semibold text-center mb-2">Введите номер</h3>
      <p class="text-center text-lg/tight mb-7">
        Ваш номер телефона будет использоваться для входа в аккаунт
      </p>

      <div class="flex flex-col gap-2 mb-5">
        <InputMask v-model="phone" mask="+7 (999) 999-99-99" fluid placeholder="Телефон" />
        <Password v-model="password" placeholder="Пароль" fluid></Password>
        <Password v-model="confirmPassword" placeholder="Подтвердить пароль" fluid></Password>
      </div>

      <RouterLink :to="RouteNames.Login">
        <Button severity="info" label="Зарегистрироваться" fluid></Button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageTitle from '@/components/page-title/PageTitle.vue'
import { RouteNames } from '@/router'
import { ref } from 'vue'

const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
</script>
