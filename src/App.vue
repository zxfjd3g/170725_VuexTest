<template>
  <div>
    <p>clicked: {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  // 利用vuex提供的映射函数简化编码
  import {mapState,mapGetters, mapActions} from 'vuex'
  export default {

    mounted () {
      // 1. dispatch()
      // 2. getters对象
      // 3. state对象
      console.log(this.$store)
    },

    /*computed: {

      count () {
        return this.$store.state.count
      },

      evenOrOdd () {
        return this.$store.getters.evenOrOdd
      }
    },*/
    /*
    computed: mapState(['count']),
    computed: mapGetters(['evenOrOdd']),
    */
    /*
      ...的作用
      1. 打包: 函数形参: 所有实参数据的数组
         function fn (...as) {}
         fn(1, 3, 5)
      2. 拆(解)包: 数组
        const arr1 = [1, 3, 5]
        const arr2 = [7, ...arr1]
    */
    computed: {
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    },
    /*
    {
      increment () {
        this.$store.dispatch('increment')
      },
      decrement () {
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      },
    }
     */
    methods: mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
  }
</script>

<style>

</style>