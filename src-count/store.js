/*
store对象模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态对象, 相当于data对象
const state = {
  count: 0
}

// 包含多个更新状态的方法的对象
const mutations = {
  INREMENT (state) {
    state.count++
  },

  DEREMENT (state) {
    state.count--
  }
}
const actions = {
  // 增加1
  increment ({commit}) {
    // 提交一个增加的mutation
    // 提交一个增加的请求(mutation)
    commit('INREMENT')
  },
  // 减少1
  decrement ({commit}) {
    commit('DEREMENT')
  },

  // 如果为奇数增加1
  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      commit('INREMENT')
    }
  },

  // 延迟1s增加1
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INREMENT')
    }, 1000)
  }

}

const getters = {
  evenOrOdd (state) {
    return state.count%2===0 ? '偶数' : '奇数'
  }
}


export default new Vuex.Store({ // 配置对象
  state,
  mutations,
  actions,
  getters
})