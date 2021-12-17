import { createRouter, createWebHistory } from 'vue-router'
import Reservation from '../views/Reservation.vue'

const routes = [
  {
    path: '/',
    name: 'Reservation',
    component: Reservation
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
