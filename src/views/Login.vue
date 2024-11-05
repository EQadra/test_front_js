<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-200">
    <div class="bg-white shadow-lg rounded-lg p-8 w-1/2"> <!-- Cambiado a w-1/2 -->
      <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Iniciar sesión</h1>
      <form @submit.prevent="login" class="flex flex-col">
        <input 
          v-model="email" 
          type="email" 
          placeholder="Correo electrónico" 
          class="p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
          required 
        />
        <input 
          v-model="password" 
          type="password" 
          placeholder="Contraseña" 
          class="p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
          required 
        />
        <button type="submit" class="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300">Iniciar sesión</button>
      </form>
    </div>
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

const login = async () => {
  try {
    // Intentar iniciar sesión
    await authStore.login({ email: email.value, password: password.value });
    
    // Si el inicio de sesión es exitoso, redirigir a Dashboard
    if (authStore.token) {
      console.log('Login exitoso. Redirigiendo a Dashboard...');
      router.push('/dashboard'); // Redirigir a la página del dashboard
    }
  } catch (error) {
    console.error('Error durante el inicio de sesión:', error);
    // Aquí puedes mostrar un mensaje de error al usuario si lo deseas
  }
}
</script>
