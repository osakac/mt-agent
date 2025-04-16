<template>
  <div class="relative">
    <p v-if="!isEditing">{{ value }}</p>

    <Form v-else :initialValues :resolver @submit="onSubmit">
      <IconField v-if="type === 'phone'">
        <InputIcon class="pi pi-phone" />
        <InputMask name="value" mask="+7 (999) 999-99-99" placeholder="Телефон" />
      </IconField>

      <IconField v-else-if="type === 'email'">
        <InputIcon class="pi pi-at" />
        <InputText name="value" placeholder="Почта" />
      </IconField>

      <button v-if="isEditing" type="submit" class="toggle-btn">сохранить</button>
    </Form>

    <button v-if="!isEditing" @click="isEditing = true" class="toggle-btn">изменить</button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user/user.store'
import type { SubmitEventForm } from '@/types/prime-vue/prime-vue.types'
import { yupResolver } from '@primevue/forms/resolvers/yup'
import { computed, ref } from 'vue'
import * as yup from 'yup'

interface Props {
  value: string
  type: 'phone' | 'email'
}

const { value, type } = defineProps<Props>()
const userStore = useUserStore()

const isEditing = ref(false)

const initialValues = computed(() => ({ value }))
const resolver = computed(() => {
  switch (type) {
    case 'phone':
      return yupResolver(
        yup.object({
          value: yup.string().required(),
        }),
      )
    case 'email':
      return yupResolver(
        yup.object({
          value: yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i),
        }),
      )
    default:
      return yupResolver(yup.object({}))
  }
})

const onSubmit = (form: SubmitEventForm) => {
  if (!form.valid) return

  userStore.updateUserData(type, form.states.value.value)
  isEditing.value = false
}
</script>

<style scoped>
@reference 'tailwindcss';

.toggle-btn {
  @apply absolute top-1/2 right-0 -translate-y-1/2 text-sky-500;
}
</style>
