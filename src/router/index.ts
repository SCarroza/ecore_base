import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Meta from 'vue-meta'
//Import Store
import store from '@/store'

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
    path: '/accesos/index',
    name: 'Acessos',
    component: () => import(/* webpackChunkName: "accesos" */ '@/views/accesos/index.vue'),
    meta: { requiresAuth: true, layout: 'default' }
  },
  {
    path: '/actualizador/index',
    name: 'Actualizador',
    component: () => import(/* webpackChunkName: "actualizador" */ '@/views/actualizador/index.vue'),
    meta: { requiresAuth: true, layout: 'default' }
  },
  {
    path: '/configurador/index',
    name: 'Configurador',
    component: () => import(/* webpackChunkName: "configurador" */ '@/views/configurador/index.vue'),
    meta: { requiresAuth: true, layout: 'default' }
  },
  {
    path: '/casos/index',
    name: 'Casos',
    component: () => import(/* webpackChunkName: "casos" */ '@/views/casos/index.vue'),
    meta: { requiresAuth: true, layout: 'default' }
  },
  {
    path: '/monitoreo/index',
    name: 'Monitoreo',
    component: () => import(/* webpackChunkName: "monitoreo" */ '@/views/monitoreo/index.vue'),
    meta: { requiresAuth: true, layout: 'default' }
  },
  {
    path: '/operacion/index',
    name: 'Operacion',
    component: () => import(/* webpackChunkName: "operacion" */ '@/views/operacion/index.vue'),
    meta: { requiresAuth: true, layout: 'default' }
  },
  {
    path: '/soporte/index',
    name: 'Soporte',
    component: () => import(/* webpackChunkName: "soporte" */ '@/views/soporte/index.vue'),
    meta: { requiresAuth: true, layout: 'default' }
  },
  {
    path: '/preferencias/index',
    name: 'Preferencias',
    component: () => import(/* webpackChunkName: "preferencias" */ '@/views/preferencias/index.vue'),
    meta: { requiresAuth: true, layout: 'default' }
  },
  {
    path: '/depurador/index',
    name: 'Depurador',
    component: () => import(/* webpackChunkName: "depurador" */ '@/views/depurador/index.vue'),
    meta: { requiresAuth: true, layout: 'default' }
  },
  {
    path: '/perfiles/index',
    name: 'Perfiles',
    component: () => import(/* webpackChunkName: "perfiles" */ '@/views/perfiles/index.vue'),
    meta: { requiresAuth: true, layout: 'default' }
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
