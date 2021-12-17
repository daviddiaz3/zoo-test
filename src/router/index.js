import { createRouter, createWebHistory } from 'vue-router'
import Reservation from '../views/Reservation.vue'
import ReservationDetails from '../views/ReservationDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Reservation',
    component: Reservation
  },

  {
    path: '/details',
    name: 'ReservationDetails',
    component: ReservationDetails,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
