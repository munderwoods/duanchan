import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Movies from '@/components/Movies'
import News from '@/components/News'
import Library from '@/components/Library'
import MoviePage from '@/components/MoviePage'

Vue.use(Router)

let router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'DuangChan - Home'
      }
    },

    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'DuangChan - About'
      }
    },

    {
      path: '/movies',
      name: 'movies',
      component: Movies,
      meta: {
        title: 'DuangChan - Movies'
      }
    },

    {
      path: '/news',
      name: 'news',
      component: News,
      meta: {
        title: 'DuangChan - News'
      }
    },

    {
      path: '/library',
      name: 'library',
      component: Library,
      meta: {
        title: 'DuangChan - Library',
        requiresAuth: true
      }
    },

    {
      path: '/movie/:name',
      name: 'movie',
      component: MoviePage,
      meta: {
        title: `DuangChan - Movie`,
        requiresAuth: false
      }
    },

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
