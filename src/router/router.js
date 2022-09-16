import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/views/index.vue'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login.vue'),
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('@/views/category.vue'),
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('@/views/cart.vue'),
  },
  {
    name: 'mine',
    path: '/mine',
    component: () => import('@/views/mine.vue'),
  },
  {
    name: 'productDetail',
    path: '/productDetail',
    component: () => import('@/views/productDetail.vue'),
  },
  {
    name: 'submitOrder',
    path: '/submitOrder',
    component: () => import('@/views/submitOrder.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
