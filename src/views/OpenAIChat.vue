<template>
    <div class="chat">
      <textarea v-model="message"></textarea>
      <button @click="sendMessage">Enviar</button>
      <div v-if="response">
        <p>{{ response }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import axios from 'axios'
  
  const message = ref('')
  const response = ref('')
  
  const sendMessage = async () => {
    const res = await axios.post('http://localhost:8000/api/chat', { message: message.value })
    response.value = res.data
  }
  </script>