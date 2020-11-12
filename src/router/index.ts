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
    meta: { layout: 'blank'},
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
  },
  {
    path: '/accesos/index',
    name: 'Acessos',
    component: () => import(/* webpackChunkName: "accesos" */ '@/views/accesos/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/actualizador/index',
    name: 'Actualizador',
    component: () => import(/* webpackChunkName: "actualizador" */ '@/views/actualizador/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/configurador/index',
    name: 'Configurador',
    component: () => import(/* webpackChunkName: "configurador" */ '@/views/configurador/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/casos/index',
    name: 'Casos',
    component: () => import(/* webpackChunkName: "casos" */ '@/views/casos/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/casos/abiertos',
    name: 'Abiertos',
    component: () => import(/* webpackChunkName: "abiertos" */ '@/views/casos/abiertos.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/casos/globales',
    name: 'Globales',
    component: () => import(/* webpackChunkName: "globales" */ '@/views/casos/globales.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/casos/reportes',
    name: 'Reportes',
    component: () => import(/* webpackChunkName: "reportes" */ '@/views/casos/reportes.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/monitoreo/emergencias',
    name: 'Emergencias',
    component: () => import(/* webpackChunkName: "emergencias" */ '@/views/monitoreo/emergencias.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/monitoreo/alertas',
    name: 'Alertas',
    component: () => import(/* webpackChunkName: "alertas" */ '@/views/monitoreo/alertas.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/monitoreo/incidentes',
    name: 'Incidentes',
    component: () => import(/* webpackChunkName: "incidentes" */ '@/views/monitoreo/incidentes.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/operacion/index',
    name: 'Operacion',
    component: () => import(/* webpackChunkName: "operacion" */ '@/views/operacion/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/soporte/index',
    name: 'Soporte',
    component: () => import(/* webpackChunkName: "soporte" */ '@/views/soporte/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/preferencias/index',
    name: 'Preferencias',
    component: () => import(/* webpackChunkName: "preferencias" */ '@/views/preferencias/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/depurador/index',
    name: 'Depurador',
    component: () => import(/* webpackChunkName: "depurador" */ '@/views/depurador/index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/perfiles/index',
    name: 'Perfiles',
    component: () => import(/* webpackChunkName: "perfiles" */ '@/views/perfiles/index.vue'),
    meta: { requiresAuth: true }
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
