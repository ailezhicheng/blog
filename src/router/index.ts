import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/HomePage/index.vue'),
        redirect: '/home/new',

        children: [
          { path: '/home/new', name: 'new', component: () => import('@/views/HomePage/New.vue') },

          { path: '/home/hot', name: 'hot', component: () => import('@/views/HomePage/Hot.vue') },

          {
            path: '/home/comment',
            name: 'comment',
            component: () => import('@/views/HomePage/Many.vue'),
          },
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
      {
        path: '/archive',
        name: 'archive',
        component: () => import('@/views/Archive/index.vue'),
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
