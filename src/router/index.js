import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import repoDetail from '@/components/repoDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/repo/:username',
      name: 'repoDetail',
      component: repoDetail
    }
  ]
})
