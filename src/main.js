import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './styles.css'

import { i18n } from '../src/locales/i18n.js';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Ícones gratuitos
import { faLaravel, faPhp, faVuejs, faNodeJs, faReact, faDocker, faGitAlt, faJs } from '@fortawesome/free-brands-svg-icons'
import { faServer, faCubes } from '@fortawesome/free-solid-svg-icons'

// Adiciona os ícones à library
library.add(faLaravel, faPhp, faVuejs, faNodeJs, faReact, faDocker, faGitAlt, faJs, faServer, faCubes)

// Registra o componente globalmente
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
    i18n,
  render: h => h(App),
}).$mount('#app')
