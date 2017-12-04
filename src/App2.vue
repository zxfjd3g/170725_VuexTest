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
  export default {

    mounted () {
      // 1. dispatch()
      // 2. getters对象
      // 3. state对象
      console.log(this.$store)
    },

    computed: {

      count () {
        return this.$store.state.count
      },

      evenOrOdd () {
        return this.$store.getters.evenOrOdd
      }
    },

    methods: {
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
  }
</script>

<style>

</style>