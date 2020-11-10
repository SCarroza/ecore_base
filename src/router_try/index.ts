import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
// Routes
import paths from './paths'
//Import Store
import store from '@/store'

interface Route {
  path: string;
  view?: string;
  name?: string;
  redirect?: string;
  meta?: {
    requiresAuth?: boolean;
  };
}

Vue.use(VueRouter)

function route ( route: Route ) {
  return {
    name: route.name || route.view,
    path: route.path,
    redirect: route.redirect,
    component:  () => import( `@/views/${route.view}.vue`),
    meta: {
      requiresAuth: route.meta?.requiresAuth
    }
  }
}


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: paths.map(path => route(path)),
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
