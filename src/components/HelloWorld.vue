<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="checkbox" v-bind:checked="checked" v-on:change="$emit('change',$event.target.checked)">
    {{this.$store.state.count}}<button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  model:{
    prop:'checked',
    event:'change'
  },
  props: {
    msg: String,
    checked:Boolean
  },
  methods:{
    increment(){
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    }
  },
  mounted(){
    console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
