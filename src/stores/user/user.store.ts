import type { User } from '@/types/user/user.types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>({
    id: 1,
    name: 'John Doe',
    email: 'bond007q@example.com',
    avatar: 'https://cdn0.iconfinder.com/data/icons/team-work-and-organization-2/128/78-1024.png',
    phone: '+7 (555) 999-99-99',
    isVerified: false,
  })

  const getUser = () => user.value

  return { getUser }
})
