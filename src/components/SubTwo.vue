<template>
    <section>
        <h1>Right</h1>
        {{name}}
    </section>
</template>
<script>
import {eventBus} from '@/utils/eventBus'
export default {
    data(){
        return({
            name:'right默认值'
        })
    },
    mounted(){
        console.log('eventbus',eventBus.$on);
            eventBus.$on('isLeft',(info)=>{
                this.name = info;
            });
    }
}
</script>