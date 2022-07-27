<template>
    <section>
        <h1>Left</h1>
        <el-button type="primary" @click="isClick">点击</el-button>
    </section>
</template>
<script>
import {eventBus} from '@/utils/eventBus'
export default {
    methods:{
        isClick(){
            eventBus.$emit('isLeft','点击事件！');
        }
    }
}
</script>