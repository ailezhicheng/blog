import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomePage/index.vue'),
    children: [
      { path: '/new', name: 'new', component: () => import('@/views/HomePage/New.vue') },

      { path: '/hot', name: 'hot', component: () => import('@/views/HomePage/Hot.vue') },

      { path: '/comment', name: 'comment', component: () => import('@/views/HomePage/Many.vue') },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About/index.vue'),
  },

  {
    path: '/works',
    name: 'works',
    component: () => import('@/views/WorkSet/index.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
