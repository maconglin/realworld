import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13faba32 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _74a967dc = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _20bbdc0c = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _8b484ce8 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _225f68a0 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _2b986dac = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _bdb3c64e = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
    component: _13faba32,
    children: [{
      path: "",
      component: _74a967dc,
      name: "home"
    }, {
      path: "/login",
      component: _20bbdc0c,
      name: "login"
    }, {
      path: "/register",
      component: _20bbdc0c,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _8b484ce8,
      name: "profile"
    }, {
      path: "/settings",
      component: _225f68a0,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _2b986dac,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _bdb3c64e,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
