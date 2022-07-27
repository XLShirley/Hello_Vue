<template>
    <section>
        <cenTers
            name="name"
            age="18"
            gender="888"
            sdf="asd"
            @isClick="isClick"
            @asd="asd"
        ></cenTers>
    </section>
</template>
<script>
    import cenTers from './center.vue'
    export default{
        name: 'topVue',
        components:{
            cenTers
        },
        methods:{
            asd(){
                console.log('999');
            },
            isClick(){
                console.log('666');
            }
        }
    }
</script>