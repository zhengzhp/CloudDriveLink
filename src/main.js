import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'
import brands from '@fortawesome/fontawesome-free-brands'

import App from './App'

import '@/assets/style/reset.css'

fontawesome.library.add(solid,regular,brands)

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(ElementUI)

new Vue({
  render: h => h(App)
}).$mount('#app-box')