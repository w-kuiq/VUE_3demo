import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import tabs from '@/components/tabs'
import shop from '@/components/shop'
import todoList from '@/components/todoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: tabs
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/todoList',
      name: 'todoList',
      component: todoList
    }
  ]
})
