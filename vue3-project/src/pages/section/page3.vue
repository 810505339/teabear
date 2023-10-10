<template>
  <view class="main">
    <image :src="bg" mode="cover" class="bg" />
    <image
      :src="model_box"
      mode="cover"
      class="model_box"
      :animation="animationData.model_box"
    />
    <image
      :src="text_1"
      mode="cover"
      class="text_1"
      :animation="animationData.text_1"
    />
    <image
      :src="text_2"
      mode="cover"
      class="text_2"
      :animation="animationData.text_2"
    />
    <image
      :src="text_3"
      mode="cover"
      class="text_3"
      :animation="animationData.text_3"
    />
    <image
      :src="ticket"
      mode="cover"
      class="ticket"
      :animation="animationData.ticket"
    />
    <image
      :src="tips"
      mode="cover"
      class="tips"
      :animation="animationData.tips"
    />
    <image
      :src="detail"
      mode="cover"
      class="detail"
      :animation="animationData.detail"
    />
    <image :src="btn" mode="cover" class="btn" :animation="animationData.btn" />
  </view>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { getAnimation } from "@/utils/until.js";
import { sleep } from "@/utils/sleep";
import bg from "@/static/img/page3/bg.png";
import model_box from "@/static/img/page3/model_box.png";
import text_1 from "@/static/img/page3/text_1.png";
import text_2 from "@/static/img/page3/text_2.png";
import text_3 from "@/static/img/page3/text_3.png";
import ticket from "@/static/img/page3/ticket.png";
import tips from "@/static/img/page3/tips.png";
import detail from "@/static/img/page3/detail.png";
import btn from "@/static/img/page3/btn.png";

import { onLoad } from "@dcloudio/uni-app";
let timer1: any = null;
onLoad((option) => {
  console.log(option);
  type.value = option?.flag;
});
onMounted(async () => {
  await getAnimation(animationStep, animationData);
  timer1 = setInterval(async () => {
    await getAnimation(btnAnimationData, animationData);
  }, 2000);
});
onBeforeUnmount(() => {
  clearInterval(timer1);
});

const type = ref();
const btnAnimationData = ref({
  btn1: {
    action: {
      opacity: 1,
      rotateZ: 15,
      scaleX: 1.2,
      scaleY: 1.2,
    },
    duration: 500,
    sleep: 500,
    key: "btn",
  },
  btn2: {
    action: {
      rotateZ: -10,
      scaleX: 0.8,
      scaleY: 0.8,
    },
    duration: 200,
    sleep: 500,
    key: "btn",
  },
  btn3: {
    action: {
      rotateZ: 0,
      scaleX: 1.0,
      scaleY: 1.0,
    },
    duration: 200,
    sleep: 500,
    key: "btn",
  },
});
const animationData = ref({
  model_box: "",
  text_1: "",
  text_2: "",
  text_3: "",
  ticket: "",
  tips: "",
  detail: "",
  btn: "",
});

const animationStep = ref({
  ticket_move: {
    action: {
      translateY: "100rpx",
    },
    duration: 1000,
    sleep: 1000,
    key: "ticket",
  },
  ticket_move2: {
    action: {
      translateX: "750rpx",
    },
    duration: 1000,
    sleep: 200,
    key: "ticket",
  },
  model_box: {
    action: {
      opacity: 1,
    },
    duration: 3000,
    sleep: 1000,
    key: "model_box",
  },
  model_box1: {
    action: {
      translateY: "-50rpx",
    },
    duration: 2000,
    sleep: 500,
    key: "model_box",
  },
  text_1_show: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    // sleep: 200,
    key: "text_1",
  },
  text_1_move: {
    action: {
      translateY: "-30rpx",
    },
    duration: 1000,
    sleep: 1000,
    key: "text_1",
  },
  text_2_show: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    // sleep: 200,
    key: "text_2",
  },
  text_2_move: {
    action: {
      translateY: "-30rpx",
    },
    duration: 1000,
    sleep: 1000,
    key: "text_2",
  },
  text_3_show: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    // sleep:200,
    key: "text_3",
  },
  text_3_move: {
    action: {
      translateY: "-30rpx",
    },
    duration: 1000,
    sleep: 1000,
    key: "text_3",
  },
  tips: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    key: "tips",
  },
  detail: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    key: "detail",
  },
  btn: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    sleep: 1000,
    key: "btn",
  },
});
</script>
<style>
.main {
  width: 100%;
  height: 1333rpx;
  position: absolute;
  top: 0;
  left: 0;
}
.bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.model_box {
  width: 727rpx;
  height: 553rpx;
  position: absolute;
  top: 100rpx;
  left: 18rpx;
  opacity: 0;
}
.text_1 {
  width: 404rpx;
  height: 38rpx;
  position: absolute;
  top: 234rpx;
  left: 86rpx;
  opacity: 0;
}
.text_2 {
  width: 329rpx;
  height: 38rpx;
  position: absolute;
  top: 297rpx;
  left: 138rpx;
  opacity: 0;
}
.text_3 {
  width: 568rpx;
  height: 38rpx;
  position: absolute;
  top: 361rpx;
  left: 84rpx;
  opacity: 0;
}
.ticket {
  width: 100%;
  height: 713rpx;
  position: absolute;
  top: 411rpx;
  left: -100%;
}
.tips {
  width: 144rpx;
  height: 45rpx;
  position: absolute;
  top: 965rpx;
  left: 44rpx;
  opacity: 0;
}
.detail {
  width: 431rpx;
  height: 161rpx;
  position: absolute;
  top: 1097rpx;
  left: 20rpx;
  opacity: 0;
}
.btn {
  width: 250rpx;
  height: 146rpx;
  position: absolute;
  top: 1140rpx;
  left: 486rpx;
  opacity: 0;
}
</style>
