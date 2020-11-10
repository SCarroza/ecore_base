import Vue from 'vue'

// Lib imports
import axios from 'axios'

import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// eslint-disable-next-line no-undef
// axios.defaults.baseURL = constantes.APIURL