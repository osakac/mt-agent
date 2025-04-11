<template>
  <div class="max-w-[500px] w-full mx-auto">
    <PageTitle title="Регистрация" :to="RouteNames.Login" />

    <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="flex flex-col">
      <h3 class="text-3xl font-semibold text-center mb-2">Введите номер</h3>
      <p class="text-center text-lg/tight mb-7">
        Ваш номер телефона будет использоваться для входа в аккаунт
      </p>

      <div class="flex flex-col gap-2 mb-5">
        <div>
          <IconField>
            <InputIcon class="pi pi-phone"></InputIcon>
            <InputMask name="phone" mask="+7 (999) 999-99-99" fluid placeholder="Телефон" />
          </IconField>
          <Message v-if="$form.phone?.invalid" severity="error" size="small" variant="simple">
            {{ $form.phone.error.message }}
          </Message>
        </div>
        <div>
          <IconField>
            <InputIcon class="pi pi-lock"></InputIcon>
            <Password name="password" placeholder="Пароль" :feedback="false" fluid></Password>
          </IconField>
          <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
            {{ $form.password.error.message }}
          </Message>
        </div>
        <div>
          <IconField>
            <InputIcon class="pi pi-lock"></InputIcon>
            <Password
              name="confirmPassword"
              placeholder="Подтвердить пароль"
              :feedback="false"
              fluid
            ></Password>
          </IconField>
          <Message
            v-if="$form.confirmPassword?.invalid"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ $form.confirmPassword.error.message }}
          </Message>
        </div>
      </div>

      <Button type="submit" severity="info" label="Зарегистрироваться" fluid></Button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import PageTitle from '@/components/page-title/PageTitle.vue'
import { RouteNames } from '@/router'
import type { SubmitEventForm } from '@/types/prime-vue/prime-vue.types'
import { yupResolver } from '@primevue/forms/resolvers/yup'
import { shallowRef } from 'vue'
import * as yup from 'yup'

const initialValues = shallowRef({
  phone: '',
  password: '',
  confirmPassword: '',
})

const resolver = yupResolver(
  yup.object({
    phone: yup.string().required('Обязательное поле'),
    password: yup.string().required('Обязательное поле').min(6, 'Минимум 6 символов'),
    confirmPassword: yup
      .string()
      .required('Обязательное поле')
      .oneOf([yup.ref('password')], 'Пароли не совпадают'),
  }),
)

const onFormSubmit = (form: SubmitEventForm) => {
  if (!form.valid) return
}
</script>
