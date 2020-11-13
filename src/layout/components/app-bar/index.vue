<template>
  <v-app-bar
    absolute
    app
    color="primary"
    dark
    flat
    height="64"
    :src="bar_bg"
  >
      <v-row wrap align="center">
        <v-col cols="2" @click.stop="onClick" class="btn-menu-navbar">
          <v-btn text>
            <v-icon color="green">mdi-menu</v-icon>
            <h4 class="pl-2 d-md-flex d-none">nombre_contexto</h4>
          </v-btn>
        </v-col>
        <v-col
          cols="3"
          md="6"
          class="text-center"
        >
          <h4 class="d-none d-md-block">COMMAND & CONTROL SECURITY CENTER</h4>
          <h4 class="d-md-none d-block">C & C</h4>
        </v-col>
        <v-col
          cols="2"
          class="text-end"
        >
          <v-btn
            tile
            color="transparent"
            elevation="0"
          >
            <v-icon left>
              mdi-account
            </v-icon>
            <p class="d-none d-lg-flex mb-0"> 
              Sebastián Carroza
            </p>
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-btn
            class="ml-5"
            to="/login"
            icon
          >

            <v-icon color="tertiary">
              mdi-power
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="1">
          <v-img
            contain
            height="60"
            width="60"
            :src="image_wd"
            class="d-none d-md-flex mx-auto"

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
  title = ''
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

<style>
  .btn-menu-navbar :hover{
    background-color: rgba(0,0,0,0.6);
  }
  /* Fix coming in v2.0.8 */
  #core-app-bar {
    width: auto;
  }

  #core-app-bar a {
    text-decoration: none;
  }
</style>

