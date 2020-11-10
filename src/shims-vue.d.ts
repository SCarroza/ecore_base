declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

/*declare module 'vue/types/vue' {
  import VueIziToast from 'vue-izitoast/src/types';
  interface Vue {
    $VueIzitoast: typeof VueIziToast; 
  }
  interface VueConstructor {
    $VueIzitoast: 'vue-izitoast/src/types';
  }
  export default VueIziToast
}*/

/* declare module 'vue/types/vue' {
  // Global properties can be declared
  // on the `VueConstructor` interface
  /*interface VueConstructor {
    $izitoast: 'vue-izitoast/types';
  }
  import VueIziToast from 'vue-izitoast/src/types';
  export default VueIziToast
}

declare module 'izitoast' {
  import izitoast  from 'vue-izitoast/src/types'
  console.log(izitoast)
  import { PluginFunction } from "vue";
  export const install: PluginFunction<{}>

  module "vue/types/vue" {
    interface Vue {
      $VueIzitoast: typeof izitoast;
    }
  }
} */