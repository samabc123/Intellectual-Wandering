import { createRouter, createWebHistory } from 'vue-router'
import navbarConfig from './navbar.config'
import MainLayout from '@/layout/main.vue'

const routes = [{
  path: '',
  component: MainLayout,
  redirect: navbarConfig[0] || '/404',
  children: navbarConfig
}, {
  name: 'login',
  path: '/login',
  component: () => import("@/views/Login.vue")
}, {
  name: 'retrievePassword',
  path: '/retrievePassword',
  component: () => import('@/views/retrievePassword.vue')
}, {
  name: 'register',
  path: '/register',
  component: () => import('@/views/register.vue')
}]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
