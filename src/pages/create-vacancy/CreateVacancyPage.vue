<template>
  <PageTitle title="Создание вакансии" :to="RouteNames.Vacancies" />

  <Form #default="$form" :initialValues :resolver @submit="onFormSubmit">
    <div class="flex flex-col gap-4 mb-7">
      <div>
        <label>Название</label>
        <InputText name="title" placeholder="Введите название" fluid />
        <Message v-if="$form.title?.invalid" severity="error" size="small" variant="simple">
          {{ $form.title.error.message }}
        </Message>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <div>
          <label>Город</label>
          <Select
            :options="cities"
            name="city"
            placeholder="Выберите город"
            filterPlaceholder="Введите название"
            emptyFilterMessage="Не найдено"
            resetFilterOnHide
            filter
            fluid
          />
          <Message v-if="$form.city?.invalid" severity="error" size="small" variant="simple">
            {{ $form.city.error.message }}
          </Message>
        </div>

        <div>
          <label>Объект</label>
          <Select
            :options="objects"
            name="object"
            placeholder="Выберите объект"
            filterPlaceholder="Введите название"
            emptyFilterMessage="Не найдено"
            resetFilterOnHide
            filter
            fluid
          />
          <Message v-if="$form.object?.invalid" severity="error" size="small" variant="simple">
            {{ $form.object.error.message }}
          </Message>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2">
        <div>
          <label>Должность</label>
          <Select
            :options="posts"
            name="post"
            placeholder="Выберите должность"
            filterPlaceholder="Введите название"
            emptyFilterMessage="Не найдено"
            resetFilterOnHide
            filter
            fluid
          />
          <Message v-if="$form.post?.invalid" severity="error" size="small" variant="simple">
            {{ $form.post.error.message }}
          </Message>
        </div>

        <div>
          <label>Разряд</label>
          <Select
            :options="categories"
            name="category"
            placeholder="Выберите разряд"
            filterPlaceholder="Введите название"
            emptyFilterMessage="Не найдено"
            resetFilterOnHide
            filter
            fluid
          />
          <Message v-if="$form.category?.invalid" severity="error" size="small" variant="simple">
            {{ $form.category.error.message }}
          </Message>
        </div>
      </div>

      <Textarea name="description" rows="4" autoResize placeholder="Описание вакансии" />
    </div>

    <Button type="submit" label="Создать" fluid></Button>
  </Form>
</template>

<script setup lang="ts">
import PageTitle from '@/components/page-title/PageTitle.vue'
import { RouteNames } from '@/router'
import type { SubmitEventForm } from '@/types/prime-vue/prime-vue.types'
import { yupResolver } from '@primevue/forms/resolvers/yup'
import { shallowRef } from 'vue'
import * as yup from 'yup'

const initialValues = shallowRef({
  title: '',
  city: '',
  object: '',
  post: '',
  category: '',
  description: '',
})
const resolver = yupResolver(
  yup.object({
    title: yup.string().trim().required('Обязательное поле'),
    city: yup.string().required('Обязательное поле'),
    object: yup.string().required('Обязательное поле'),
    post: yup.string().required('Обязательное поле'),
    category: yup.string().required('Обязательное поле'),
    description: yup.string(),
  }),
)
const onFormSubmit = (form: SubmitEventForm) => {
  if (!form.valid) return
}

const cities = [
  'Москва',
  'Санкт-Петербург',
  'Новосибирск',
  'Екатеринбург',
  'Нижний Новгород',
  'Краснодар',
  'Самара',
  'Уфа',
  'Челябинск',
  'Казань',
  'Пермь',
]
const objects = ['Завод 1', 'Завод 2', 'Завод 3', 'Завод 4', 'Завод 5']
const posts = ['Контроль качества', 'Слесарь', 'Механик', 'Маляр']
const categories = ['Разряд 1', 'Разряд 2', 'Разряд 3', 'Разряд 4', 'Разряд 5']
</script>
