<template>
    <div class="radioBox">
        <div class="radioplug">
            <div class="top-title">
                <slot name="maintitle">
                    <div>{{maintitle}}</div>
                </slot>
                <div>
                    <slot name="subtitle"></slot>
                </div>
            </div>
            <div class="radio">
                <div class="selectbox" v-for="(item,index) in items" :key="index">
                    <div class="subbox">
                        <input type="radio">
                        <img :src="item.url" alt="">
                    </div>
                    <span>{{item.text}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'radioBox',
    data(){
        return{
            items:[
                {url:'require'}
            ]
        }
    }
}
</script>