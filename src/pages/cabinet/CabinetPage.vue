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
          <template v-for="(link, index) in links" :key="link.title">
            <LinkArrow :to="link.to" @click="link.fn">
              <div class="flex items-center gap-2">
                <i class="pi mr-1 text-sky-500" :class="link.icon"></i>
                <p>{{ link.title }}</p>
              </div>
            </LinkArrow>
            <Divider v-if="index !== links.length - 1" />
          </template>
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

const links = [
  {
    title: 'Данные',
    icon: 'pi-file',
    to: RouteNames.Cabinet,
  },
  {
    title: 'Статистика',
    icon: 'pi-chart-bar',
    to: RouteNames.Cabinet,
  },
  {
    title: 'Сменить пароль',
    icon: 'pi-key',
    to: RouteNames.Cabinet,
  },
  {
    title: 'Выход из системы',
    icon: 'pi-sign-out',
    to: RouteNames.Cabinet,
    fn: onLogout,
  },
]

function onLogout() {
  router.push({ name: RouteNames.Login })
  // userStore.logout()
}
</script>
