import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Meta from 'vue-meta'
//Import Store
import store from '@/store'

/* Layout */
import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

export const Routes: RouteConfig[] = [
  {
    path: '*',
    name: 'not-found',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
  },
  {
      path: '/',
      name: 'Home',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
          name: 'Dashboard',
          meta: {
            title: 'dashboard',
            icon: 'dashboard',
            requiresAuth: true
          }
        }
      ]
  },
  {
    path: '/caja',
    component: Layout,
    redirect: '/caja/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/caja/index.vue'),
        name: 'Caja',
        meta: {
          title: 'caja',
          icon: 'caja',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/comandas',
    component: Layout,
    redirect: '/comandas/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/comandas/index.vue'),
        name: 'Comandas',
        meta: {
          title: 'comandas',
          icon: 'comandas',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/cuadrar-caja',
    component: Layout,
    redirect: '/cuadrar-caja/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/cuadrar-caja/index.vue'),
        name: 'Cuadrar Cajas',
        meta: {
          title: 'cuadrar-caja',
          icon: 'cuadrar-caja',
          requiresAuth: true
        }
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: Routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // console.log(store.getters['AppModule/isAuth'])
    if(!store.getters['SessionModule/isAuth']){
      next({
        path: '/login'
      })
    }else{
      next()
    }
  } else {
    next() 
  }
})

Vue.use(Meta)

export default router
