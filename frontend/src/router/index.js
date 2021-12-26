import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import reg from '../views/reg.vue'
import coast from '../views/coast.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reg',
    name: 'reg',
    component: reg
  },
  {
    path: '/coast',
    name: 'coast',
    component: coast
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
