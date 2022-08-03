<template>
    <div class="client-module">
        <div class="module-top" :class="{noborder:hideBorder}" v-if="showTitle">
            <div class="top-title" v-if="isShowTitle" :style="{fontSize:titleSize,justifyContent:justify,alignItem:align}">
                <slot name="moduletitle">
                    <div>{{moduletitle}}</div>
                </slot>
                <div>
                    <el-tooltip :placement="placement" :disabled="disabledHint" :content="tipText">
                        <slot name="hint" slot="content"></slot>
                        <ig-icon name="tishi" v-if="hint"></ig-icon>
                    </el-tooltip>
                    <slot name="customHint"></slot>
                </div>
            </div>
            <div class="top-detail" v-if="isShowDetail" @click="viewDetails">
                <slot name="event"></slot>
            </div>
        </div>
        <div class="module-main">
            <slot v-if="permission"></slot>
            <div v-else>
                <client-noaccess></client-noaccess>
            </div>
        </div>
    </div>
</template>
<script>
import clientNoAccess from '@/components/noAccess.vue'
export default {
    name:'clientModule',
    components:{
        clientNoAccess,
    },
    props:{
        moduletitle:{
            type:String,
            default:'标题'
        },
        showTitle:{
            type:Boolean,
            default:true
        },
        isShowTitle:{
            type:Boolean,
            default:true
        },
        isShowDetail:{
            type:Boolean,
            default:true
        },
        hideBorder:{
            type:Boolean,
            default:false            
        },
        titleSize:{
            type:String,
            default:'16px'
        },
        justify:{
            type:String,
            default:'16px'
        },
        align:{
            type:String,
            default:'16px'
        },
        hint:{
            type:Boolean,
            default:false
        },
        tipText:{
            type:String,
            default:'提示信息'
        },
        placement:{
            type:String,
            default:'top',
        },
        disabledHint:{
            type:Boolean,
            default:false
        },
        permission:{   
            type:Boolean,
            default:true
        }
    },
    data(){
        return{

        }
    },
    methods: {
		viewDetails() {
			this.$emit('viewDetails', this.callback);
		},
		callback() {
			this.$emit('detailCallback');
		},
	},
}
</script>
<style lang="scss" scoped>
.client-module{
    width: 100%;
    height: 100%;
    .module-top{
        width: 100%;
        height:auto;
        display:flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e8e8e8;
        padding:0 24px;
        font-size: 16px;
        color:#333;
        font-weight:bold;
        .top-title{
            flex: 1;
            height:100%;
            line-height:54px;
            display: flex;
        }
        .top-detail{
            font-size: 14px;
            color:#5aa0ff;
            font-weight: normal;
            user-select:none;
            cursor:pointer;
        }
        &.noborder {
		border: none;
	}
    }
    .module-main{
        box-sizing: border-box;
        height:auto;
    }
}

</style>