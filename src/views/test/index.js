/*
 * @Author: your name
 * @Date: 2020-02-26 13:20:04
 * @LastEditTime: 2020-03-18 16:18:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \uu-i\src\views\test\index.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 自定义指令
import VueHot from 'v-hotkey'
import Clipboard from 'v-clipboard'
import RippleDirective from 'vue-ripple-directive'
import Vblur from 'v-blur'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueHot)
Vue.use(Clipboard)
Vue.use(Vblur)
Vue.directive('ripple', RippleDirective)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')