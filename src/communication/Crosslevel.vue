<template>
    <div class="cross">
        <h2>跨级组件间通信</h2>
        <child-com1
            :foo="foo"
            :boo="boo"
            :coo="coo"
            :doo="doo"
            title="前端工匠"
            >
        </child-com1>
        <el-button @click="changeName"  type="primary">点击修改name</el-button>
    </div>
</template>
<script>
import childCom1 from '@/communication/childCom1.vue'
export default {
    components:{
        childCom1,
    },
    data(){
        return {
            foo:'Javascript',
            boo:'Html',
            coo:'Css',
            doo:'Vue'
        }
    },
    methods:{
        changeName(){
            this.name = '小肖Shirley'
            console.log('name',this.name);
        }
    },
    provide:{   //provide/inject主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立一种主动提供与依赖注入的关系，需要注意的是：provide和inject绑定不是响应式的。这是刻意为之，如果传入的是一个可监听的对象，那么其对象属性是可响应的。
        name:'小肖',
    }
}
</script>