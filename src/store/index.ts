import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from '@/store/modules/user'
import MyStoreModule from '@/store/modules/MyStoreModule'
import CarModule from '@/store/modules/car'
import AppModule from '@/store/modules/app'
import SessionModule from '@/store/modules/session'
import LoginModule from '@/store/modules/login'

 Vue.use(Vuex)

/*export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    userModule
  }
}) */


export default new Vuex.Store({
  modules: {
    MyStoreModule,
    UserModule,
    CarModule,
    AppModule,
    SessionModule,
    LoginModule
  }
})

