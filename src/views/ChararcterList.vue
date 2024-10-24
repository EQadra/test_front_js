<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold mb-4">Lista de Personajes</h1>
    <div v-if="loading" class="text-center">Cargando personajes...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <div v-if="characters.length" class="grid grid-cols-3 gap-4">
      <div v-for="character in characters" :key="character.id" class="border p-4 rounded shadow">
        <img :src="character.image" :alt="character.name" class="w-full h-48 object-cover rounded mb-4" />
        <h2 class="text-xl font-bold">{{ character.name }}</h2>
        <p><strong>Especie:</strong> {{ character.species }}</p>
        <p><strong>Estado:</strong> {{ character.status }}</p>
        <router-link :to="`/characters/${character.id}`" class="btn mt-4">Ver Detalle</router-link>
        <router-link :to="`/characters/${character.id}/chapters`" class="btn mt-2">Ver Capítulos</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCharacterStore } from '../stores/character'
const characterStore = useCharacterStore()

// Al montar el componente, cargar los personajes
onMounted(() => {
  characterStore.fetchCharacters()
})

// Accedemos al estado del store
const { characters, loading, error } = characterStore
</script>

<style scoped>
.btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  display: inline-block;
  text-decoration: none;
  margin-top: 10px;
}
</style>
