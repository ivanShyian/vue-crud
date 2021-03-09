import Vue from 'vue'
import VueRouter from 'vue-router'
import People from '../views/People.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'People',
    component: People
  },
  {
    path: '/person/:id?',
    name: 'Person',
    component: () => import('../views/Person')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
