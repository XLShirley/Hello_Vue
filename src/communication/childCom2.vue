<template>
    <div class="com2">
        <p>boo:{{boo}}</p>
        <p>childCom2的$attrs:{{$attrs}}</p>
        <child-com3 v-bind="$attrs"></child-com3>
    </div>
</template>
<script>
import childCom3 from '@/communication/childCom3.vue'
export default {
    components:{
        childCom3,
    },
    inheritAttrs:false,//可以关闭自动挂载到组件根元素上的没有在props声明的属性
    props:{
        boo:String,//foo作为props属性绑定
    },
    created(){
        console.log('childCom2',this.$attrs);
    }
}
</script>