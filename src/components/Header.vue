<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
           v-model="todoText" @keyup.enter="add"/>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        todoText: ''   // 组件内部的私有的状态, 不需要vuex来管理
      }
    },

    methods: {
      add () {
        const todoText = this.todoText.trim()
        if(!todoText) {
          return
        }
        const todo = {text: todoText, completed: false}
        // this.addTodo(todo)
        this.$store.dispatch('addTodo', todo)
        this.todoText = ''
      }
    }
  }
</script>

<style>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>