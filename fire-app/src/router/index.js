import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import PageNotFound from '@/components/PageNotFound'


import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: "*", component: PageNotFound },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ],
  scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/register',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser) {
      next({
        path: '/home',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
