import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/marlen',
      name: 'marlen',
      component: () => import('../views/MarlenView.vue'),
    },
    {
      path: '/german/:id?',
      name: 'german',
      component: () => import('../views/GermanView.vue'),
      props: (route) => ({ id: route.params.id || 'German' }),
    },
    {
      path: '/stiwar',
      name: 'stiwar',
      component: () => import('../views/StiwarView.vue'),
    },
  ],
})

export default router
