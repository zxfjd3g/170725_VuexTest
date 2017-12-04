<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header/>
      <todo-main/>
      <todo-footer/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Main from './components/Main.vue'
  import Footer from './components/Footer.vue'
  import storageUtil from './util/storageUtil'

  export default {

    mounted () {
      // 通知action异步读取数据显示
      this.$store.dispatch('readTodos')
    },

    components: {
      'todo-header': Header,
      'todo-main': Main,
      'todo-footer': Footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>