import { defineStore } from 'pinia'
import axios from 'axios'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    characters: [], // Lista de personajes
    character: null, // Detalle de un personaje
    chapters: [], // Capítulos donde aparece un personaje
    loading: false, // Estado de carga
    error: null, // Manejo de errores
  }),

  actions: {
    // Obtener la lista de personajes
    async fetchCharacters() {
      this.loading = true;
      this.error = null; // Limpiar errores anteriores
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        // Transform the response to an array
        this.characters = Object.values(response.data.results);
      } catch (error) {
        this.error = 'Error al cargar personajes';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchCharacterById(id) {
      this.loading = true;
      this.error = null; // Limpiar errores anteriores
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        console.log('Character Data:', response.data); // Log the character data
        this.character = response.data;
      } catch (error) {
        this.error = 'Error al cargar el detalle del personaje';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    
    // Obtener el detalle de un personaje por ID
    // async fetchCharacterById(id) {
    //   this.loading = true
    //   this.error = null // Limpiar errores anteriores
    //   try {
    //     const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    //     this.character = response.data
    //   } catch (error) {
    //     this.error = 'Error al cargar el detalle del personaje'
    //     console.error(error)
    //   } finally {
    //     this.loading = false
    //   }
    // },

    // Obtener los capítulos en los que aparece un personaje
    async fetchCharacterChapters(id) {
      this.loading = true
      this.error = null // Limpiar errores anteriores
      this.chapters = [] // Limpiar capítulos anteriores
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        const episodes = response.data.episode // URLs de los episodios

        // Hacer múltiples requests para obtener detalles de cada episodio
        const chapterPromises = episodes.map(url => axios.get(url))
        const chapters = await Promise.all(chapterPromises)
        this.chapters = chapters.map(chapter => chapter.data)
      } catch (error) {
        this.error = 'Error al cargar los capítulos del personaje'
        console.error(error)
      } finally {
        this.loading = false
      }
    },

    // Limpiar el estado (resetear)
    clearState() {
      this.characters = []
      this.character = null
      this.chapters = []
      this.loading = false
      this.error = null
    }
  },
})
