import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainView.vue')
  },
  {
    path: '/services',
    name: 'model',
    component: () => import(/* webpackChunkName: "about" */ '../views/ModelView.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  base: '/',
  routes
})

export default router
