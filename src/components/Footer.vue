<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck"/>
    </label>
    <span>
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger"
            @click="clearCompletedTodos"
            v-show="completeSize">清除已完成任务</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {

    computed: {
      ...mapState(['todos']),
      ...mapGetters(['completeSize']),
      isCheck: {
        get () {
          return this.$store.getters.isCheckAll
        },
        set (value) {
          // this.selectAll(value)
          this.$store.dispatch('selectAll', value)
        }

      }
    },

    methods: {
      ... mapActions(['clearCompletedTodos'])
    }
  }
</script>

<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>