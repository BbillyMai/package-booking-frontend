import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main.vue'
import Add from './components/Add'
import Book from './components/Book'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
  ]
})
