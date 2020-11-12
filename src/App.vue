<template>
  <v-app :class="isLogin ? 'fondo' : 'exdi2'">
    <!-- <core-drawer v-if="$route.path != '/login'"/>
    <core-app-bar />
    <core-view />
    <core-footer /> -->
    <!-- <router-view :key="$route.path"/> -->
    <component :is="layout">
      <router-view :key="$route.path"/>
    </component>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import carModule from '@/store/modules/car'
import { getModule } from 'vuex-module-decorators'
import { Car } from '@/store/models'
import 'moment/locale/es';
// import user from '@/store/modules/user'
// import MyStoreModule from '@/store/modules/MyStoreModule'

@Component
export default class App extends Vue {
  default_layout = "default"
  get layout () {
    return (this.$route.meta.layout || this.default_layout) + '-layout';
  }
  carModuleInstance = getModule(carModule, this.$store)
  moment = require('moment');
  isLogin = false;
  auto1: Car  = {
      'wheels' : 4,
      'doors' : 4,
      'mark': 'Kia',
      'model': 'Cerato5',
      'type': 'Mecánico',
      'fuel': 'Bencina'
    }
  public created () {
    this.$watch(
      () => this.$route,
      (route) => {
        this.isLogin = route.name === "Login"
      });
    // console.log(this.moment().format('hh:mm:ssA'))
    // console.log(user.user)
    // const MyModuleInstance = getModule(MyStoreModule, this.$store);
    // const UserModule = getModule(user, this.$store);
    // MyModuleInstance.setTest('random')
    // console.log(MyModuleInstance.test)
    // UserModule.setUser({email: 'hola', token: 'test', username: 'test'})
    // console.log(UserModule.user)

    // const users = userModule.user
    // console.log(users)
    // exdi.test({email: 'hola', token: 'test', username: 'test'})
    // console.log(exdi.user)
    // const UserModule = getModule(user, this.$store);
    // UserModule.login({
    //  email: 'exdi',
    //  password: 'exdi'
    // })
    // console.log(UserModule.testName)

  }

  public setAuto(){
    this.carModuleInstance.setCar(this.auto1)
    this.carModuleInstance.fetchAll()
    console.log(this.carModuleInstance.getCar)
    console.log('Las ruedas del auto son: '+ this.carModuleInstance.getWheels)
  }
}
</script>

<style lang="css" scoped>
.fondo {background: radial-gradient(#3b6991, #000000) !important;}
</style>