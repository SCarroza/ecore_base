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
