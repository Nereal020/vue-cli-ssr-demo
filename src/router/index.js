import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   routes
// })

// export default router

export function createRouter () {
  return new VueRouter({
    mode: 'hash',
    routes: [{
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue')
    }
    ]
  })
}
