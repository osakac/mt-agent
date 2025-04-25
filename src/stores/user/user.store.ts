import type { User } from '@/types/user/user.types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>({
    id: 1,
    name: 'John Doe',
    email: 'bond007q@example.com',
    avatar: 'https://cdn0.iconfinder.com/data/icons/team-work-and-organization-2/128/78-1024.png',
    phone: '89828662848',
    isVerified: false,
  })

  const getUser = computed(() => user.value)

  const updateUserData = (field: 'email' | 'phone', newData: string) => {
    if (user.value) user.value[field] = newData
  }

  const logout = () => (user.value = null)

  return { getUser, updateUserData, logout }
})
