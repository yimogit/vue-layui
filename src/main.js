// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import directives from './directives'
import components from './components'
import filters from './filters'

import $const from './_const'
import $ui from './_ui'
import $api from './_api'
import $config from './_config'

// 扩展Vue实例 this.$const this.$ui this.$api
// eslint-disable-next-line
;(function extendVue(_vue, p) {
  Object.keys(p).forEach(e => {
    const plugin = {}
    plugin[e] = {
      get() {
        return p[e]
      }
    }
    Object.defineProperties(_vue.prototype, plugin)
  })
})(Vue, { $const, $ui, $api, $config })

Vue.prototype.$layui = window.layui
// 注册指令，过滤器，组件
Object.keys(directives).forEach(e => Vue.directive(e, directives[e]))
Object.keys(filters).forEach(e => Vue.filter(e, filters[e]))
Object.keys(components).forEach(e => Vue.component(e, components[e]))

Vue.config.productionTip = false

window.__currentApp = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
