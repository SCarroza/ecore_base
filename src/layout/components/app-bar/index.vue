<template>
  <v-app-bar
    app
    :src="bar_bg"
    height="63"
    dark
  >
    <v-row align="center">
      <v-col 
        cols="2" md="3"
        @click.stop="onClick"
        class="nav-menu dark-hover d-flex"
      >
        <v-icon color="green" size="32" Left>mdi-menu</v-icon>
        <h4 class="pl-2 d-md-flex d-none align-self-center">nombre_contexto</h4>
      </v-col>
      <v-col auto class="text-center">
        <h4 v-text="navTitle" class="d-none d-md-block"></h4>
        <h4 class="d-md-none d-block">C&C SC</h4>
      </v-col>
      <v-col  
        cols="3" 
        sm="1" 
        lg="2"
        class="dark-hover px-5 nav-user d-flex"
      >
        <v-icon left size="28">
          mdi-account
        </v-icon>
        <p class="d-none d-lg-flex mb-0" v-text="user"></p>
      </v-col>
      <v-col 
        cols="3" 
        sm="1" 
        class="dark-hover nav-login text-center" 
      >
        <a href="/login">
          <v-icon size="28" color="tertiary">
            mdi-power
          </v-icon>
        </a>
      </v-col>
      <v-col cols="1" class="d-none d-md-flex">
        <v-img
            contain
            height="56"
            width="56"
            :src="image_wd"
            class="mx-auto"

          ></v-img>
      </v-col>

    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'
// import { mapState , mapActions } from 'vuex'
import { Vue, Component, Watch  } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import AppModule from '@/store/modules/app'
// import DigitalClockVue, { DigitalNumber } from 'digital-clock-vue'

// Vue.component(DigitalClockVue, DigitalNumber)

interface Route { name: string }
@Component({
  name: 'AppBar'
})
export default class extends Vue {
  appModule = getModule(AppModule, this.$store)
  responsive = false
  navTitle = 'COMMAND & CONTROL SECURITY CENTER'
  title = ''
  user = 'Sebastián Carroza'         
  notifications = ''
  image_wd =  require('@/assets/logo_widefense.png');
  bar_bg =  require('@/assets/bar_bg.png');

  @Watch('$route', { immediate: true, deep: true })
  onChildChanged(val: Route) {
    this.title = val.name
  }

  mounted() {
    //
  }

  beforeDestroy() {
    //
  }

  onClick () {
    this.appModule.setDrawer(!this.appModule.drawer)
  }
}


</script>

<style scoped>
.nav-login a {
  text-decoration: none;
}
.nav-login, .nav-user {
  padding: 16px 0;
}
.nav-menu {
  padding-bottom: 16px;
  padding-left: 25px;
}
.dark-hover:hover {
  background: linear-gradient(#0057a3 , #002642);
  box-shadow: inset 0 0 4px rgba(0, 107, 187, 0.5);
}
</style>
<style>
.v-toolbar__content {
  padding: 0;
}
/* Fix coming in v2.0.8 */
#core-app-bar {
  width: auto;
}

#core-app-bar a {
  text-decoration: none;
}
</style>

