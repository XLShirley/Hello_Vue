<template>
  <div id="app">
    <MenuIndex></MenuIndex>
    <!-- <img alt="Vue logo" src="./assets/xl.jpg" >
    <img alt="Vue logo" src="./assets/logo.png">
    <img alt="Vue logo" src="./assets/hyh.png" style="width:175px;height:175px">
    <HelloWorld msg="因上努力 果上随缘"/>
    <topVue/> -->
    <!-- <OnEmit/>
    <FaTher1 />
    <itany></itany>
    <CrosslevelVue></CrosslevelVue> -->
    <!-- <h1>Hello App！</h1>
    <p>
      使用router-link组件进行导航
      通过传递'to'来指定链接
      '<router-link>'将呈现一个带有正确'href'属性的'<a>'标签
      <router-link to="/">Go To Home</router-link>
      <router-link to="/about">Go To About</router-link>
    </p>
    路由出口
    路由匹配到组件将渲染在这里
    <router-view></router-view> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// // import topVue from './components/top.vue'
// import OnEmit from './components/OnEmit.vue'
// import FaTher1 from './communication/Father1'
// import itany from '@/communication/itany.vue'
// import CrosslevelVue from './communication/Crosslevel.vue'
import MenuIndex from './Home/MenuIndex.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // topVue,
    // OnEmit,
    // FaTher1,
    // itany,
    // CrosslevelVue
    MenuIndex,
},
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
