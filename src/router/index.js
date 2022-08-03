// // 1、定义路由组件   (也可从其他文件导入)
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 2、定义一些路由  每个路由都需要映射到一个组件   后面再讨论嵌套路由
const routes = [
    // 首页(仪表盘 快速入口)
    {
        path:'/',
        name:'index',
        component:() => import('@/Home/MenuIndex.vue') ,
        redirect:'/index',
        meta:{
            title:'首页' ,  //菜单标题
            icon:'el-icon-s-home',  //图标
            hasSubMenu:false,  //是否包含子菜单。false没有子菜单，true有子菜单
        },
        children:[
            {
                path:'/index',
                component:()=>import('@/User/index.vue')
            }
        ]
    },
    // 员工管理
    {
        path:'/employee',
        name:'employee',
        component:()=>import('@/Home/MenuIndex.vue'),
        redirect:'/employee/employeeStatistics',
        meta:{
            title:'员工管理',
            icon:'el-icon-user-solid',
            hasSubMenu:true,
        },
        children:[
            // 员工统计
            {
                path:'employeeStatistics',
                name:'employeeStatistics',
                meta:{
                    title:'员工统计',
                    hasSubMenu:false
                },
                component:()=>import('@/User/employeeStatistics.vue')
            },
            // 员工管理(增删改查)
            {
                path:'employeeManage',
                name:'employeeManage',
                meta:{
                    title:'员工管理',
                    hasSubMenu:false
                },
                component:()=>import('@/User/employeeManage.vue')
            },
        ]
    },
    // 考勤管理
    {
        path:'/attendManage',
        name:'attendManage',
        component:()=>import('@/Home/MenuIndex.vue'),
        redirect:'/attendManage/attendStatistics',
        meta:{
            title:'考勤管理',
            icon:'el-icon-s-claim',
            hasSubMenu:true,
        },
        children:[
            // 考勤统计
            {
                path:'attendStatistics',
                name:'attendStatistics',
                meta:{
                    title:'考勤统计',
                    hasSubMenu:false,
                },
                component:()=>import('@/User/attendStatistics.vue')
            },
            // 考勤列表
            {
                path:'attendList',
                name:'attendList',
                meta:{
                    title:'考勤列表',
                    hasSubMenu:false,
                },
                component:()=>import('@/User/attendList.vue')
            },
            // 异常管理
            {
                path:'excpetManage',
                name:'exceptManage',
                meta:{
                    title:'异常管理',
                    hasSubMenu:false,
                },
                component:()=>import('@/User/exceptManage.vue')
            },
        ]
    },
    // 工时管理
    {
        path:'/timeManage',
        name:'timeManage',
        component:()=>import('@/Home/MenuIndex.vue'),
        redirect:'/timeManage/timeStatistics',
        meta:{
            title:'工时管理',
            icon:'el-icon-message-solid',
            hasSubMenu:true,
        },
        children:[
            // 工时统计
            {
                path:'timeStatistics',
                name:'timeStatistics',
                meta:{
                    title:'工时统计',
                    hasSubMenu:false,
                },
                component:()=>import('@/User/timeStatistics.vue')
            },
            // 工时列表
            {
                path:'timeList',
                name:'timeList',
                meta:{
                    title:'工时列表',
                    hasSubMenu:true,
                },
                component:()=>import('@/User/timeList.vue'),
                children:[
                    {
                        path:'options1',
                        name:'options1.vue',
                        meta:{
                            title:'列表一',
                            hasSubMenu:false,
                        },
                        component:()=>import('@/User/options1.vue')
                    },
                    {
                        path:'options2',
                        meta:{
                            title:'列表二',
                            hasSubMenu:false,
                        }
                    }
                ]
            },
        ]
    }
]
export default new Router({
    routes
})

// // 3、创建路由实例并传递'routes'配置   
// const router = VueRouter.createRouter({
//     // 4、内部提供了history模式的实现。为了简单起见，这里使用hash模式
//     history:VueRouter.createWebHashHistory(),
//     routes,
// })

// // 5、创建并挂载实例