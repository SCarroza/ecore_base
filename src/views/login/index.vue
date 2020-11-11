<template>
        <v-container fluid>
        <v-row class="pa-5 ma-5">
        <v-col cols="12">
            <v-row
            align="center"
            justify="center"
            class="pa-5 ma-5"
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
                <v-card-text>
                    <v-form>
                    <v-text-field
                        v-model="userName"
                        label="Nombre"
                        prepend-inner-icon="mdi-account"
                    ></v-text-field>
                    <v-text-field
                        v-model="userPass"
                        label="Contraseña"
                        type="password"
                        prepend-inner-icon="mdi-lock"
                    ></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  color="green" block @click="login">Iniciar Sesión</v-btn>
                </v-card-actions>
                <v-flex text-center>
                    <v-btn text class="text-decoration-underline">
                        Olvide mi contraseña
                    </v-btn>
                </v-flex>
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
        </v-row>
    </v-container>
</template>

<script lang="ts">
//Todo: Crear una validación cuando no se traiga la data en el prop
import { Component, Mixins } from 'vue-property-decorator'
import { Utils } from '@/mixins/utils'
import axios from 'axios'

@Component
export default class ContactButton extends Mixins(Utils) {
    userName = ''
    userPass = ''
    image_ethalamus =  require('@/assets/logo_ethalamus.png');
    image_wd =  require('@/assets/logo_widefense.png');

    mounted() {
        //
    }

    login() {
        axios.post('/api/', {
            userName: this.userName,
            userPass: this.userPass
        })
        .then( response => {
            console.log(response)
        })
        .catch( error => {
            console.log(error)
        })
    }


}

</script>

<style lang="css">
html { overflow-y: auto }
</style>