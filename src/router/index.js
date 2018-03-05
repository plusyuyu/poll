import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/pages/users'
import Department from '@/pages/settings/department.vue'
import Clazz from '@/pages/settings/clazz.vue'
import Teacher from '@/pages/settings/teacher.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'Users',
      component: Users
    },{
    	path: '/settings/department',
      name: 'Department',
      component: Department
    },{
      path: '/settings/clazz',
      name: 'Clazz',
      component: Clazz
    },{
      path: '/settings/teacher',
      name: 'Teacher',
      component: Teacher
    }
  ]
})
