import storageUtil from '../util/storageUtil'
export default {

  // 异步读取数据更新状态
  readTodos ({commit}) {
    setTimeout(() => {
      // 读数据
      const todos = storageUtil.readTodos()
      // 提交请求
      commit('RECEIVE_TODOS', {todos})  // 使用一个对象来包裹传递的数据
    }, 1000)
  },

  // 添加todo
  addTodo ({commit}, todo) {
    commit('ADD_TODO', {todo})
  },

  // 删除todo
  removeTodo ({commit}, index) {
    commit('REMOVE_TODO', {index})
  },

  // 全选或全不选
  selectAll ({commit}, isCheck) {
    commit('SELECT_ALL', {isCheck})
  },

  // 清除已完成的
  clearCompletedTodos ({commit}) {
    commit('CLEAR_COMPLETED_TODOS')
  }
}