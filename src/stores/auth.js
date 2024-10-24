import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(credentials) {
      const response = await axios.post('http://localhost:8000/api/login', credentials)
      this.token = response.data.token
      this.user = response.data.user
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}` // Configura el header por defecto
    },
    async register(credentials) {
      const response = await axios.post('http://localhost:8000/api/register', credentials)
      this.token = response.data.token
      this.user = response.data.user
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}` // Configura el header por defecto
    },
  },
})
