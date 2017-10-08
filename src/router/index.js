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
      path: '/store',
      name: 'index',
      component: Index
    },{
      path: '/store/list',
      name: 'list',
      component: proList
    },{
      path: '/store/detail',
      name: 'detail',
      component: detail
    },{
      path: '*',
      name: 'home',
      component: Index
    }
  ]
})
