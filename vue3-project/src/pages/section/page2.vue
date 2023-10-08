<template>
	<view class="bg"></view>
	<view class="head" :animation="animationData.title">
		<image src="../../static/img/page2/title.png" mode="cover" class="title" />
		<image src="../../static/img/page2/head_bg.png" mode="cover" class="title_bg" />
	</view>

	<view class="text_youliao" :animation="animationData.youliao">有料棕</view>
	<view class="text_zhiyu" :animation="animationData.zhiyu">治愈绿</view>
	<image src="../../static/img/page2/to_right.png" mode="cover" class="to_right" :animation="animationData.toRight" />
	<image src="../../static/img/page2/to_left.png" mode="cover" class="to_left" :animation="animationData.toLeft" />

</template>
<script setup lang="ts">
	import {
		ref,
		onMounted
	} from "vue";
	import {
		sleep
	} from '@/utils/sleep'

	onMounted(() => {
		getAnimation(animationStep);
	});

	const animationOption: UniApp.CreateAnimationOptions = {
		duration: 3000,
		timingFunction: "ease",
	};

	const animationData = ref({
		title: "",
		toRight: '',
		toLeft: '',
		youliao: '',
		zhiyu: '',
	});
	const animationStep = ref({
		titleShow: {
			action: {
				opacity: 1,
			},
			duration: 3000,
			sleep: 3000,
			key: "title"
		},
		titleMove: {
			action: {
				translateY: -170
			},
			duration: 1000,
			key: "title"
		},
		toRight: {
			action: {
				translateX: '790rpx'
			},
			duration: 3000,
			key: 'toRight'
		},
		toLeft: {
			action: {
				translateX: '-710rpx'
			},
			duration: 3000,
			sleep: 2000,
			key: 'toLeft'
		},
		youliao: {
			action: {
				opacity: 1
			},
			duration: 3000,
			key: 'youliao'
		},
		zhiyu: {
			action: {
				opacity: 1
			},
			duration: 3000,
			key: 'zhiyu'
		}
	});
	const getTextAnimation = () => { //字体淡入
		const textAnimation1 = uni.createAnimation(animationOption);
		const textAnimation2 = uni.createAnimation(animationOption);
		textAnimation1.opacity(1).step();
		textAnimation2.opacity(1).step();

		animationData.value.youliao = textAnimation1.export()
		animationData.value.zhiyu = textAnimation2.export()
	}

	const getAnimation = (obj) => {
		let sleep = 0
		Object.values(obj.value).forEach((t, i) => {

			const timer = setTimeout(() => {
				const animation = uni.createAnimation({
					duration: t.duration,
					timingFunction: "ease",
				});
				Object.entries(t.action).forEach(_t => {
					animation[_t[0]](_t[1]).step()
				})
				animationData.value[t.key] = animation.export();
				clearTimeout(timer);
			}, sleep)

			sleep = t.sleep ? sleep + t.sleep : sleep
		})
	}
</script>
<style>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #FEFFE8;
		position: fixed;
		top: 0;
	}

	.head {
		opacity: 0;
		position: absolute;
		top: calc((100% - 508rpx) /2);
		left: calc((100% - 676rpx) /2);
		width: 676rpx;
		height: 508rpx;
		text-align: center;
	}

	.title {
		position: absolute;
		top: calc((100% - 254rpx - 220rpx) /2);
		left: calc((100% - 312rpx) /2);
		width: 312rpx;
		height: 254rpx;
		text-align: center;
		z-index: 2;
	}

	.title_bg {
		position: absolute;
		top: calc((100% - 508rpx) /2);
		left: calc((100% - 676rpx) /2);
		width: 676rpx;
		height: 508rpx;
		text-align: center;
	}

	.to_right {
		width: 665rpx;
		height: 518rpx;
		position: absolute;
		top: 341rpx;
		left: -100%;
		background: #99b4d3;
		-webkit-clip-path: polygon(0 0, 76% 0, 24% 100%, 0% 100%);
		clip-path: polygon(0 0, 250% 0, 0% 100%, 0% 100%);
	}

	.to_left {
		width: 665rpx;
		height: 518rpx;
		position: absolute;
		top: 695rpx;
		left: 100%;
		background: #99b4d3;
		-webkit-clip-path: polygon(0 0, 76% 0, 24% 100%, 0% 100%);
		clip-path: polygon(100% 0%, 100% 0%, -150% 100%, 100% 100%)
	}

	.text_youliao {
		position: absolute;
		top: 30%;
		left: 54%;
		font-size: 100rpx;
		color: #825D45;
		z-index: 999;
		opacity: 0;
	}

	.text_zhiyu {
		font-size: 100rpx;
		color: #B1D026;
		position: absolute;
		top: 72%;
		right: 54%;
		z-index: 999;
		opacity: 0;
	}
</style>
