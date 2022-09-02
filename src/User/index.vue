<template>
    <div>
        <adsSteps :activeValue="activeValue"></adsSteps>
        <tip-steps></tip-steps>
        <div class="main">
            <promotion></promotion>
        </div>
        <confirmStep :activeValue="activeValue" @toPrev="toPrev" @toNext="toNext" class="footer"></confirmStep>
    </div>
</template>

<script>
import promotion from '@/mainpages/promotion.vue'
import adsSteps from '@/mainpages/ads-steps.vue';
import tipSteps from '@/mainpages/tip-steps';
import confirmStep from '@/mainpages/confirmStep';
export default {
    data() {
        return {
            activeValue: 0,
        };
    },

    components: { adsSteps, tipSteps, confirmStep, promotion },

    computed: {},

    methods: {
        toNext() {
            this.activeValue++;
        },
        toPrev() {
            this.activeValue--;
        },
        toSkip(val) {
            this.activeValue = val;
        }
    },
};
</script>

<style lang="scss" scoped>
.main {
    min-height: 300px;
    // background: #ffffff;
    box-shadow: 0px -4px 4px 0px rgba(51, 51, 51, 0.05);
    margin: 10px 0px;
}

.footer {
    // position: absolute;
    bottom: 0;
    left: 20px;
    right: 20px;
    margin: 0;
}
</style>
