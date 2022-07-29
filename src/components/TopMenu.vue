<template>
    <div class="top-menu">
        <img :src="logoPath" class="logo" height="75px" width="75px"/>
        <p class="name">{{name}}</p>
    </div>
</template>
<script>
export default {
    name:'topMenu',
    props:['logoPath','name']
}
</script>
<style lang="scss" scoped>
    $topMenuwidth:80px;
    $logowidth:50px;
    $bg-color:#409EFF;
    $name-color:#fff;
    $name-size:18px;
    #top-menu{
        height:$topMenuwidth;
        text-align: left;
        background-color: $bg-color;
        padding: 20px 20px 0px 20px;
        .logo{
            width: $logowidth;
            display: inline-block;
        }
        .name{
            display: inline-block;
            vertical-align: bottom;
            color:$name-color;
            font-size: $name-size;
        }
    }
</style>