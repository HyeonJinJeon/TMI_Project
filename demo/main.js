import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import Notify from 'mdbvue/lib/components/Notify'
import LoadScript from 'vue-plugin-load-script'

Vue.use(Notify)
Vue.use(LoadScript)

Vue.config.productionTip = false
Vue.config.keyCodes = {
  "page-up": 33,
  "page-down": 34,
  end: 35,
  home: 36
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
