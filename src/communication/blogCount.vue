<template>
    <div class="blog">
        <p>这是从父组件传进来的数字：{{subNum}}</p>
        <p>这是从父组件传进来的对象：{{subUser.name}}-{{subUser.age}}</p>
        <el-button @click="changeNum">点击改变父组件的num</el-button>
    </div>
</template>
<script>
export default {
    props:{
        subNum:{
            type:Number
        },
        subUser:{}
    },
    methods:{
        changeNum(){
            this.$emit('changenum',9);
        }
    }
}
</script>