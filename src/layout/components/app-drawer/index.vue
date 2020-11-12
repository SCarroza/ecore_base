<template>
  <v-navigation-drawer
    v-model="inputValue"
    app
    color="primary"
    dark
    width="320"
    :src="bar_bg"
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

    <v-list dense>
      <v-list-item
        v-for="(link, i) in links"
        :key="i"
        :to= link.to
        active-class="primary white--text"
        >
          <v-list-group
            v-if="link.subItems"
            active-class="primary white--text"
            :prepend-icon="link.icon"
          >
            <template v-slot:activator>
              <v-list-item-content class="matias-prueba">
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="child in link.subItems"
              :key="child.title"
              :to="child.link"
              active-class="primary white--text"
            >

              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item v-else>
            <v-icon v-text="link.icon"></v-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.text" class="pl-8"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
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
  bar_bg =  require('@/assets/bar_bg.png');
  avatar = ''
  links = [
    {
      to : '/accesos/index',
      icon: 'mdi-monitor',
      text: 'accesos'
    },
    {
      to: '/actualizacion/index',
      icon: 'mdi-source-branch',
      text: 'actualizacion'
    },
    {
      to: '/configurador/index',
      icon: 'mdi-cog',
      text: 'configurador'
    },
    {
      icon: 'mdi-ticket-confirmation',
      text: 'casos',
      subItems: [{title: 'reportes',
                  link: '/casos/index'},
                 {title: 'abiertos',
                  link: '/casos/index'},
                 {title: 'globales',
                  link: '/casos/index'}
                    ]
    },
    {
      icon: 'mdi-earth',
      text: 'monitoreo',
      subItems: [{title: 'alertas',
                  link: '/monitoreo/index'},
                 {title: 'emergencias',
                  link: '/monitoreo/index'},
                 {title: 'incidentes',
                  link: '/monitoreo/index'}
                    ]
    },
    {
      to: '/operacion/index',
      icon: 'mdi-file-excel-outline',
      text: 'operacion'
    },
    {
      to: '/soporte/index',
      icon: 'mdi-cloud',
      text: 'soporte'
    },
    {
      to: '/preferencias/index',
      icon: 'mdi-eye',
      text: 'preferencias'
    },
    {
      to: '/depurador/index',
      icon: 'mdi-keyboard',
      text: 'depurador'
    },
    {
      to: '/perfiles/index',
      icon: 'mdi-account-group',
      text: 'perfiles'
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
<style scoped>
* {
  text-transform: uppercase;
}
.v-list-item {
  padding: 0;
}
.v-list-group {
  padding: 0;
  width: 100%;
}
.v-list-item .v-list-item {
  padding: 0 32px;
}
</style>
<style>
.v-list-group .v-icon {
  padding-left: 16px;
}
</style>