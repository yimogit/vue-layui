import Vue from 'vue'
const TEST_KEY = 'TEST_KEY'
const appStore = {
  state: {
    test: {
      value: !+localStorage.getItem(TEST_KEY)
    }
  },
  mutations: {
    TEST_CHANGE: (state, value) => {
      localStorage.setItem(TEST_KEY, value)
      state.test.value = value

      // 对象需强制更新视图
      Vue.set(state, 'test', state.test)
    }
  },
  actions: {
    changeTestValue: ({ commit }) => {
      commit('TEST_CHANGE', Date.now())
    }
  }
}
export default appStore
