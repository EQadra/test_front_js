<template>
  <div class="flex  bg-gradient-to-r from-blue-500 to-teal-500">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full">
      <img
        class="w-full h-48 object-cover"
        src="https://via.placeholder.com/300"
        alt="Placeholder Image"
      />
      <div class="p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-2">Título del Card</h2>
        <p class="text-gray-700 mb-4">
          Esta es una descripción breve del card. Puedes incluir información relevante aquí.
        </p>
        <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
          Acción
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const message = ref('')
const response = ref('')

const sendMessage = async () => {
  try {
    const res = await axios.post('http://localhost:8000/api/chat', { message: message.value })
    response.value = res.data
    message.value = '' // Limpiar el campo de entrada después de enviar
  } catch (error) {
    console.error('Error al enviar el mensaje:', error)
  }
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>
