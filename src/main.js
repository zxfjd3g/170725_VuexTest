import Vue from 'vue'
import App from './App.vue'
import store from './store'

import './base.css' // 引入的样式对所有组件都可见

new Vue({
  el: '#app',
  render: h => h(App),
  store   // 配置上vuex, 所有的组件都多了一个属性: $store
})
