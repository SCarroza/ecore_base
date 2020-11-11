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
    path: '/accesos',
    name: 'Acessos',
    component: Layout,
    redirect: '/accesos/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "accesos" */ '@/views/accesos/index.vue'),
        name: 'Index Accesos',
        meta: {
          title: 'accesos',
          icon: 'accesos',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/actualizacion',
    name: 'Actualizacion',
    component: Layout,
    redirect: '/actualizacion/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "actualizacion" */ '@/views/actualizacion/index.vue'),
        name: 'Index actualizacion',
        meta: {
          title: 'actualizacion',
          icon: 'actualizacion',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/configurador',
    name: 'Configurador',
    component: Layout,
    redirect: '/configurador/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "configurador" */ '@/views/configurador/index.vue'),
        name: 'Index configurador',
        meta: {
          title: 'configurador',
          icon: 'configurador',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/casos',
    name: 'Casos',
    component: Layout,
    redirect: '/casos/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "casos" */ '@/views/casos/index.vue'),
        name: 'Index casos',
        meta: {
          title: 'casos',
          icon: 'casos',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/monitoreo',
    name: 'Monitoreo',
    component: Layout,
    redirect: '/monitoreo/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "monitoreo" */ '@/views/monitoreo/index.vue'),
        name: 'Index monitoreo',
        meta: {
          title: 'monitoreo',
          icon: 'monitoreo',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/operacion',
    name: 'Operacion',
    component: Layout,
    redirect: '/operacion/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "operacion" */ '@/views/operacion/index.vue'),
        name: 'Index operacion',
        meta: {
          title: 'operacion',
          icon: 'operacion',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/soporte',
    name: 'Soporte',
    component: Layout,
    redirect: '/soporte/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "soporte" */ '@/views/soporte/index.vue'),
        name: 'Index soporte',
        meta: {
          title: 'soporte',
          icon: 'soporte',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/preferencias',
    name: 'Preferencias',
    component: Layout,
    redirect: '/preferencias/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "preferencias" */ '@/views/preferencias/index.vue'),
        name: 'Index preferencias',
        meta: {
          title: 'preferencias',
          icon: 'preferencias',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/depurador',
    name: 'Depurador',
    component: Layout,
    redirect: '/depurador/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "depurador" */ '@/views/depurador/index.vue'),
        name: 'Index depurador',
        meta: {
          title: 'depurador',
          icon: 'depurador',
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/perfiles',
    name: 'Perfiles',
    component: Layout,
    redirect: '/perfiles/index',
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "perfiles" */ '@/views/perfiles/index.vue'),
        name: 'Index perfiles',
        meta: {
          title: 'perfiles',
          icon: 'perfiles',
          requiresAuth: true
        }
      }
    ]
  }

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
