<template>
  <div @scroll.prevent class="z-50">
    <h4 class="font-semibold text-lg mb-2">Фильтры</h4>

    <div class="grid grid-cols-2 gap-2 mb-5">
      <div class="col-span-2">
        <label>Специальность</label>
        <AutoComplete
          v-model="selectedSpecialties"
          :suggestions="suggestionsSpecialties"
          @complete="searchSpecialties($event.query)"
          placeholder="Любая"
          empty-search-message="Не найдено"
          scroll-height="400px"
          dropdown
          fluid
          multiple
        />
      </div>

      <div class="col-span-2">
        <label>Локация</label>
        <AutoComplete
          v-model="selectedLocation"
          :suggestions="suggestionsLocation"
          @complete="searchLocation($event.query)"
          placeholder="Любая"
          empty-search-message="Не найдено"
          scroll-height="400px"
          dropdown
          fluid
          multiple
        />
      </div>

      <div class="col-span-2">
        <label>Ставка кандидата, ₽</label>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <IconField>
              <InputIcon>от</InputIcon>
              <InputText fluid />
            </IconField>
          </div>
          <div>
            <IconField>
              <InputIcon>до</InputIcon>
              <InputText fluid />
            </IconField>
          </div>
        </div>
      </div>

      <div class="col-span-2">
        <label>Выплата за человека, ₽</label>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <IconField>
              <InputIcon>от</InputIcon>
              <InputText fluid />
            </IconField>
          </div>
          <div>
            <IconField>
              <InputIcon>до</InputIcon>
              <InputText fluid />
            </IconField>
          </div>
        </div>
      </div>
    </div>

    <Button @click="applyFilter" severity="info" label="Применить" fluid></Button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'

interface Emits {
  (e: 'applyFilter'): void
}

const emit = defineEmits<Emits>()

const specialties = shallowRef([
  'Любая',
  'Frontend',
  'Backend',
  'DevOps',
  'Designer',
  'QA',
  'PM',
  'HR',
  'Legal',
  'Sales',
  'IT',
])
const suggestionsSpecialties = ref<string[]>([])
const selectedSpecialties = ref<string[]>([])
const searchSpecialties = (query: string) => {
  suggestionsSpecialties.value = specialties.value.filter((s) =>
    s.toLowerCase().startsWith(query.toLowerCase()),
  )
}

const locations = shallowRef([
  'Любая',
  'Москва',
  'Санкт-Петербург',
  'Казань',
  'Новосибирск',
  'Екатеринбург',
  'Нижний Новгород',
  'Самара',
  'Омск',
  'Красноярск',
])
const suggestionsLocation = ref<string[]>([])
const selectedLocation = ref<string[] | null>(null)
const searchLocation = (query: string) => {
  suggestionsLocation.value = locations.value.filter((s) =>
    s.toLowerCase().startsWith(query.toLowerCase()),
  )
}

const applyFilter = () => {
  emit('applyFilter')
}

onMounted(() => (document.body.style.overflow = 'hidden'))
onUnmounted(() => (document.body.style.overflow = 'unset'))
</script>
