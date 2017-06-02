<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header></header>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Header,
    Hello,
  }
}
</script>

<style>
#app {
  padding: 0px !important;
  margin: 0px !important;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
