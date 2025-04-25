<template>
  <div class="flex flex-col flex-grow justify-center h-full max-w-[500px] w-full mx-auto">
    <div>
      <h1 class="text-3xl text-center mb-10">MT Agent</h1>

      <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="mb-2">
        <div class="w-full flex flex-col gap-2 mb-5">
          <div>
            <IconField>
              <InputIcon class="pi pi-phone"></InputIcon>
              <InputNumber name="phone" placeholder="Телефон" :useGrouping="false" fluid />
            </IconField>
            <Message v-if="$form.phone?.invalid" severity="error" size="small" variant="simple">
              {{ $form.phone.error.message }}
            </Message>
          </div>
          <div>
            <IconField>
              <InputIcon class="pi pi-lock"></InputIcon>
              <Password
                name="password"
                id="password"
                :feedback="false"
                placeholder="Пароль"
                fluid
              />
            </IconField>
            <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
              {{ $form.password.error.message }}
            </Message>
          </div>
        </div>

        <Button type="submit" severity="info" label="Войти" fluid></Button>
      </Form>

      <div class="flex flex-col gap-2">
        <RouterLink :to="RouteNames.Register">
          <Button severity="success" label="Зарегистрироваться" fluid></Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouteNames } from '@/router'
import type { SubmitEventForm } from '@/types/prime-vue/prime-vue.types'
import { Form } from '@primevue/forms'
import { yupResolver } from '@primevue/forms/resolvers/yup'
import { shallowRef } from 'vue'
import { useRouter } from 'vue-router'
import * as yup from 'yup'

const router = useRouter()

const initialValues = shallowRef({
  phone: '',
  password: '',
})

const resolver = yupResolver(
  yup.object({
    phone: yup
      .string()
      .required('Обязательное поле')
      .min(11, 'Номер телефона из 11 символов')
      .max(11, 'Номер телефона из 11 символов'),
    password: yup.string().required('Обязательное поле').min(6, 'Минимум 6 символов'),
  }),
)

const onFormSubmit = (form: SubmitEventForm) => {
  if (!form.valid) return

  router.replace(RouteNames.Cabinet)
}
</script>
