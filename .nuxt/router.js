import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _94b8dc12 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _0a4a4a28 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _60b8cafc = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _224e6708 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _7d80d3b0 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _ac568f8c = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _54b9e06e = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _94b8dc12,
    children: [{
      path: "",
      component: _0a4a4a28,
      name: "home"
    }, {
      path: "/login",
      component: _60b8cafc,
      name: "login"
    }, {
      path: "/register",
      component: _60b8cafc,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _224e6708,
      name: "profile"
    }, {
      path: "/settings",
      component: _7d80d3b0,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _ac568f8c,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _54b9e06e,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
