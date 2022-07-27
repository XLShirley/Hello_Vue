<template>
    <section>
        <div class="mt-10">
            <botTom v-bind="$attrs" v-on="$listeners"></botTom>
        </div>
    </section>
</template>
<script>
import botTom from './bottom.vue';
export default {
    name:'cenTers',
    components:{
        botTom
    },
    props:{
        name:{
            type:String,
            default:'default'
        },
        age:{
            type:String,
            default:'default'
        }
    }
};
</script>