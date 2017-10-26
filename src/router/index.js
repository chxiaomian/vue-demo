import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index'
import Detail from '@/views/detail'
import Center from '@/views/center'
import Search from '@/views/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '0',
      component: Index
    },
    {
      path: '/index',
      name: '1',
      component: Index
    },
    {
      path:'/search',
      name:'2',
      component:Search
    },
    {
      path: '/center',
      name: '3',
      component: Center
    },
  ]
})
