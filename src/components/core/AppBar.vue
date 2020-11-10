<template>
  <v-app-bar
    absolute
    app
    color="primary"
    dark
    flat
    height="70"
  >
    <v-btn
        v-if="!this.appModule.drawer"
        text
        icon
        @click.stop="onClick"
      >
        <v-icon>mdi-menu</v-icon>
    </v-btn>
    <h1>
      Sistema
      {{ /* title */ }}
    </h1>

    <v-spacer />
    <v-toolbar-items v-if="$route.path != '/login'">
      <v-row
        align="center"
        class="mx-0"
      >
        <!-- <v-text-field
          class="mr-4 purple-input"
          color="purple"
          label="Search..."
          hide-details
        /> -->
        <material-clock />
        <material-date />
        <h2 class="pr-2 pl-2">
          Nombre_Usuario
        </h2>
        <!-- <v-btn
          icon
          to="/"
        >
          <v-icon color="tertiary">
            mdi-view-dashboard
          </v-icon>
        </v-btn> -->
        <!-- <v-menu
          bottom
          left
          offset-y
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              class="toolbar-items"
              icon
              to="/notifications"
              v-bind="attrs"
              v-on="on"
            >
              <v-badge
                color="error"
                overlap
              >
                <template slot="badge">
                  {{ notifications.length }}
                </template>
                <v-icon color="tertiary">
                  mdi-bell
                </v-icon>
              </v-badge>
            </v-btn>
          </template>

          <v-card>
            <v-list dense>
              <v-list-item
                v-for="notification in notifications"
                :key="notification"
                @click="onClick"
              >
                <v-list-item-title v-text="notification" />
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu> -->

        <v-btn
          to="/user-profile"
          icon
        >
          <v-icon color="tertiary">
            mdi-exit-to-app
          </v-icon>
        </v-btn>
      </v-row>
    </v-toolbar-items> 
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
@Component
export default class AppBar extends Vue {
  appModule = getModule(AppModule, this.$store)
  responsive = false
  title = ''
  notifications = ''

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