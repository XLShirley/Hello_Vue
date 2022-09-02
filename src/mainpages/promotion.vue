<template>
    <div class="bg-promotion">
        <el-row>
            <vue-drag-resize :isActive="true" :isDraggable="false" :w="260" :minw="260" :parentW="500" axis="x"
                :sticks="['mr']" v-on:resizing="resize" class="VueDragResize" :preventActiveBehavior="true"
                :parentLimitation="true">
                <div class="aside">
                    <div class="title">已选择的推广内容
                        <!-- <ig-icon class="drag-right" name="drag"></ig-icon> -->
                        <i class="el-icon-right" style="color: #999;
                    float: right;
                    line-height: 30px;"></i>
                    </div>
                    <div v-for="item in proArr" :key="item.value"
                        :class="['item', selectedVal == item.value ? 'selectitem' : 'item']"
                        @click="changeIndex(item.value)">
                        {{ item.label }}
                        <!-- <ig-icon name="querenzhuangtai" style="color:chartreuse" v-if="item.value < selectedVal">
                        </ig-icon> -->
                        <i class="el-icon-success" style="color:chartreuse" v-if="item.value < selectedVal"></i>
                    </div>
                </div>
            </vue-drag-resize>

            <div class="bodyMain" :style="{ marginLeft: width + 10 + 'px', width: boxWidth + 'px' }">
                <el-row style="max-height:600px; overflow: auto;">
                    <el-col :span="12">
                        <div class="main-title">完善产品推广资料</div>
                        <adDelete class="adDelete"></adDelete>
                        <adDelete class="adDelete"></adDelete>
                    </el-col>
                    <el-col :span="12">
                    </el-col>
                </el-row>
            </div>
        </el-row>
    </div>
</template>
<script>
import adDelete from '@/mainpages/adDelete.vue'
export default {
    components: {
        adDelete,
    },
    data() {
        return {
            selectedVal: 1,
            proArr: [
                { label: 'Power Packs Bolt Tensio', value: '1' },
                { label: 'Pneumatic Pump', value: '2' },
                { label: 'GT Series Desoldering', value: '3' },
                { label: 'Soldering', value: '4' },
            ],
            width: 260,
            height: 0,
            top: 0,
            left: 0,
            windowWidth: document.documentElement.clientWidth - 260 - 10,
        }
    },
    methods: {
        changeIndex(index) {
            this.selectedVal = index;
        },
        handleResize(event) {
            this.windowWidth = document.documentElement.clientWidth - 260; // 宽
        },
        resize(newRect) {
            this.width = newRect.width;
            this.height = newRect.height;
            this.top = newRect.top;
            this.left = newRect.left;
        },
    },
    computed: {
        boxWidth() {
            return this.windowWidth - this.width + 20;
        },
    },
    created() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy: function () {
        window.removeEventListener('resize', this.handleResize);
    },
}
</script>
<style lang="scss" scoped>
.bg-promotion {
    .VueDragResize {
        top: unset !important;
        left: unset !important;
        height: 0 !important;

        .aside {
            overflow: hidden;
            background: #ffffff;
            height: 600px;

            .title {
                margin: 18px 20px;
                font-size: 18px;

                .drag-right {
                    color: #999;
                    float: right;
                    line-height: 30px;
                }
            }

            .item {
                height: 40px;
                line-height: 40px;
                padding: 0 18px;
            }

            .selectitem {
                background: #EBF5FF;
                color: #3DA1FF;
                border-radius: 4px;
            }
        }
    }


    .bodyMain {
        background-color: #ffffff;
        height: 600px;

        .main-title {
            margin: 20px 30px;
            height: 25px;
            font-size: 18px;
            line-height: 25px;
        }

        .adDelete {
            margin: 40px 30px;
        }
    }

    /deep/ .vdr.active::before {
        outline: none;
    }

    /deep/.vdr-stick {
        border: unset;
        background: unset;
        box-shadow: unset;
        -webkit-box-shadow: unset;
    }

    /deep/.vdr-stick-mr {
        width: 30px !important;
        height: 30px !important;
        margin-top: 17px !important;
        right: 10px !important;
    }
}
</style>