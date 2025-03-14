import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../ui/views/HomeView.vue'
import CardsView from '../ui/views/CardsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cards',
      name: 'cards',
      component: CardsView,
    },
  ],
})

export default router
