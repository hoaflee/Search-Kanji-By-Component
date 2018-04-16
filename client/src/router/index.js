import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Icons from '@/components/Icons'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Home
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons
    }
  ]
})
