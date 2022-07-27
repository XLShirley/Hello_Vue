<template>
    <div class="my-a">
        <h3>B组件：{{age}}</h3>
        <el-button @click="send">将数据发给C组件</el-button>
    </div>
</template>
<script>
import {eventBus} from '@/utils/eventBus'
export default {
    data(){
        return {
            age:23,
        }
    },
    methods:{
        send(){
            eventBus.$emit('data-b',this.age)
        }
    }
}
</script>