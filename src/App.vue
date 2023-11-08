<template>
  <div id="app">
    <Page />
  </div>
</template>

<script>
import Page from '@/full-lifecycle-channels/Page.vue';
// import HelloWorld from './components/HelloWorld.vue'
// // import topVue from './components/top.vue'
// import OnEmit from './components/OnEmit.vue'
// import FaTher1 from './communication/Father1'
// import itany from '@/communication/itany.vue'
// import CrosslevelVue from './communication/Crosslevel.vue'
import MenuIndex from './Home/MenuIndex.vue';
export default {
  name: 'App',
  components: {
    Page,
    // HelloWorld,
    // topVue,
    // OnEmit,
    // FaTher1,
    // itany,
    // CrosslevelVue
    MenuIndex,
  },
};
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
