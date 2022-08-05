<template>
    <div class="plugstyle">
        <el-row>
            <el-col :span="12" style="margin-top:20px; height:100%; border-right: 1px solid #e8e8e8; ">
                <el-row>
                    <el-col :span="12" style="margin-bottom:15px">
                        <span>插件展示位置</span>
                        <el-select v-model="position"    style="margin-top:5px;" placeholder="请选择">
                            <el-option
                            v-for="item in positionArr"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="12">
                        <span>访客模式</span>
                        <el-select v-model="visitormode" style="margin-top:5px;" placeholder="请选择">
                            <el-option
                            v-for="item in visitormodeArr"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12">
                        <div>插件颜色</div>
                        <el-color-picker v-model="plugcolor" class="select"></el-color-picker>
                    </el-col>
                    <el-col :span="12">
                        <span>聊天插件显示方式</span>
                        <el-select v-model="chatmethod" style="margin-top:5px;" placeholder="请选择">
                            <el-option
                            v-for="item in chatmethodArr"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="22">
                        <span>问候语</span>
                        <el-input style="margin-top:5px;"   placeholder="请输入内容"></el-input>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="12" style=" ">
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'plugStyle',
    data(){
        return{
            positionArr:[
                {value:'0',label:'右下'},
                {value:'1',label:'左下'}
            ],
            visitormodeArr:[
                {value:'0',label:'开启'},
                {value:'1',label:'关闭'}
            ],
            chatmethodArr:[
                {value:'0',label:'显示完整聊天插件'},
                {value:'1',label:'只显示图标'},
                {value:'2',label:'显示图标和问候语'}
            ],
            visitormode:'0',
            position:'0',
            chatmethod:'0',
            plugcolor:'#0084FF',
        }
    }
}
</script>
<style lang="scss" >
.el-color-picker__trigger {
    width: 223px ;
}

.el-color-dropdown__link-btn {
    display: none;
}
</style>