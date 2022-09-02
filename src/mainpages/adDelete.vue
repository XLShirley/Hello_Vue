<template>
    <div class="adDelete">
        <div class="title">广告标题作用描述</div>
        <div>
            <el-form label-width="50px">
                <el-form-item v-for="(item, index) in Arr" :key="index" :label="`标题${index + 1}`">
                    <el-input style="width:370px" v-model="item.biaoti"></el-input>
                    <i @click="addArr" v-if="index == Arr.length - 2" class="el-icon-circle-plus-outline"
                        style="margin-left:5px; cursor: pointer; color: #3da1ff"></i>
                    <i @click="removeArr(index)" v-if="index == Arr.length - 1" class="el-icon-remove-outline"
                        style="margin-left:5px; cursor: pointer; color: #3da1ff"></i>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            Arr: [
                { biaoti: '我是标题1', value: '1' },
                { biaoti: '我是标题2', value: '2' },
                { biaoti: '我是标题3', value: '3' },
            ]
        }
    },
    methods: {
        addArr() {
            if (this.Arr.length < 5) {
                this.Arr.push({
                    biaoti: '',
                    value: '',
                });
            } else {

            }
        },
        removeArr(index) {
            if (index > 2) {
                this.Arr.splice(index, 1);
            } else {

            }
        }
    }
}
</script>
<style lang="scss" scoped>
.adDelete {
    .title {
        font-size: 14px;
        margin-bottom: 20px;
    }
}
</style>