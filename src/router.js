import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/home/index.vue'
import Films from './views/home/films.vue'
import Cinemas from './views/home/cinemas.vue'
import Center from './views/home/center.vue'

import Login from './views/login/index'
import Money from './views/money/index'
import FilmInfo from './views/film/index'
import City from './views/city/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'films',
          component: Films
        },
        {
          path: 'center',
          component: Center
        },
        {
          path: 'cinemas',
          component: Cinemas
        },
        {
          path: '',
          component: Films
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/money',
      component: Money
    },
    {
      path: '/film/:id',
      component: FilmInfo
    },
    {
      path: '/city',
      component: City
    }
  ]
})

export default router
