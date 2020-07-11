import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Create',
      component: () => import('./views/Create.vue')
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('./views/List.vue')
    },
    {
      path: '/task/:id',
      name: 'Task',
      component: () => import('./views/Task.vue')
    }
  ]
})