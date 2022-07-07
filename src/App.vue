<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/xl.jpg" >
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/hyh.png" style="width:175px;height:175px">
    <HelloWorld msg="因上努力 果上随缘"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
