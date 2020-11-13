// https://vuetifyjs.com/en/
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from '@/lang/es'
// Vuetify.config.silent = true
Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { es },
    current: 'es',
  },
});