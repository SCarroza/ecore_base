<template>
  <v-menu 
    top offset-y
    origin="bottom right"
    transition="fab-transition"
    :close-on-content-click="false"
    v-model="menu"
  >
  <template v-slot:activator="{ on, attrs }">
      <v-btn
        fab
        dark
        fixed
        right
        bottom 
        :class="menu ? 'green' : 'primary'" 
        v-bind="attrs"
        v-on="on"
      >
      <v-icon dark v-if="menu">mdi-email-send</v-icon>
      <v-icon dark v-else>mdi-email</v-icon>
    </v-btn>
  </template>

  <v-card>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="imageProfile"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Formulario de Contacto</v-list-item-title>
          <v-list-item-subtitle>Con Sebastián Carroza</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon  @click="menu = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-container>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Nombre"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :counter="50"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-textarea
            v-model="body"
            :counter="255"
            label="Cuerpo"
            :rules="bodyRules"
            clearable
          ></v-textarea>
        </v-form>
      </v-container>
      
    </v-list>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" text @click="validate">Enviar</v-btn>
    </v-card-actions>
  </v-card>
</v-menu>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { Utils } from '@/mixins/utils'

@Component
export default class ContactButton extends Mixins(Utils) {
  imageProfile = require('@/assets/profile.jpeg')
  menu = false
  message = false
  hints = true
  valid = true
  name = ''
  nameRules = [
    (v: unknown ) => !!v || 'Name is required',
    (v: string ) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ]
  email = ''
  emailRules = [
    (v: unknown ) => !!v || 'E-mail is required',
    (v: string ) => (v && v.length <= 50) || 'Name must be less than 50 characters',
    (v: string ) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  ]
  body = ''
  bodyRules = [
    (v: unknown ) => !!v || 'Body is required',
    (v: string ) => (v && v.length <= 10) || 'Body must be less than 10 characters',
  ]

  validate () {
    // this.$refs.form.validate()
    (this.$refs.form as Vue & { validate: () => boolean }).validate()
  }
}

</script>