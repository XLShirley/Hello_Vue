<template>
    <div class="com1">
        <p>foo:{{foo}}</p>
        <p>childCom1的$attrs:{{$attrs}}</p>
        <child-com2 v-bind="$attrs"></child-com2>
        <h3 style="color:brown">{{name}}</h3>
    </div>
</template>
<script>
import childCom2 from '@/communication/childCom2.vue'
export default {
    components:{
        childCom2,
    },
    inheritAttrs:false,//可以关闭自动挂载到组件根元素上的没有在props声明的属性
    props:{
        foo:String,//foo作为props属性绑定
    },
    inject:['name'],
    created(){
        console.log('childCom1',this.$attrs);
    }
}
</script>