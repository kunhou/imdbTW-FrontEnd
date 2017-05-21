import Vue from 'vue'
//導入VueRouter
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import MainNavigation from './components/MainNavigation.vue'
import TrailersMain from './components/TrailersMain.vue'

Vue.use(ElementUI)
//應用VueRouter
Vue.use(VueRouter)

new Vue({
  el: '#main-nav',
  render: h => h(MainNavigation)
})

new Vue({
  el: '#trailers-main',
  render: h => h(TrailersMain)
})


// 路由
const NotFound = { template: '<p>Page not found</p>' }
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
const routes = {
  '/': Home,
  '/about': About,
  '/most_popular_movie': TrailersMain,
}
