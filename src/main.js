// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueDrawer from '../package/index'
import '../package/src/index.css'

Vue.component(VueDrawer.name, VueDrawer)
Vue.use(ElementUi, { size: 'small' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
