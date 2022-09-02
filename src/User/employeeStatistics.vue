<template>
    <div class="employeeStatistics">
        <h1>这里是employeeStatistics.vue</h1>
        <el-row class="answer" type="flex">
            <el-col :span="24" >
                <client-module  moduletitle="插件样式">
                    <plugStyle></plugStyle>
                </client-module>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import clientModule from '@/components/clientModule.vue'
import plugStyle from '@/components/plugStyle.vue'
export default {
    name: 'employeeStatistics',
    components:{
        clientModule,
        plugStyle,
    }
}
</script>
<style lang="scss" scoped>
.grid-content {
    border-radius: 4px;
    min-height: 54px;
  }
.bg-purple {
    background-color: #d3dce6;
}
</style>