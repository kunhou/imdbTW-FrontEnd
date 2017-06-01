import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

//載入頁面
import HomeView from '@/views/HomeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    }
  ]
})
