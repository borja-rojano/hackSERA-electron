import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'

//Bulma and Font-Awesome need to be installed with npm --save
import 'bulma/css/bulma.css'

/// This is new for font awesome
import fontawesome from '@fortawesome/fontawesome'



if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
