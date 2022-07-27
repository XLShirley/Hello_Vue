<template>
    <div id="left-menu">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" :collapse="false">
            <!-- 一级菜单
        循环路由数据   判断当前路由route是否包含子菜单 -->
            <el-submenu v-for="route in routesInfo" :key="route.name" :index="route.path" v-if="route.meta.hasSubMenu">
                <template slot="title">
                    <i :class="route.meta.icon"></i>
                    <span slot="title">{{ route.meta.title }}</span>
                </template>
                <!-- 二级菜单
            循环子路由'route.children'
            循环的时候判断子路由'childRoute'是否包含子菜单 -->
                <el-submenu v-for="Routechild in route.children" :key="Routechild.name" :index="Routechild.path"
                    v-if="Routechild.meta.hasSubMenu">
                    <template slot="title">
                        <i :class="Routechild.meta.icon"></i>
                        <span slot="title">{{ Routechild.meta.title }}</span>
                    </template>
                    <!-- 三级菜单 -->
                    <el-submenu v-for="RouteSon in Routechild.children" :key="RouteSon.name" :index="RouteSon.path"
                        v-if="RouteSon.meta.hasSubMenu">
                        <template slot="title">
                            <i :class="RouteSon.meta.icon"></i>
                            <span slot="title">{{ RouteSon.meta.title }}</span>
                        </template>
                    </el-submenu>
                    <el-menu-item :index="RouteSon.path" v-else>
                        <i :class="RouteSon.meta.icon"></i>
                        <span slot="title">{{ RouteSon.meta.title }}</span>
                    </el-menu-item>

                </el-submenu>
                <el-menu-item :index="Routechild.path" v-else>
                    <i :class="Routechild.meta.icon"></i>
                    <span slot="title">{{ Routechild.meta.title }}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item :index="route.path" v-else>
                <i :class="route.meta.icon"></i>
                <span slot="title">{{ route.meta.title }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'LeftMenu',
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
#left-container {
    position: absolute;
    top: 100px;
    bottom: 0px;

    // 使菜单高度充满屏幕
    #left-menu,
    .el-menu-vertical-demo {
        height: 100%;
    }
}
</style>