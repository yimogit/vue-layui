import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App'
import router from './router'
import YmHeader from './components/YmHeader'
Vue.component('ym-header',YmHeader)

import './assets/css/style.css'
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')