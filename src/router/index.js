import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Navigation from '../views/Navigation.vue'
import OrderMeny from '../views/OrderMeny.vue'
import Eta from '../views/Eta.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Navigation',
    name: 'Navigation',
    component: Navigation
  },
  {
    path: '/OrderMeny',
    name: 'OrderMeny',
    component: OrderMeny
  },
  {
    path: '/Eta',
    name: 'Eta',
    component: Eta
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
