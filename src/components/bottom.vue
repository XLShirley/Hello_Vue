<template>
    <section>
        <div>
            ----{{$attrs['gender']}}  
            <!-- 在$attrs里面只会出现props没有注册的属性 -->
            <br>
            {{gender}}
        </div>
    </section>
</template>
<script>
export default {
    name:'botTom',
    props:{
        gender:{
            type:String,
            default:''
        }
    },
    mounted(){
        console.log('$attrs',this.$attrs);
        console.log('$listeners',this.$listeners);
        this.$listeners.isClick();
        this.$listeners.asd();
    }
}
</script>