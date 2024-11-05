import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await axios.post('http://localhost:8000/api/login', credentials);
        console.log('Respuesta del servidor:', response.data); // Para depuración

        // Asegúrate de que la respuesta tenga los datos esperados
        if (response.status === 200) {
          this.token = response.data.token;
          this.user = response.data.user;

          // Configura el header por defecto para futuras solicitudes
          axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
          console.log('Token guardado:', this.token); // Para depuración
          
          // También puedes almacenar el token en localStorage para persistencia
          localStorage.setItem('token', this.token);
        } else {
          console.error('Error inesperado:', response);
          throw new Error('Error en el inicio de sesión.');
        }
      } catch (error) {
        console.error('Error en el inicio de sesión:', error.response ? error.response.data : error.message);
        throw error; // Lanza el error para que el componente lo maneje
      }
    },

    async register(credentials) {
      try {
        const response = await axios.post('http://localhost:8000/api/register', credentials);
        
        if (response.status === 201) { // Asegúrate de que la respuesta sea la esperada
          this.token = response.data.token;
          this.user = response.data.user;
          
          // Configura el header por defecto para futuras solicitudes
          axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
          
          // También puedes almacenar el token en localStorage para persistencia
          localStorage.setItem('token', this.token);
        } else {
          console.error('Error inesperado en el registro:', response);
          throw new Error('Error en el registro.');
        }
      } catch (error) {
        console.error('Error en el registro:', error.response ? error.response.data : error.message);
        throw error; // Lanza el error para que el componente lo maneje
      }
    },

    // Método para cerrar sesión
    logout() {
      this.token = null;
      this.user = null;
      delete axios.defaults.headers.common['Authorization']; // Elimina el header de autorización
      localStorage.removeItem('token'); // Elimina el token de localStorage
    },

    // Método para cargar el token desde localStorage al iniciar la aplicación
    loadToken() {
      const token = localStorage.getItem('token');
      if (token) {
        this.token = token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
      }
    },
  },
});
