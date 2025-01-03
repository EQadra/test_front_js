import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth' // Asegúrate de que la ruta a tu store sea correcta

import Login from '@/views/Login.vue'
import Register from '../views/Register.vue'
import ChararcterList from '../views/ChararcterList.vue'
import CharacterDetail from '../views/CharacterDetail.vue'
import CharacterChapters from '../views/CharacterChapters.vue'
import OpenAIChat from '../views/OpenAIChat.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
  { path: '/characters', component: ChararcterList },
  { path: '/characters/:id', component: CharacterDetail },
  { path: '/characters/:id/chapters', component: CharacterChapters },
  { path: '/openai', component: OpenAIChat },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore(); // Asegúrate de que authStore esté correctamente importado
  const isAuthenticated = !!authStore.token; // Cambia esto según cómo manejes la autenticación

  if (to.path !== '/' && !isAuthenticated) {
    next('/'); // Redirige a login si no está autenticado
  } else {
    next(); // Permite el acceso a la ruta
  }
});

export default router
