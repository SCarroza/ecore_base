<template>
  <v-navigation-drawer
    v-model="inputValue"
    app
    color="primary"
    dark
    width="320"
    :src="bar_bg"
    absolute
    temporary
  >
    <v-list class="py-0">
      <v-list-item class="px-2" style="height: 64px;" @click="this.appModule.toggleDrawer">
        <v-list-item-icon>
          <v-icon color="green" size="32">mdi-menu</v-icon>
        </v-list-item-icon>
  
        <v-list-item-content>
          <v-list-item-title>menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mx-3 mt-1 mb-3" />
    <v-list>
      <div  v-for="(item, i) in items"
        :key="item.title">
        <div v-if="item.items">
          <!-- TIENE CHILD -->
            <v-list-group
              :key="i"
              v-model="item.active"
              :prepend-icon="item.icon"
              no-action
              active-class="primary white--text"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in item.items"
                :key="child.title"
                link
                :to="child.to"
                active-class="primary white--text"
              >
                <v-list-item-icon>
                    <v-icon>{{ child.icon}}</v-icon>
                  </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
        </div>
        <!-- NO TIENE CHILD -->
        <div v-else>
          <v-list-item
            :key="i"
            :to="item.to"
            active-class="primary white--text"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>

            <v-list-item-title v-text="item.title" />
          </v-list-item>
        </div>

      </div>
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
  mobile = false
  size =  0
  sizeMobile = 42
  sizeDesktop = 70
  items= [
    {
      title: 'accesos',
      icon: 'mdi-monitor',
      to: '/accesos/index'
    },
    {
      title: 'actualizador',
      icon: 'mdi-source-branch',
      to: '/actualizador/index'
    },
    {
      title: 'configurador',
      icon: 'mdi-cog',
      to: '/configurador/index'
    },
    {
      title: 'CASOS',
      icon: 'mdi-ticket-confirmation',
      items: [
        { title: 'Reportes', icon: 'mdi-file-document-outline', to:'/casos/reportes' },
        { title: 'Abiertos', icon: 'mdi-chart-donut', to:'/casos/abiertos' },
        { title: 'Globales', icon: 'mdi-chart-donut-variant', to:'/casos/globales' }
      ]
    },
    {
      title: 'MONITOREO',
      icon: 'mdi-earth',
      items: [
        { title: 'Alertas', icon: 'mdi-alert', to:'/monitoreo/alertas' },
        { title: 'Emergencias', icon: 'mdi-alert-circle', to:'/monitoreo/emergencias' },
        { title: 'Incidentes', icon: 'mdi-alert-octagon', to:'/monitoreo/incidentes' }
      ]
    },
    {
      title: 'operacion',
      to: '/operacion/index',
      icon: 'mdi-file-excel-outline'
    },
    {
      title: 'soporte',
      to: '/soporte/index',
      icon: 'mdi-cloud'
    },
    {
      title: 'preferencias',
      to: '/preferencias/index',
      icon: 'mdi-eye'
    },
    {
      title: 'depurador',
      to: '/depurador/index',
      icon: 'mdi-keyboard',
    },
    {
      title: 'perfiles',
      to: '/perfiles/index',
      icon: 'mdi-account-group',
    }
  ]

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
      // this.inputValue = false
    } else {
      //this.inputValue = true
      // this.inputValue = false
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
</style>