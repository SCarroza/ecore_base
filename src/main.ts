import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from '@/router'
import store from './store'
import vuetify from './plugins/vuetify';
import { sync } from 'vuex-router-sync'
import './plugins'
// Components
import './components'
//Layout
import Layout from '@/layout/index.vue'
//Blank Layout
import BlankLayout from '@/layout-blank/AppMain.vue'
Vue.component('default-layout', Layout)
Vue.component('blank-layout', BlankLayout )

sync(store, router)

Vue.config.productionTip = false

declare module 'vue/types/vue' {
  interface VueConstructor {
    // eslint-disable-next-line
    http: any;
  }
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
