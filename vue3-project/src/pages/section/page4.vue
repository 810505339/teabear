<template>
  <view class="box">
    <!-- <image :src="bg" class="box-img" /> -->
    <button open-type="share">获取专属搜茶令</button>
    <text>{{ msg }}</text>
  </view>
</template>
<script setup lang="ts">
import bg from '@/static/img/page4/bg.png'
import { onShareAppMessage, onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'

const msg = ref('没分享')

onShareAppMessage((option) => {
  if (option.from === 'button') {// 来自页面内分享按钮
    handleShare()
  }
  return {
    title: '京牌搜茶令 全城寻找理想暖友',
    path: '/pages/section/page1',
    imageUrl: '',
  }
})



//
function handleShare() {
  //分享成功之后
  setTimeout(() => {
    uni.navigateTo({
      url: `/pages/section/login`,
      animationType: "none",
      animationDuration: 200,
    });
  }, 100)
}

</script>

<style scoped>
.box {
  height: 100vh;
  width: 100vw;
  position: relative;
}

.box-img {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1;
}

image {
  height: 100%;
  width: 100%;
}
</style>
