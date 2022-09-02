<template>
    <div class="bg-container">
        <div class="title">
            {{ list[0].title }}
        </div>
        <div class="tip">
            {{ list[0].tip }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: null,
        tip: null,
    },

    data() {
        return {
            list: [
                {
                    title: '你想在谷歌推广那些内容？',
                    tip: '关于选择推广产品或产品分类的说明',
                },
            ],
        };
    },

    components: {},

    computed: {},

    methods: {},
};
</script>

<style lang="scss" scoped>
.bg-container {
    height: 130px;
    background: #ffffff;
    box-shadow: 0px 4px 4px 0px rgba(67, 93, 255, 0.05);
    border-radius: 4px;
    padding: 20px 25px;

    .title {
        font-weight: bold;
        color: rgba(0, 0, 0, 0.85);
        font-size: 16px;
        margin-bottom: 15px;
    }

    .tip {
        font-size: 14px;
        color: #999999;
    }
}
</style>
