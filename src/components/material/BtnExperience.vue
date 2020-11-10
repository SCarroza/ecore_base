<template>
  <v-menu 
    top offset-y
    origin="bottom left"
    transition="fab-transition"
    :close-on-content-click="false"
    v-model="menu"
  >
  <template v-slot:activator="{ on, attrs }">
      <v-btn
        :color="definition.coloriconfather"
        v-bind="attrs"
        v-on="on"
        text
        icon
        x-large
        outlined
        @click="intervalo"
      >
      <v-icon dark>{{ definition.iconfather }}</v-icon>
    </v-btn>
  </template>

  <v-card>
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon :color="definition.coloriconchild">{{ definition.iconchild }}</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ definition.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ definition.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="menu = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-container>
        <v-progress-linear
          v-model="data"
          height="25"
          :color="definition.colorprogressbar"
          buffer-value="0"
          stream
          striped
        >
          <strong>{{ Math.ceil(data) }}%</strong>
        </v-progress-linear>
        <p class="mt-2" v-for="data in definition.data" :key="data.id">
          <span class="font-weight-black font-italic">{{ data.year }}</span> {{ data.text }}
        </p>
      </v-container>
      
    </v-list>
  </v-card>
</v-menu>
</template>

<script lang="ts">
//Todo: Crear una validación cuando no se traiga la data en el prop
import { Component, Mixins, Prop } from 'vue-property-decorator'
import { Utils } from '@/mixins/utils'
import { ButtonExperience } from '@/utils/interfaces'

@Component
export default class ContactButton extends Mixins(Utils) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Prop(Object) definition: ButtonExperience | any
  menu = false
  data = 0
  interval = 0
  numInterval = 6

  mounted() {
    // console.log(this.isOdd(2))
  }

  intervalo () {
    this.data = 0
    clearInterval(this.interval)
    this.interval = setInterval(() => {
      const aux = this.data + this.numInterval
      if (this.data === this.definition.porcentage) {
        clearInterval(this.interval)
      }
      if (aux > this.definition.porcentage) {
        this.data = this.definition.porcentage
        clearInterval(this.interval)
      }
      if (this.data < this.definition.porcentage) {
        this.data += this.numInterval
      }
    }, 100)
  }
}

</script>