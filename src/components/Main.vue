<template>
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="index"
          :todo="todo" :index="index"/>
  </ul>
</template>

<script>
  import {mapState} from 'vuex'
  import Item from './Item.vue'
  import storageUtil from '../util/storageUtil'

  export default {

    computed: {
      ...mapState(['todos'])
    },

    watch: {
      // 深度监视todos属性
      todos: {
        deep: true,
        handler: storageUtil.saveTodos
      }
    },

    components: {
      Item
    }
  }
</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>