<template>
  <view class="main">
    <view class="full" @click="trigger" v-show="show"></view>
    <view class="box_warper">
      <view class="box top" :animation="animationData.top">
        <image :src="topBg" class="top-img" mode="aspectFill" />
        <image :src="yePng" class="top-img" mode="aspectFill" />
      </view>
      <view class="box bottom" :animation="animationData.bottom">
        <image :src="bottomBg" mode="aspectFill" class="bottom-img" width="100%" height="100%" />
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { sleep } from '@/utils/sleep'
import topBg from '@/static/img/page1/top-bg.png'
import bottomBg from '@/static/img/page1/bottom-bg.png'
import yePng from '@/static/img/page1/ye.gif'

const DURATION = 3500
const Y = 600

const animationOption: UniApp.CreateAnimationOptions = {
  duration: DURATION,
  timingFunction: 'ease',
}
const animationData = ref({
  top: '',
  bottom: '',
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
  await sleep(DURATION)
  //跳转第二个页面

}

setTimeout(async () => {
  await getAnimation(0, 0)
  //等待动画执行完毕
  await sleep(DURATION)
  show.value = true

}, 0)

</script>

<style>
.main {
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.full {
  position: absolute;
  z-index: 20;
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
  transform: translateY(400);
  z-index: 5;
  height: 65vh;
}

.bottom {

  z-index: 10;


}

.top-img {
  position: absolute;
  left: 0;
  right: 0;
}

.bottom-img {
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
