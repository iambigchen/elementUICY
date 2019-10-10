// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {col, row, container, header, main, footer, aside, icon} from 'element-cy'

Vue.config.productionTip = false

Vue.use(col)
Vue.use(row)
Vue.use(container)
Vue.use(header)
Vue.use(main)
Vue.use(footer)
Vue.use(aside)
Vue.use(icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
