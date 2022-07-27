<template>
    <div class="my-a">
        <h3>A组件：{{name}}</h3>
        <el-button @click="send">将数据发给C组件</el-button>
    </div>
</template>
<script>
import { eventBus} from '@/utils/eventBus'
export default {
    data(){
        return{
            name:'shirley',
        }
    },
    methods:{
        send(){
            eventBus.$emit('data-a',this.name)
        }
    }
}
</script>