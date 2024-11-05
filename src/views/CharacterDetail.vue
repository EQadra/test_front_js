<template>
  <div class="container mx-auto py-8">
    <h1 v-if="loading" class="text-center">Cargando detalle del personaje...</h1>
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <div v-if="character" class="max-w-md mx-auto border p-4 rounded shadow">
      <img :src="character.image" :alt="character.name" class="w-full h-64 object-cover rounded mb-4" />
      <h2 class="text-2xl font-bold">{{ character.name }}</h2>
      <p><strong>Especie:</strong> {{ character.species }}</p>
      <p><strong>Género:</strong> {{ character.gender }}</p>
      <p><strong>Origen:</strong> {{ character.origin ? character.origin.name : 'Desconocido' }}</p>
      <p><strong>Estado:</strong> {{ character.status }}</p>
    </div>
    <div v-else class="text-center">No se encontró el personaje.</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCharacterStore } from '../stores/character';

const characterStore = useCharacterStore();
const route = useRoute();
const characterId = route.params.id;

console.log('Character ID:', characterId); // Debugging

// Al montar el componente, cargar el detalle del personaje
onMounted(() => {
  characterStore.fetchCharacterById(characterId);
});

// Accedemos al estado del store
const { character, loading, error } = characterStore;
</script>

<style scoped>
/* Estilos personalizados para el detalle del personaje */
</style>
