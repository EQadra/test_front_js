<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Registrar</h1>
    <form @submit.prevent="register" class="flex flex-col">
      <input v-model="name" type="text" placeholder="Nombre" class="input" required />
      <input v-model="email" type="email" placeholder="Correo electrónico" class="input" required />
      <input v-model="password" type="password" placeholder="Contraseña" class="input" required />
      <button type="submit" class="btn">Registrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore()

// Método para manejar el registro
const register = async () => {
  try {
    // Llama al store y pasa las credenciales
    await authStore.register({ name: name.value, email: email.value, password: password.value })
    // Redirigir al login después de registrarse
    router.push('/login')
  } catch (error) {
    console.error('Error durante el registro:', error)
    alert('Error al registrarse. Verifica los datos.')
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
