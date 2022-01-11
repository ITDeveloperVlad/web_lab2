import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import reg from '../views/reg.vue'
import coast from '../views/coast.vue'
import ProductInfo from "../views/ProductInfo";
import Contact from "../views/Contact";

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
  },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },

    {
        path: '/products/:id',
        name: 'ProductInfo',
        component: ProductInfo
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
