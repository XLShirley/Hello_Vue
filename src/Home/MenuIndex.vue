<template>
    <div class="menu-index">
        <el-container>
            <el-header>
                <TopMenu :logoPath="logoPath" :name="name"></TopMenu>
            </el-header>
            <el-container id="left-container">
                <el-aside width="400px">
                    <leftMenu></leftMenu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import leftMenu from '@/components/leftMenu.vue'
import TopMenu from '@/components/TopMenu.vue'
export default {
    name:'MenuIndex',
    components:{
        leftMenu,
        TopMenu,
    },
    data(){
        return{
            logoPath:require('@/assets/xl.jpg'),
            name:'员工管理系统'
        }
    }
}
</script>

<style scoped lang="scss">
    #menu-index{
        .el-header{
            padding: 0px;
        }
    }
</style>