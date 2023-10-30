<template>
  <view class="box-wrap">
    <view class="box" :style="{ display: show ? 'block' : 'none' }">
      <image :src="bg" class="box-img" />
      <image :src="bear" class="bear" />
      <image :src="soucha" class="soucha" />
      <image :src="bearBg" class="bear-bg" />
      <image :src="bearHeaderBg" class="bear-header-bg" />
      <image :src="gaoji" class="gaoji" />

      <image :src="sign" class="sign" />
      <image :src="bearBottom" class="bea-bottom" />
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import bg from "@/static/img/page5/bg.png";
import bear from "@/static/img/page5/bear.png";
import soucha from "@/static/img/page5/soucha.png";
import bearBg from "@/static/img/page5/bear-bg.png";
import bearHeaderBg from "@/static/img/page5/bear-header.png";
import gaoji from '@/static/img/page5/gaoji.png'

import sign from "@/static/img/page5/sign.png";
import bearBottom from "@/static/img/page5/bear-bottom.png";
onLoad((option) => {
  show.value = true;
});
const show = ref(false);
</script>

<style scoped>
.box {
  height: 100vh;
  width: 100vw;
  position: relative;
}

.bear {
  position: absolute;
  width: 107.64rpx;
  height: 128.47rpx;
  top: 21rpx;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
}

.gaoji {
  position: absolute;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  width: 240.97rpx;
  height: 55.56rpx;
  bottom: 232rpx;
}

.soucha {
  position: absolute;
  width: 619.44rpx;
  height: 247.22rpx;
  top: 184rpx;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
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
  width: 750rpx;
  top: 300rpx;
  height: calc(100vh - 320rpx);
  bottom: 20rpx;
}

.bear-header-bg {
  position: absolute;
  z-index: 20;
  top: 530rpx;
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
  left: 50%;
  transform: translateX(-50%);
  width:
    202.08rpx;
  height: 110.42rpx;
  bottom: 65rpx;
}
</style>
