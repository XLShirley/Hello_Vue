<template>
    <section>
        <el-row>
            <el-col :span="12">
                <SubCom></SubCom>
            </el-col>
            <el-col :span="12">
                <SubTwo></SubTwo>
            </el-col>
        </el-row>
    </section>
</template>
<script>
import SubCom from './SubCom.vue'
import SubTwo from './SubTwo.vue'
export default {
    name: 'OnEmit',
    components:{
        SubCom,
        SubTwo
    },
    // methods: {
    //     isClick() {
    //         this.$emit('isLeft', '点击事件！')
    //     },
    //     isClickOther() {
    //         this.$emit('isRight', ['点击1', '点击2']);
    //     }
    // },
    // mounted() {
    //     this.$on('isLeft', (val) => {
    //         console.log(val);
    //     });
    //     this.$on('isRight', (...val) => {
    //         console.log(...val);
    //     });
    //     this.$on(['isLeft', 'isRight'], () => {
    //         console.log(666);
    //     });
    // }
}
</script>