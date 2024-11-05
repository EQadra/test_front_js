<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Iniciar sesión</h1>
    <form @submit.prevent="login" class="flex flex-col">
      <input v-model="email" type="email" placeholder="Correo electrónico" class="input" required />
      <input v-model="password" type="password" placeholder="Contraseña" class="input" required />
      <button type="submit" class="btn">Iniciar sesión</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore()

// Método para manejar el login
const login = async () => {
  try {
    // Llama al store y pasa las credenciales
    await authStore.login({ email: email.value, password: password.value })
    // Redirigir al dashboard después del login
    router.push('/dashboard')
  } catch (error) {
    console.error('Error al iniciar sesión:', error)
    alert('Error al iniciar sesión. Verifica tus credenciales.')
  }
}
</script>

<style scoped>
.input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
}
.btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
