import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'
import './assets/styles/tailwind.css'; // Asegúrate de que la ruta sea correcta


const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);

// Cargar el token al iniciar la aplicación
const authStore = useAuthStore();
authStore.loadToken();

app.mount('#app');
