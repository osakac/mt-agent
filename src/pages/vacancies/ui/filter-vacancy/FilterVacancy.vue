<template>
  <div @scroll.prevent class="z-50">
    <h4 class="font-semibold text-lg mb-2">Фильтры</h4>

    <div class="grid grid-cols-2 gap-2 mb-5">
      <div class="col-span-2">
        <label>Специальность</label>
        <MultiSelect
          v-model="selectedSpecialties"
          :options="specialties"
          optionLabel="name"
          display="chip"
          placeholder="Любая"
          filter
          fluid
          :maxSelectedLabels="3"
        />
      </div>

      <div class="col-span-2">
        <label>Локация</label>
        <MultiSelect
          v-model="selectedLocation"
          :options="locations"
          optionLabel="name"
          display="chip"
          placeholder="Любая"
          filter
          fluid
          :maxSelectedLabels="3"
        />
      </div>

      <div class="col-span-2">
        <label>Ставка кандидата, ₽</label>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <IconField>
              <InputIcon>от</InputIcon>
              <InputNumber fluid />
            </IconField>
          </div>
          <div>
            <IconField>
              <InputIcon>до</InputIcon>
              <InputNumber fluid />
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
              <InputNumber fluid />
            </IconField>
          </div>
          <div>
            <IconField>
              <InputIcon>до</InputIcon>
              <InputNumber fluid />
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

const specialties = ref([
  { name: 'Любая', value: 'any' },
  { name: 'Frontend', value: 'frontend' },
  { name: 'Backend', value: 'backend' },
  { name: 'DevOps', value: 'devops' },
  { name: 'Designer', value: 'designer' },
  { name: 'UX/UI', value: 'uxui' },
])
const selectedSpecialties = ref<string[]>([])

const locations = shallowRef([
  { name: 'Любая', value: 'any' },
  { name: 'Москва', value: 'moscow' },
  { name: 'Санкт-Петербург', value: 'spb' },
  { name: 'Казань', value: 'kazan' },
  { name: 'Нижний Новгород', value: 'nn' },
  { name: 'Красноярск', value: 'krasnoyarsk' },
  { name: 'Екатеринбург', value: 'ekb' },
  { name: 'Новосибирск', value: 'nsk' },
  { name: 'Пермь', value: 'perm' },
])
const selectedLocation = ref<string[] | null>(null)

const applyFilter = () => {
  emit('applyFilter')
}

onMounted(() => (document.body.style.overflow = 'hidden'))
onUnmounted(() => (document.body.style.overflow = 'unset'))
</script>
