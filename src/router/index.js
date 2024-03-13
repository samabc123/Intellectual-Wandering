import { createRouter, createWebHistory } from 'vue-router'

import navbarConfig from './navbar.config'

import MainLayout from '@/layout/main.vue'
import PageLayout from '@/layout/page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '',
    component: MainLayout,
    redirect: navbarConfig[0] || '/404',
    children: navbarConfig
  }, {
    name: 'login',
    path: '/login',
    component: () => import("@/views/Login.vue")
  }]
})

export default router
