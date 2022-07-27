<template>
    <div class="father1">
        <div>{{ num }}</div>
        <blog-count :sub-num="num" :sub-user="user" @changenum="change"></blog-count>
    </div>
</template>
<script>
import blogCount from "@/communication/blogCount.vue";
export default {
    components: {
        blogCount,
    },
    data() {
        return {
            num: 2,
            user: {
                name: "zhangsan",
                age: 8,
            },
        };
    },
    methods: {
        change(val) {
            console.log("aaa");
            this.num = val;
        },
    },
};
</script>