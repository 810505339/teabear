<template>
  <view class="main">
    <image :src="imageMap.bg" mode="cover" class="bg" />
    <image
      :src="imageMap.model_box"
      mode="cover"
      class="model_box"
      :animation="animationData.model_box"
    />
    <image
      :src="imageMap.text_1"
      mode="cover"
      class="text_1"
      :animation="animationData.text_1"
    />
    <image
      :src="imageMap.text_2"
      mode="cover"
      :style="{ width: type ? '329rpx' : '448rpx' }"
      class="text_2"
      :animation="animationData.text_2"
    />
    <image
      :src="imageMap.text_3"
      mode="cover"
      class="text_3"
      :animation="animationData.text_3"
    />
    <image
      :src="imageMap.ticket"
      mode="cover"
      class="ticket"
      :animation="animationData.ticket"
    />
    <image
      :src="imageMap.tips"
      mode="cover"
      class="tips"
      :animation="animationData.tips"
    />
    <image
      :src="imageMap.detail"
      mode="cover"
      class="detail"
      :animation="animationData.detail"
    />
    <image
      :src="imageMap.btn"
      mode="cover"
      class="btn"
      :animation="animationData.btn"
      @click="onNext"
    />
  </view>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { getAnimation } from "@/utils/until";
//绿色
import bg1 from "@/static/img/page3/bg.png";
import model_box1 from "@/static/img/page3/model_box.png";
import text_11 from "@/static/img/page3/text_1.png";
import text_21 from "@/static/img/page3/text_2.png";
import text_31 from "@/static/img/page3/text_3.png";
import ticket1 from "@/static/img/page3/ticket.png";
import tips1 from "@/static/img/page3/tips.png";
import detail1 from "@/static/img/page3/detail.png";
import btn1 from "@/static/img/page3/btn.png";
//棕色
import bg2 from "@/static/img/page3/bg2.png";
import model_box2 from "@/static/img/page3/model_box2.png";
import text_12 from "@/static/img/page3/text_12.png";
import text_22 from "@/static/img/page3/text_22.png";
import text_32 from "@/static/img/page3/text_32.png";
import ticket2 from "@/static/img/page3/ticket2.png";
import tips2 from "@/static/img/page3/tips2.png";
import detail2 from "@/static/img/page3/detail2.png";
import btn2 from "@/static/img/page3/btn2.png";

import { onLoad } from "@dcloudio/uni-app";
let timer1: any = null;

onLoad((option) => {
  const v = option?.flag == 2;
  type.value = v;
  const data: any = {
    bg: v ? bg1 : bg2,
    model_box: v ? model_box1 : model_box2,
    text_1: v ? text_11 : text_12,
    text_2: v ? text_21 : text_22,
    text_3: v ? text_31 : text_32,
    ticket: v ? ticket1 : ticket2,
    tips: v ? tips1 : tips2,
    detail: v ? detail1 : detail2,
    btn: v ? btn1 : btn2,
  };
  Object.entries(data).forEach((t: any) => {
    imageMap.value[t[0]] = data[t[0]];
  });
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

const type = ref(false);
const imageMap = ref<any>({
  bg: bg2,
  model_box: model_box2,
  text_1: text_12,
  text_2: text_22,
  text_3: text_32,
  ticket: ticket2,
  tips: tips2,
  detail: detail2,
  btn: btn2,
});
const btnAnimationData = {
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
};
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

const animationStep = {
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
};
const onNext = () => {
  //跳转地图页面


  uni.navigateToMiniProgram({ //这里用uniapp的跳转方法，原生应该是wx.navigateToMiniProgram
		  appId: 'wxc40b30e697a8a0a2',
      path:'pages/promotion-coupon/promotion-coupon?id=69735',//这里的appid为目标小程序的appid，此处为携程小程序
		  success(res) {
		  		// 打开成功
			   console.log(res)
		  },
		  fail(err){
		  		// 打开失败	
			  console.log(err)
		  }
		})

  uni.navigateTo({
    url: "/pages/section/page4",
    animationType: "none",
    animationDuration: 200,
  });
};
</script>
<style>
.main {
  width: 100%;
  min-height: 100vh;
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
