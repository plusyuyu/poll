import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/pages/users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
