<template>
    <v-container fluid>
        <v-col cols="12">
            <v-row
            align="center"
            justify="center"
            >
                <v-card class="mt-5" color="rgb(0, 0, 0, 0.2)" dark>
                    <v-img
                        class="pt-2"
                        contain
                        height="250"
                        :src="image_ethalamus"
                    ></v-img>
                <!--<v-toolbar
                    color="primary"
                    dark
                    flat
                >
                    <v-toolbar-title>Iniciar Sesión</v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar> -->
                <!-- <login-form />
                <login-forget-password /> -->

                <!-- Componente Dinámico --> 
                <component :is="loginInstance.currentComponent"/>

                <v-img
                    contain
                    height="75"
                    :src="image_wd"
                    class="mt-2 mb-2"
                />
                <v-flex text-center>
                    <v-btn
                        icon
                        color="grey"
                    >
                        <v-icon>mdi-shield-half-full</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        color="grey"
                    >
                        <v-icon>mdi-chart-bar-stacked</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        color="grey"
                    >
                        <v-icon>mdi-ticket-confirmation</v-icon>
                    </v-btn>
                    <v-btn
                        icon
                        color="grey"
                    >
                        <v-icon>mdi-file-document-outline</v-icon>
                    </v-btn>
                
                </v-flex>
                </v-card>
            </v-row>
        </v-col>
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
}

</script>

<style lang="css">
html { overflow-y: auto }
</style>
