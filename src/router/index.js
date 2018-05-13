import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import logic from './logic'
Vue.use(Router)

const router = new Router({
  //   mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    position.x = 0
    position.y = 0
    return position
  },
  routes
})
router.beforeEach(logic.beforeEach)
router.afterEach(logic.afterEach)

export default router
