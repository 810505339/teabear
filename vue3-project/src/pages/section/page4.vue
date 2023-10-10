<template>
  <view class="box">
    <image :src="bg" class="box-img" />
  </view>
</template>
<script setup lang="ts">
import bg from '@/static/img/page4/bg.png'
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
