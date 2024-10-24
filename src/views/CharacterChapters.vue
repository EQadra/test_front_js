<template>
    <div class="container mx-auto py-8">
      <h1 v-if="loading" class="text-center">Cargando capítulos...</h1>
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <div v-if="chapters.length" class="max-w-md mx-auto">
        <h2 class="text-2xl font-bold mb-4">Capítulos en los que aparece {{ character.name }}</h2>
        <ul class="list-disc pl-5">
          <li v-for="chapter in chapters" :key="chapter.id" class="mb-2">
            <strong>{{ chapter.name }}</strong> ({{ chapter.episode }}) - {{ chapter.air_date }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { useCharacterStore } from '../stores/character'
  
  const characterStore = useCharacterStore()
  const route = useRoute()
  const characterId = route.params.id
  
  // Al montar el componente, cargar los capítulos del personaje
  onMounted(() => {
    characterStore.fetchCharacterChapters(characterId)
  })
  
  // Accedemos al estado del store
  const { chapters, character, loading, error } = characterStore
  </script>
  
  <style scoped>
  /* Estilos personalizados para la lista de capítulos */
  </style>
  