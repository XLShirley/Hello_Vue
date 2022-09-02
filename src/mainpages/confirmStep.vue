<template>
	<div class="bg-container">
		<div class="button">
			<el-button size="medium" v-if="activeValue > 0 && activeValue < 5" @click="toPrev"
				>上一步</el-button
			>
			<el-button type="primary" size="medium" @click="toNext" v-if="activeValue < 5"
				>确定，下一步</el-button
			>
			<el-button type="primary" size="medium" v-if="activeValue == 5">确认上线方案</el-button>
			<el-button type="primary" size="medium" v-if="activeValue == 5">确认发送客户</el-button>
			<el-button type="primary" size="medium" v-if="activeValue == 5">更新方案</el-button>
			<el-button type="primary" size="medium" v-if="false">保存查看方案</el-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		activeValue: {
			default: 0,
		},
	},
	data() {
		return {};
	},

	components: {},

	computed: {},

	methods: {
		toNext() {
			this.$emit('toNext');
		},
		toPrev() {
			this.$emit('toPrev');
		},
	},
};
</script>

<style lang="scss" scoped>
.bg-container {
	height: 70px;
	background: #ffffff;
	display: flex;
	justify-content: flex-end;
	margin: 10px 0px;
	align-items: center;
	.button {
		padding-right: 50px;
	}
}
</style>
