import { loginUser } from '@/fetchers/user'
import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import router from '../router/index'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
  }),
  actions: {
    async login(body: User) {
      const response = await loginUser(body)
      if (response && response.data.token) {
        localStorage.setItem('token', response.data.token)
        this.email = response.data.email
        router.push('/')
      }
    },
    logout() {
      // Eliminar el token del localStorage
      localStorage.removeItem('token')

      this.email = ''
      router.push('/login')
    },
    isAuthenticated() {
      const token = localStorage.getItem('token')
      if (!token) {
        return false
      }
      return true
    },
  },
})
