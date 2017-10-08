import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import proList from '@/components/proList'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/list',
      name: 'list',
      component: proList
    },{
      path: '/detail',
      name: 'detail',
      component: detail
    },{
      path: '*',
      name: 'index',
      component: Index
    }
  ]
})
