import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutPerson from '../views/AboutPerson.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutPerson/:id',
    name: 'about',
    component: AboutPerson
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
