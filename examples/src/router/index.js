import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/Container'
import Icon from '@/components/Icon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/container',
      name: 'HelloWorld',
      component: Container
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    }
  ]
})
