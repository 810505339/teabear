<template>
  <view class="main">
    <view class="full" @click.once="trigger" v-show="show"></view>
    <view class="box_warper">
      <view class="box top" :animation="animationData.top">
        <image :src="topBg" class="top-img" />
      </view>
      <image :src="yePng" class="ye" mode="aspectFill" :animation="animationData.top" />
      <image :src="ye2Png" :animation="animationData.top" class="ye2" />

      <view class="box bottom" :animation="animationData.bottom">
        <image :src="bottomBg" class="bottom-img" width="100%" height="100%" />
        <image :src="ye3Png" class="green-bar" width="100%" height="100%" />
        <image :src="greenBar" class="green-bar" width="100%" height="100%" />
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { sleep } from '@/utils/sleep'
import topBg from '@/static/img/page1/top-bg.png'
import bottomBg from '@/static/img/page1/bottom-bg.png'
import { onShow } from "@dcloudio/uni-app"
const yePng = 'http://s2ccxxdhp.bkt.clouddn.com/gif/ye.gif'
const ye2Png = 'http://s2ccxxdhp.bkt.clouddn.com/gif/ye2.gif'
const ye3Png = 'http://s2ccxxdhp.bkt.clouddn.com/gif/ye3.gif'
const greenBar = 'http://s2ccxxdhp.bkt.clouddn.com/gif/greenbar.gif'

//熊


const DURATION = 3500
const Y = 1000

const animationOption: UniApp.CreateAnimationOptions = {
  duration: DURATION,
  timingFunction: 'ease',
}
const animationData = ref({
  top: '',
  bottom: '',
  option: '',
})
const show = ref(false)

async function getAnimation(top: number, bottom: number) {
  const topAnimation = uni.createAnimation(animationOption)
  const bottomAnimation = uni.createAnimation(animationOption)
  topAnimation.translateY(top).step()
  bottomAnimation.translateY(bottom).step()
  animationData.value.top = topAnimation.export()
  animationData.value.bottom = bottomAnimation.export()
}



async function trigger() {
  console.log(`动画触发`)
  getAnimation(-Y, Y)
  //等待动画执行完毕
  await sleep(1000)

  //跳转第二个页面
  uni.navigateTo({
    url: '/pages/section/page2',
    animationType: 'none',
    animationDuration: 200
  })
}

setTimeout(async () => {
  show.value = true
}, 0)

onShow(() => {
  getAnimation(0, 0)
})

async function addUser() {
  const data = await wx.cloud.callFunction({
    name: "userManagerFun",
    config: {
      env: "test-3gszsltre96027e3",
    },
    data: {
      type: "addUser",
    },
  });
  console.log(data);
}

onMounted(async () => {
  await addUser();
});

</script>

<style>
.main {
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #FEFFE8;
}

.full {
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.box {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  height: 100vh;
}

.top {
  z-index: 5;
  height: 57vh;
}


.bottom {
  z-index: 10;
  position: absolute;
}

.top-img {
  position: absolute;
  left: 0;
  right: 0;
}

.ye {
  position: absolute;
  z-index: 40;
  top: 0rpx;
}

.ye2 {
  position: absolute;
  z-index: 70;
  top: 10rpx;
}

.bottom-img {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

.green-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

image {
  width: 100%;
  height: 100%;
}
</style>
