import Vue from 'vue'
import Router from 'vue-router'

//載入頁面
import HomeView from '@/views/HomeView'
import MovieListView from '@/views/MovieListView'
import MovieThisWeekView from '@/views/MovieThisWeekView'
import RegisterView from '@/views/RegisterView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/movielist',
      name: 'MovieListView',
      component: MovieListView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '/moviethisweek',
      name: 'MovieThisWeekView',
      component: MovieThisWeekView
    }
  ]
})
