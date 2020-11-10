<template>
  <div>
    <v-btn v-on:click="decrement">-</v-btn>
    {{ count }}
    <v-btn v-on:click="increment">+</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";


// Define the component in class-style
@Component
export default class Counter extends Vue {
  // Class properties will be component data
  count = 0

  // Methods will be component methods
  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
</script>