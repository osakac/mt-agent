<template>
  <PageTitle title="Кабинет" />

  <template v-if="user">
    <Card class="mb-10">
      <template #content>
        <LinkArrow :to="RouteNames.Details">
          <div class="flex items-center gap-5">
            <Avatar :image="user.avatar" size="xlarge" shape="circle" />

            <div class="inline-flex flex-col gap-1">
              <h3 class="text-xl">{{ user.name }}</h3>
              <Tag
                :severity="user.isVerified ? 'success' : 'danger'"
                :value="user.isVerified ? 'Верифицирован' : 'Не верифицирован'"
                @click.prevent="user.isVerified = !user.isVerified"
                class="w-fit"
              />
            </div>
          </div>
        </LinkArrow>
      </template>
    </Card>

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
          <LinkArrow :to="RouteNames.Cabinet" @click.prevent="onLogout">
            <div class="flex items-center gap-2">
              <i class="pi pi-sign-out mr-1" style="color: var(--p-sky-500)"></i>
              <p>Выход из системы</p>
            </div>
          </LinkArrow>
        </div>
      </template>
    </Card>
  </template>
</template>

<script setup lang="ts">
import LinkArrow from '@/components/link-arrow/LinkArrow.vue'
import PageTitle from '@/components/page-title/PageTitle.vue'
import { RouteNames } from '@/router'
import { useUserStore } from '@/stores/user/user.store'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()

const user = userStore.getUser

const onLogout = () => {
  router.push({ name: RouteNames.Login })
  userStore.logout()
}
</script>
