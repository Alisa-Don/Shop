import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/store'

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
  {
    name: 'upload',
    path: '/upload',
    component: () => import('@/views/upload.vue'),
  },
  {
    name: 'OrderList',
    path: '/OrderList',
    component: () => import('@/views/OrderList.vue'),
  },
  {
    name: 'ListDetail',
    path: '/ListDetail',
    component: () => import('@/views/ListDetail.vue'),
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
  const needNavBar = ['/', '/category', '/cart', '/mine']
  const toPath = to.path
  if (needNavBar.includes(toPath)) {
    store.commit('SET_SHOWNAVBAR', true)
  } else {
    store.commit('SET_SHOWNAVBAR', false)
  }
  next()
})

export default router
