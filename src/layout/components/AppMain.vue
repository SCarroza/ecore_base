<template>
   <v-main>
      <v-container fluid>
        <v-fab-transition mode="out-in">
        <router-view :key="key"></router-view>
      </v-fab-transition>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AppMain'
})
export default class extends Vue {

  get key() {
    return this.$route.fullPath
  }
}
</script>
