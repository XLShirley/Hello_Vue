<template>
    <div id="left-menu">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router :collapse="false">
            <!-- 一级菜单
        循环路由数据   判断当前路由route是否包含子菜单 -->
            <MenuItem :route="routesInfo" ></MenuItem>
        </el-menu>
    </div>
</template>
<script>
import MenuItem from '@/Home/MenuItem.vue'
export default {
    name: 'LeftMenu',
    components:{
        MenuItem,
    },
    data() {
        return {
            activeindex: '1'
        }
    },
    computed: {
        routesInfo: function () {
            return this.$router.options.routes;
        }
    },
    mounted() {
        console.log('adada', this.$router.options.routes);
    }
}
</script>
<style lang="scss" scoped>
// 使左边的菜单外层的元素高度充满屏幕
#left-menu {
    width: 200px;
    position: absolute;
    top: 150px;
    bottom: 0px;

    // 使菜单高度充满屏幕
    .el-menu-vertical-demo {
        height: 100%;
    }
}
</style>