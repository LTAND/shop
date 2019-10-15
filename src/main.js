import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'amfe-flexible/index.js'  // rem h5 适配
import Vant from 'vant';
import 'vant/lib/index.css';

import './styles/index.scss' /* 引入样式 */

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
