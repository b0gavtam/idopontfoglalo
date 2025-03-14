import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Idopontok',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/idopontfoglalas/:id',
      name: 'Idopontfoglalas',
      component: () => import('@/views/IdoPontFoglalasView.vue'),
    },
  ],
})

export default router
