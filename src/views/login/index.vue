<template>
  <v-container
    class="container fill-height"
    fluid
  >
    <v-row
      class="justify-center"
    >
      <v-col cols="auto">
        <v-img
          class="logo"
          contain
          max-width="400"
          lazy-src='@/assets/logo_ethalamus.png'
          :src="image_ethalamus"
        ></v-img>

        <!-- Componente Dinámico --> 
        <component :is="loginInstance.currentComponent"/>
        <a class="link d-flex justify-center" @click="goForgetPassword">¿Olvidó su contraseña?</a>
        <v-flex text-center class="login-icons">
            <v-icon color="grey">mdi-chart-bar-stacked</v-icon>
            <v-icon color="grey">mdi-shield-half-full</v-icon>
            <v-icon color="grey">mdi-file-document-outline</v-icon> 
        </v-flex>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
//Todo: Crear una validación cuando no se traiga la data en el prop
import { Component, Mixins } from 'vue-property-decorator'
import { Utils } from '@/mixins/utils'

//get Store
import { getModule } from 'vuex-module-decorators'
import LoginModule from '@/store/modules/login'

@Component
export default class ContactButton extends Mixins(Utils) {
    loginInstance = getModule(LoginModule, this.$store)
    image_ethalamus =  require('@/assets/logo_ethalamus.png');
    image_wd =  require('@/assets/logo_widefense.png');

    mounted() {
        //
    }

    goForgetPassword () {
        this.loginInstance.setComponent('login-forget-password')
    }
}

</script>

<style lang="css">
html { overflow-y: auto }
</style>
