// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import faskClick from 'fastclick'
import 'styles/reset.css'
// 1像素边框
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false
faskClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App: App },
  template: '<App/>'
})

//路由就是根据网址的不同，返回不同的页面内容给用户

