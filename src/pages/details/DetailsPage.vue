<template>
  <div class="flex flex-col flex-grow">
    <PageTitle title="Детали" :to="RouteNames.Cabinet" />

    <template v-if="user">
      <div class="flex flex-col justify-between flex-grow">
        <div>
          <div class="flex flex-col items-center gap-2 mb-5">
            <Avatar :image="user.avatar" size="xlarge" shape="circle" />
            <h3 class="font-semibold text-xl">{{ user.name }}</h3>
          </div>

          <Card class="mb-5">
            <template #content>
              <div class="flex flex-col">
                <ToggleableInplace :value="user.phone" type="phone" />
                <Divider class="my-2!" />
                <ToggleableInplace :value="user.email" type="email" />
              </div>
            </template>
          </Card>

          <Button severity="info" label="Пройти верификацию" fluid></Button>
        </div>

        <Button severity="danger" label="Удалить аккаунт" class="w-fit mx-auto"></Button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import PageTitle from '@/components/page-title/PageTitle.vue'
import ToggleableInplace from '@/components/toggleable-inplace/ToggleableInplace.vue'
import { RouteNames } from '@/router'
import { useUserStore } from '@/stores/user/user.store'

const userStore = useUserStore()

const user = userStore.getUser
</script>
