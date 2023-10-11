<template>
  <view class="box-wrap">
    <!-- <button open-type="share" class="share">分享</button> -->
    <view class="box">
      <image :src="bg" class="box-img" />
      <image :src="bearBg" class="bear-bg" />
      <image :src="bearHeaderBg" class="bear-header-bg" />
      <image :src="idCard" class="id-card" />
      <image :src="sign" class="sign" />
      <image :src="bearBottom" class="bea-bottom" />
    </view>
  </view>
</template>
<script setup lang="ts">
import bg from '@/static/img/page5/bg.png'
import bearBg from '@/static/img/page5/bear-bg.png'
import bearHeaderBg from '@/static/img/page5/bear-header.png'
import idCard from '@/static/img/page5/id-card.png'
import sign from '@/static/img/page5/sign.png'
import bearBottom from '@/static/img/page5/bear-bottom.png'
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

}

image {
  height: 100%;
  width: 100%;
}

.bear-bg {
  position: absolute;
  z-index: 10;
  height: calc(100vh - 160rpx);
  top: 80rpx;
}

.bear-header-bg {
  position: absolute;
  z-index: 20;
  top: 27.5%;
  left: 100rpx;
  right: 100rpx;
  width: 550rpx;
  height: 550rpx;

}

.id-card {
  position: absolute;
  z-index: 20;
  top: 28%;
  width: 120rpx;
  height: 24rpx;
  left: 25rpx;
}

.sign {
  position: absolute;
  z-index: 30;
  right: 42rpx;
  width: 257rpx;
  height: 208rpx;
  bottom: 467rpx;

}

.bea-bottom {
  position: absolute;
  z-index: 30;
  right: 150rpx;
  width: 328rpx;
  height: 338rpx;
  bottom: 100rpx;
 
}
</style>
