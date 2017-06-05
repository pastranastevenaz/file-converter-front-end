import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import documents from './containers/Documents'
import images from './containers/Images'
import movies from './containers/Movies'
import sounds from './containers/Sounds'
import projects from './containers/Projects'


// The routes
const routes = [
  {path: '/', component: images},
  {path: '/images', component: images },
  {path: '/movies', component: movies},
  {path: '/documents', component: documents},
  {path: '/sounds', component: sounds},
  {path: '/projects', component: projects}
]

// Export the router
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
