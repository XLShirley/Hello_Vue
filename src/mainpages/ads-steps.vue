<template>
	<div>
		<div class="bg-container">
			<div class="box" v-for="(item, index) in steps_list" :key="index">
				<div :class="['circular', activeValue == index ? 'activeCirular' : 'greyCircular']">
					{{ item.number }}
				</div>
				<span :class="[activeValue == index ? 'activeText' : 'greyText']">{{ item.text }}</span>
				<span class="greyText line" v-if="index != steps_list.length - 1">——</span>
			</div>
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
		return {
			// activeValue: 0,
			steps_list: [
				{
					number: 1,
					text: '确认推广内容',
				},
				{
					number: 2,
					text: '完善推广资料',
				},
				{
					number: 3,
					text: '确认关键词',
				},
				{
					number: 4,
					text: '选择国家地区及预算',
				},
				{
					number: 5,
					text: '确认附加信息',
				},
				{
					number: 6,
					text: '确认推上线方案',
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
	display: flex;
	height: 112px;
	background: #ffffff;
	box-shadow: 0px 4px 4px 0px rgba(67, 93, 255, 0.05);
	border-radius: 4px;
	justify-content: center;
	margin-bottom: 10px;
}

.box {
	display: flex;
	align-items: center;
	font-size: 16px;
	font-weight: 400;
	.circular {
		width: 32px;
		height: 32px;
		text-align: center;
		line-height: 28px;
		border-radius: 16px;
		margin-right: 10px;
	}
	.line {
		padding: 0px 10px;
	}
	.greyText {
		color: #999999;
	}
	.activeText {
		color: #333333;
	}
	.greyCircular {
		border: 1px solid rgba(0, 0, 0, 0.15);
		color: rgba(0, 0, 0, 0.25);
	}
	.activeCirular {
		background: #3da1ff;
		color: #ffffff;
	}
}
</style>
