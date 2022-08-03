<template>
    <div class="plugstyle">
        <el-row>
            <el-col :span="12" style="margin-top:20px;">
                <el-row>
                    <el-col :span="12" style="margin-bottom:15px">
                        <span>插件展示位置</span>
                        <el-select style="margin-top:5px;" placeholder="请选择">
                            <el-option>
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12">
                        <span>访客模式</span>
                        <el-select style="margin-top:5px;" placeholder="请选择">
                            <el-option>
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <div>插件颜色</div>
                        <el-color-picker class="select"></el-color-picker>
                    </el-col>
                    <el-col :span="12">
                        <span>聊天插件显示方式</span>
                        <el-select style="margin-top:5px;" placeholder="请选择">
                            <el-option>
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="12">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'plugStyle',
}
</script>
<style lang="scss" scoped>
.el-color-picker__trigger {
    width: 223px !important;
}

.el-color-dropdown__link-btn {
    display: none;
}
</style>