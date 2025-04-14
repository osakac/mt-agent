<template>
  <PageTitle title="Кабинет" />

  <RouterLink to="/" class="block mb-10">
    <Card>
      <template #content>
        <div class="flex items-center gap-5">
          <Avatar label="M" size="xlarge" />

          <div class="inline-flex flex-col gap-1">
            <h3 class="text-xl">+7 (999) 999-99-99</h3>
            <Tag
              :severity="isVerified ? 'success' : 'danger'"
              :value="isVerified ? 'Верифицирован' : 'Не верифицирован'"
              @click.prevent="isVerified = !isVerified"
              class="w-fit"
            />
          </div>
        </div>
      </template>
    </Card>
  </RouterLink>

  <Card>
    <template #content>
      <div class="flex flex-col">
        <LinkArrow :to="RouteNames.Cabinet">
          <div class="flex items-center gap-2">
            <i class="pi pi-file mr-1" style="color: var(--p-sky-500)"></i>
            <p>Данные</p>
          </div>
        </LinkArrow>
        <Divider />
        <LinkArrow :to="RouteNames.Cabinet">
          <div class="flex items-center gap-2">
            <i class="pi pi-key mr-1" style="color: var(--p-sky-500)"></i>
            <p>Сменить пароль</p>
          </div>
        </LinkArrow>
        <Divider />
        <LinkArrow :to="RouteNames.Cabinet">
          <div class="flex items-center gap-2">
            <i class="pi pi-sign-out mr-1" style="color: var(--p-sky-500)"></i>
            <p>Выход из системы</p>
          </div>
        </LinkArrow>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import LinkArrow from '@/components/link-arrow/LinkArrow.vue'
import PageTitle from '@/components/page-title/PageTitle.vue'
import { RouteNames } from '@/router'
import { shallowRef } from 'vue'

const isVerified = shallowRef(false)
</script>
