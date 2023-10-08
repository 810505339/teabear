<template>
	<view class="full" @click="trigger"></view>
	<view class="box_warper">
		<view class="box" :animation="animationData.left">黄色叶子</view>
		<view class="box" :animation="animationData.right">绿色叶子</view>
	</view>
</template>
<script setup lang="ts">
	import {
		ref,
		onMounted
	} from "vue";
	onMounted(() => {
		getAnimation()
	})

	const animationOption: UniApp.CreateAnimationOptions = {
		duration: 3500,
		timingFunction: "ease",
	};
	const animationData = ref({
		left: "",
		right: "",
		distance: 200,
	});

	function getAnimation() {
		const {
			distance
		} = animationData.value;
		const leftAnimation = uni.createAnimation(animationOption);
		const rightAnimation = uni.createAnimation(animationOption);
		leftAnimation.translateX(-distance).step();
		rightAnimation.translateX(distance).step();
		animationData.value.left = leftAnimation.export();
		animationData.value.right = rightAnimation.export();
	}

	function trigger() {
		getAnimation();
	}
</script>

<style>
	.full {
		position: absolute;
		z-index: 10;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
	}

	.box {
		border: 1px solid #999;
		height: 100vh;
		width: 50%;
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: center;
	}

	.box_warper {
		display: flex;
		text-align: center;
	}
</style>
