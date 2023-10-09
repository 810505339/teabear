<template>
	<view class="bg" @click="onNext"></view>
	<view :style="{display:flag==0?'block':'none'}">
		<view class="head" :animation="animationData.title">
			<image :src="title" mode="cover" class="title" />
			<image :src="head_bg" mode="cover" class="title_bg" />
		</view>
		<image :src="youliao" mode="cover" class="text_youliao" :animation="animationData.youliao" />
		<image :src="zhiyu" mode="cover" class="text_zhiyu" :animation="animationData.zhiyu" />
		<image :src="to_right" mode="cover" class="to_right" :animation="animationData.toRight" @click="onNext" />
		<image :src="to_left" mode="cover" class="to_left" :animation="animationData.toLeft" @click="onNext" />
		<image :src="or" mode="cover" class="or" :animation="animationData.or" />
		<view class="box">
			<image :src="xiongDa" mode="cover" class="xiongDa" :animation="animationData.xiongDa" />
			<image :src="xiongEr" mode="cover" class="xiongEr" :animation="animationData.xiongEr" />
		</view>
	</view>


</template>
<script setup lang="ts">
	import {
		ref,
		onMounted,
		onBeforeUnmount
	} from "vue";
	import {
		getAnimation
	} from '@/utils/until.js'
	import {
		sleep
	} from '@/utils/sleep'
	import title from '@/static/img/page2/title.png'
	import head_bg from '@/static/img/page2/head_bg.png'
	import to_right from '@/static/img/page2/to_right.png'
	import to_left from '@/static/img/page2/to_left.png'
	import youliao from '@/static/img/page2/youliao.png'
	import zhiyu from '@/static/img/page2/zhiyu.png'
	import xiongDa from '@/static/img/page2/xiong1.png'
	import xiongEr from '@/static/img/page2/xiong2.png'
	import or from '@/static/img/page2/or.png'
	let timer1 = null,
		tmer2 = null


	onMounted(async () => {
		await getAnimation(animationStep, animationData);
		await getAnimation(youliaoAnimation, animationData);
		timer1 = setInterval(async () => {
			await getAnimation(youliaoAnimation, animationData);
			await getAnimation(zhiyuAnimation, animationData);
		}, 3500)
		getAnimation(zhiyuAnimation, animationData);
	});
	onBeforeUnmount(() => {
		clearInterval()
	})

	const flag = ref(0)
	const animationData = ref({
		title: "",
		toRight: '',
		toLeft: '',
		youliao: '',
		zhiyu: '',
		xiongDa: '',
		xiongEr: '',
		or: ''
	});
	const youliaoAnimation = ref({
		youliao: {
			action: {
				opacity: 1,
				rotateZ: 15,
				scaleX: 1.2,
				scaleY: 1.2,
			},
			duration: 500,
			sleep: 500,
			key: "youliao"
		},
		youliao1: {
			action: {
				rotateZ: -15,
				scaleX: 0.8,
				scaleY: 0.8,
			},
			duration: 200,
			sleep: 500,
			key: 'youliao'
		},
		youliao2: {
			action: {
				rotateZ: 0,
				scaleX: 1.0,
				scaleY: 1.0,
			},
			duration: 200,
			sleep: 500,
			key: 'youliao'
		},

	})
	const zhiyuAnimation = ref({
		zhiyu: {
			action: {
				opacity: 1,
				rotateZ: -15,
				scaleX: 1.2,
				scaleY: 1.2,
			},
			duration: 500,
			sleep: 500,
			key: "zhiyu"
		},
		zhiyu1: {
			action: {
				rotateZ: 15,
				scaleX: 0.8,
				scaleY: 0.8,
			},
			duration: 200,
			sleep: 500,
			key: 'zhiyu'
		},
		zhiyu2: {
			action: {
				rotateZ: 0,
				scaleX: 1.0,
				scaleY: 1.0,
			},
			duration: 200,
			sleep: 500,
			key: 'zhiyu'
		},
	})
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
				translateY: '-453rpx'
			},
			duration: 1000,
			sleep: 500,
			key: "title"
		},
		toRight: {
			action: {
				translateX: '790rpx'
			},
			duration: 1500,
			key: 'toRight'
		},
		toLeft: {
			action: {
				translateX: '-710rpx'
			},
			duration: 1500,
			sleep: 1000,
			key: 'toLeft'
		},
		toRight1: {
			action: {
				translateX: '820rpx'
			},
			duration: 500,
			key: 'toRight'
		},
		toLeft1: {
			action: {
				translateX: '-740rpx'
			},
			duration: 500,
			sleep: 500,
			key: 'toLeft'
		},
		toRight2: {
			action: {
				translateX: '790rpx'
			},
			duration: 500,
			key: 'toRight'
		},
		toLeft2: {
			action: {
				translateX: '-710rpx'
			},
			duration: 500,
			sleep: 500,
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
		},
		// xiongDa: {
		// 	action: {
		// 		translateX: '250rpx'
		// 	},
		// 	duration: 2000,
		// 	key: 'xiongDa'
		// },
		// xiongEr: {
		// 	action: {
		// 		translateX: '-250rpx'
		// 	},
		// 	duration: 2000,
		// 	sleep: 1500,
		// 	key: 'xiongEr'
		// },
		xiongDa1: {
			action: {
				translateX: '215rpx'
			},
			duration: 500,
			key: 'xiongDa'
		},
		xiongEr2: {
			action: {
				translateX: '-215rpx'
			},
			duration: 500,
			key: 'xiongEr'
		},
		or: {
			action: {
				opacity: 1,
				rotateZ: 15,
				scaleX: 1.2,
				scaleY: 1.2,
			},
			duration: 400,
			sleep: 500,
			key: 'or',
		},
		or1: {
			action: {
				rotateZ: -15,
				scaleX: 0.8,
				scaleY: 0.8,
			},
			duration: 200,
			sleep: 500,
			key: 'or'
		},
		or2: {
			action: {
				rotateZ: 0,
				scaleX: 1.0,
				scaleY: 1.0,
			},
			duration: 200,
			sleep: 500,
			key: 'or'
		},
	});


	const onNext = (type) => {
		console.log(1111, type)
		flag.value = type
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
		top: 685rpx;
		left: 100%;
		background: #99b4d3;
		-webkit-clip-path: polygon(0 0, 76% 0, 24% 100%, 0% 100%);
		clip-path: polygon(100% 0%, 100% 0%, -150% 100%, 100% 100%)
	}

	.text_youliao {
		position: absolute;
		top: 461rpx;
		left: 223rpx;
		font-size: 100rpx;
		color: #825D45;
		z-index: 2;
		opacity: 0;
		width: 447rpx;
		height: 139rpx;
	}

	.text_zhiyu {
		font-size: 100rpx;
		color: #B1D026;
		position: absolute;
		top: 956rpx;
		right: 225rpx;
		z-index: 2;
		opacity: 0;
		width: 447rpx;
		height: 145rpx;
	}

	.or {
		width: 292rpx;
		height: 171rpx;
		position: absolute;
		top: 699rpx;
		left: 226rpx;
		opacity: 0;
	}

	.box {
		position: fixed;
		left: 37rpx;
		width: 673rpx;
		height: 100vh;
		overflow: hidden;
		z-index: 3;
	}

	.xiongDa {
		width: 215rpx;
		height: 354rpx;
		position: absolute;
		top: 408rpx;
		left: calc(36rpx - 250rpx);
	}

	.xiongEr {
		width: 215rpx;
		height: 354rpx;
		position: absolute;
		top: 799rpx;
		right: calc(36rpx - 250rpx);
	}
</style>
