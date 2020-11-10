<template>
  <v-navigation-drawer
    v-model="inputValue"
    app
    color="primary"
    dark
    width="220"
    :mini-variant="mobile"
    :permanent="mobile"
  >
    <v-list>
      <v-list-item class="px-2">
        <h1> Menú </h1>
        <v-spacer />
        <v-btn
          class="ma-2"
          text
          icon
          @click="this.appModule.toggleDrawer"
        >
          <v-icon>
            mdi-menu
          </v-icon>
        </v-btn>
      </v-list-item>
    </v-list>

    <v-divider class="mx-3 mb-3" />

    <v-list nav>
      <!-- Bug in Vuetify for first child of v-list not receiving proper border-radius -->
      <div />

      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        active-class="primary white--text"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-title v-text="link.text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
// import Vue from 'vue'
// import Component from 'vue-class-component'
// import { mapState , mapActions } from 'vuex'
import { Component, Prop, Mixins } from 'vue-property-decorator'
import { getModule } from 'vuex-module-decorators'
import AppModule from '@/store/modules/app'
import { Utils } from '@/mixins/utils'
// 

@Component({
    name: 'AppDrawer'
})
export default class extends Mixins(Utils) {
  appModule = getModule(AppModule, this.$store)
  @Prop({ default: false }) opened: boolean | undefined
  imageProfile = require('@/assets/profile.jpeg')
  avatar = ''
  links = [
    {
      to: '/dashboard',
      icon: 'mdi-view-dashboard',
      text: 'Inicio'
    },
    {
      to: '/caja/index',
      icon: 'mdi-cash-register',
      text: 'Caja'
    },
    {
      to: '/comandas/index',
      icon: 'mdi-book-open-page-variant',
      text: 'Comandas'
    },
    {
      to: '/cuadrar-caja/index',
      icon: 'mdi-clipboard-list',
      text: 'Cuadrar Caja'
    },
    
  ]
  mobile = false
  size =  0
  sizeMobile = 42
  sizeDesktop = 70

  get inputValue () {
    return this.appModule.drawer
  }

  set inputValue(val: boolean) {
    this.appModule.setDrawer(val)
  }

  mounted() {
    this.reponsive()
    // console.log(this.isMobile())
    this.detectMobile()
    window.addEventListener('resize', this.detectMobile)
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.detectMobile)
  }

  reponsive () {
    if (window.innerWidth < 991) {
      this.inputValue = false
    } else {
      this.inputValue = true
    }
  }

  /* isMobile() {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      this.mobile = true
      this.size = this.sizeMobile
    } else {
      this.mobile = false
      this.size = this.sizeDesktop
    }
  } */
    detectMobile() {
      if(this.isMobile()) {
        this.mobile = true
        this.size = this.sizeMobile
      } else {
        this.mobile = false
        this.size = this.sizeDesktop
      }
    }


}

</script>