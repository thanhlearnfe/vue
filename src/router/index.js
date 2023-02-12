import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Product.vue')

    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../components/Cart.vue')

    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('../views/Detail.vue')
    }
  ]
})

export default router
