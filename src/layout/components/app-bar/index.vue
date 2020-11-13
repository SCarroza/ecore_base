<template>
  <v-app-bar
    absolute
    app
    color="primary"
    dark
    flat
    height="70"
    :src="bar_bg"
  >
    <v-btn
        text
        icon
        @click.stop="onClick"
      >
        <v-icon color="green">mdi-menu</v-icon>
    </v-btn>
    <!-- <h1 centered>
      Sistema
      {{ /* title */ }}
    </h1> -->
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="4"
        class="mt-4"
      >
        <h4>nombre_contexto</h4>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        class="text-center mt-4"
      >
        <h4>COMMAND & CONTROL SECURITY CENTER</h4>
      </v-col>
      <v-col
        cols="12"
        sm="4"
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
          Sebastián Carroza
        </v-btn>
        <v-btn
          class="ml-5"
          to="/login"
          icon
          x-large
        >
          <v-icon color="tertiary">
            mdi-power
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-img
          contain
          max-height="60"
          max-width="60"
          :src="image_wd"
          class="ml-15"
        ></v-img>
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
  /* Fix coming in v2.0.8 */
  #core-app-bar {
    width: auto;
  }

  #core-app-bar a {
    text-decoration: none;
  }
</style>

