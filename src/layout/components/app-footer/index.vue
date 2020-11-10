<template>
  <v-footer
    app
  >
    <v-spacer />
    <span class="font-weight-light copyright pr-15">
      &copy;
      {{ (new Date()).getFullYear() }}
      <a
        href="#"
        target="_blank"
      >Widefense</a>
    </span>
  </v-footer>
</template>
<style>
#core-footer {
  z-index: 0;
}
</style>