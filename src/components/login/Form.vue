<template>
    <!-- <div>
        <v-card-text>
            <v-form>
                <v-text-field
                    v-model="userName"
                    label="Nombre de Usuario"
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
            <v-btn  color="success" block @click="login">Iniciar Sesión</v-btn>
        </v-card-actions>
        <v-flex text-center>
            <v-btn text class="text-decoration-underline" @click="goForgetPassword">
                Olvidé mi contraseña
            </v-btn>
        </v-flex>
    </div> -->
    <form>
          <v-text-field
            v-model="userName"
            label="Usuario"
            outlined
            background-color="secondary"
            clearable
            required
            dark
          ></v-text-field><!-- autofocus if needed -->
          <v-text-field
            v-model="userPass"
            label="Contraseña"
            type="password"
            background-color="secondary"
            outlined
            dark
            clearable
            required
          ></v-text-field>
          <v-btn
            block
            depressed
            x-large
            color="primary"
            type="submit"
            class="text-capitalize"
          >Ingresar</v-btn>
        </form>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { Utils } from '@/mixins/utils'
import axios from 'axios'

//get Store
import { getModule } from 'vuex-module-decorators'
import LoginModule from '@/store/modules/login'

@Component
export default class LoginForm extends Mixins(Utils) {
    loginInstance = getModule(LoginModule, this.$store)
    userName = ''
    userPass = ''


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

    goForgetPassword () {
        this.loginInstance.setComponent('login-forget-password')
    }


}

</script>