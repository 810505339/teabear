<template>
	<view class="bg"></view>
	<view class="title" :animation="animationData.title">开业信息</view>
	<view class="text_youliao" :animation="animationData.youliao">有料棕</view>
	<view class="text_zhiyu" :animation="animationData.zhiyu">治愈绿</view>
	<image src="../../static/bg_move.png" mode="cover" class="to_right" :animation="animationData.toRight" />
	<image src="../../static/bg_move.png" mode="cover" class="to_left" :animation="animationData.toLeft" />

</template>
<script setup lang="ts">
	import {
		ref,
		onMounted
	} from "vue";

	onMounted(() => {
		getAnimation();
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
	const distance = ref({
		title: -250,
		toRight: '100VW',
		toLeft: '-100VW',
	});
	const getTextAnimation = () => { //字体淡入
		const textAnimation1 = uni.createAnimation(animationOption);
		const textAnimation2 = uni.createAnimation(animationOption);
		textAnimation1.opacity(1).step();
		textAnimation2.opacity(1).step();

		animationData.value.youliao = textAnimation1.export()
		animationData.value.zhiyu = textAnimation2.export()
	}

	function getAnimation() {
		const {
			title,
			toRight,
			toLeft
		} = distance.value;
		const titleAnimation = uni.createAnimation(animationOption);
		const toRightAnimation = uni.createAnimation(animationOption);
		const toLeftAnimation = uni.createAnimation(animationOption);
		titleAnimation.translateY(title).step();
		toRightAnimation.translateX(toRight).step();
		toLeftAnimation.translateX(toLeft).step();
		animationData.value.title = titleAnimation.export();
		animationData.value.toRight = toRightAnimation.export();
		animationData.value.toLeft = toLeftAnimation.export();
		setTimeout(() => {
			getTextAnimation()
		}, 2e3)

	}
</script>
<style>
	.bg {
		width: 100%;
		height: 100vh;
		background-color: #4472C4;
		position: fixed;
		top: 0;
	}

	.title {
		position: absolute;
		top: 50%;
		left: calc((100% - 200rpx) /2);
		width: 200rpx;
		height: 20vh;
		text-align: center;
	}

	.to_right {
		width: 100%;
		height: 500rpx;
		position: absolute;
		top: 25%;
		left: -100%;
		background: #99b4d3;
		-webkit-clip-path: polygon(0 0, 76% 0, 24% 100%, 0% 100%);
		clip-path: polygon(0 0, 250% 0, 0% 100%, 0% 100%);
	}


	.to_left {
		width: 100%;
		height: 500rpx;
		position: absolute;
		top: 50%;
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
