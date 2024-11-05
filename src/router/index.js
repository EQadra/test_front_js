import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Register from '../views/Register.vue'
import ChararcterList from '../views/ChararcterList.vue'
import CharacterDetail from '../views/CharacterDetail.vue'
import CharacterChapters from '../views/CharacterChapters.vue'
import OpenAIChat from '../views/OpenAIChat.vue'
import Dashboard from '../views/Dashboard.vue'

const
 routes = [
  /** */
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
/** */
  { path: '/characters/', component: ChararcterList },
  { path: '/characters/:id', component: CharacterDetail },
  { path: '/characters/:id/chapters', component: CharacterChapters },
  { path: '/openai', component: OpenAIChat },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
