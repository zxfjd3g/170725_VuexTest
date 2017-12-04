import {
  RECEIVE_TODOS,
  SELECT_ALL,
  ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  REMOVE_TODO
} from './types'

export default {

  [RECEIVE_TODOS] (state, {todos}) {
    state.todos = todos
  },

  [ADD_TODO] (state, {todo}) {
    state.todos.unshift(todo)
  },

  [REMOVE_TODO] (state, {index}) {
    state.todos.splice(index, 1)
  },

  [SELECT_ALL] (state, {isCheck}) {
    state.todos.forEach(todo => todo.completed = isCheck)
  },

  [CLEAR_COMPLETED_TODOS] (state) {
    state.todos = state.todos.filter(todo => !todo.completed)
  }
}