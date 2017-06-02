// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 載入boostrap
import BootstrapVue from 'bootstrap-vue';

/* 註冊所有組件為全域 */
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
