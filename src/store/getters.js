export default {

  completeSize (state) {
    return state.todos.reduce((preTotal, todo) => {
      return preTotal + (todo.completed ? 1 : 0)
    }, 0)
  },

  isCheckAll (state, getters) {
    return state.todos.length===getters.completeSize &&  getters.completeSize>0
  }
}