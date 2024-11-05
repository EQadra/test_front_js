import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import Login from '@/views/Login.vue'
import './assets/tailwind.css'  // Importar Tailwind CSS
import router from './router'


const app = createApp(Login)
app.use(createPinia())
app.use(router)
app.mount('#app')
