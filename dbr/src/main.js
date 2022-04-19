import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {Button,Input} from 'element-ui';



Vue.config.productionTip = false
// 引入axios并挂载到Vue实例
Vue.prototype.$axios = axios
Vue.use(ElementUI);
Vue.component(Button.name,Button);
Vue.component(Input.name,Input);


axios.defaults.baseURL='http://localhost:8000';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
