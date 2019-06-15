import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movies from '@/components/Movies'

Vue.use(Router)

let router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'DuangChan | Home'
      }
    },

    {
      path: '/movies',
      name: 'movies',
      component: Movies,
      meta: {
        title: 'DuangChan | Movies'
      }
    },

    /*
    {
      path: '/library',
      name: 'library',
      component: Library,
      meta: {
        title: 'DuangChan - Library',
        requiresAuth: true
      }
    },
    */

    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const loggedIn = localStorage.getItem('user')
    if (!loggedIn) {
      next({
        path: '/?start=login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      document.title = to.meta.title
      next()
    }
  } else {
    document.title = to.meta.title
    next()
  }
})

export default router
