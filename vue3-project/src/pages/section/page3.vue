<template>
  <view class="main">
    <image :src="imageMap.bg" class="bg" />
    <image :src="imageMap.model_box" mode="cover" class="model_box" :animation="animationData.model_box" />
    <image :src="imageMap.text_1" mode="cover" class="text_1" :animation="animationData.text_1" />
    <image :src="imageMap.text_2" mode="cover"  class="text_2"
      :animation="animationData.text_2" />
    <image :src="imageMap.text_3" mode="cover" class="text_3" :animation="animationData.text_3" />
    <image :src="imageMap.text_4" mode="cover" class="text_4" :animation="animationData.text_4" />
    <image :src="imageMap.ticket" mode="cover" class="ticket" :animation="animationData.ticket" @click="redirect" :style="type
      ? {
        width: '758rpx',
      }
      : {}
      " />
    <image :src="imageMap.tips" mode="cover" class="tips" :animation="animationData.tips" />
    <image :src="imageMap.detail" mode="cover" class="detail" :animation="animationData.detail" />
    <image :src="imageMap.cup" mode="cover" class="cup" :style="type
      ? {}
      : {
        width: '98rpx',
        height: '128rpx',
      }
      " :animation="animationData.cup" />
    <image :src="imageMap.leaf" mode="cover" class="leaf" :style="type
      ? {}
      : {
        width: '246rpx',
        height: '254rpx',
      }
      " :animation="animationData.leaf" />
    <image :src="imageMap.btn" mode="cover" class="btn" :animation="animationData.btn" @click="onNext" />
    <view class="userNumber" :style="{
      color: type ? '#9db01f' : '#AD7559',
      background: type ? '#FFFFE3' : '#FFF6E1',
    }" :animation="animationData.userNumber">{{ userNumber }}</view>
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
import text_41 from "@/static/img/page3/text_4.png";
import ticket1 from "@/static/img/page3/ticket.png";
import tips1 from "@/static/img/page3/tips.png";
import detail1 from "@/static/img/page3/detail.png";
import btn1 from "@/static/img/page3/btn.png";
import leaf1 from "@/static/img/page3/leaf.png";
import cup1 from "@/static/img/page3/cup.png";
//棕色
import bg2 from "@/static/img/page3/bg2.png";
import model_box2 from "@/static/img/page3/model_box2.png";
import text_12 from "@/static/img/page3/text_12.png";
import text_22 from "@/static/img/page3/text_22.png";
import text_32 from "@/static/img/page3/text_32.png";
import text_42 from "@/static/img/page3/text_42.png";
import ticket2 from "@/static/img/page3/ticket2.png";
import tips2 from "@/static/img/page3/tips2.png";
import detail2 from "@/static/img/page3/detail2.png";
import btn2 from "@/static/img/page3/btn2.png";
import leaf2 from "@/static/img/page3/leaf2.png";
import cup2 from "@/static/img/page3/cup2.png";

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
    text_4: v ? text_41 : text_42,
    ticket: v ? ticket1 : ticket2,
    tips: v ? tips1 : tips2,
    detail: v ? detail1 : detail2,
    btn: v ? btn1 : btn2,
    leaf: v ? leaf1 : leaf2,
    cup: v ? cup1 : cup2,
  };
  Object.keys(data).forEach((t: any) => {
    imageMap.value[t] = data[t];
  });
});
onMounted(async () => {
  findUser();
  await getAnimation(animationStep, animationData);
  timer1 = setInterval(async () => {
    await getAnimation(btnAnimationData, animationData);
  }, 2000);
});
onBeforeUnmount(() => {
  clearInterval(timer1);
});
function padWithZeros(number) {
  var str = number.toString();
  while (str.length < 4) {
    str = "0" + str;
  }
  return str;
}
async function findUser() {
  // uni.showLoading();
  const res = await wx.cloud.callFunction({
    name: "userManagerFun",
    config: {
      env: "test-3gszsltre96027e3",
    },
    data: {
      type: "findUser",
    },
  });
  if (res?.result?.success) {
    const num = res?.result?.user?.index;
    //大于1000活动截止
    if (num > 1000) {
      isOver.value = false;
      uni.showModal({
        title: "提示",
        content: "抱歉 该券已经领取完了~",
        confirmText: "确认",
        showCancel: false,
        confirmColor: type.value ? "#C7E12D" : "#FFC127",
      });
    } else {
      isOver.value = true;
    }
    userNumber.value = padWithZeros(num);
  } else {
    uni.showToast({
      title: "获取用户ID失败",
      icon: "error",
      duration: 2000,
    });
  }
  console.log(res);
  //uni.hideLoading();
}
const userNumber = ref("");
const isOver = ref(true);
const type = ref(false);
const imageMap = ref<any>({
  // bg: bg2,
  // model_box: model_box2,
  // text_1: text_12,
  // text_2: text_22,
  // text_3: text_32,
  // ticket: ticket2,
  // tips: tips2,
  // detail: detail2,
  // btn: btn2,
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
  text_4: "",
  ticket: "",
  tips: "",
  detail: "",
  btn: "",
  cup: "",
  leaf: "",
  userNumber: "",
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
  userNumber: {
    action: {
      opacity: 1,
    },
    duration: 500,
    key: "userNumber",
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
    sleep: 200,
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
    sleep: 200,
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
    sleep: 200,
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
  text_4_show: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    sleep: 200,
    key: "text_4",
  },
  text_4_move: {
    action: {
      translateY: "-30rpx",
    },
    duration: 1000,
    sleep: 1000,
    key: "text_4",
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
    // sleep: 1000,
    key: "btn",
  },
  cup: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    key: "cup",
  },
  leaf: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    sleep: 1000,
    key: "leaf",
  },
};
const redirect = () => {
  if (!isOver.value) return;
  console.log(1);
  uni.navigateToMiniProgram({
    //这里用uniapp的跳转方法，原生应该是wx.navigateToMiniProgram
    appId: "wxc40b30e697a8a0a2",
    path: "pages/promotion-coupon/promotion-coupon?id=69735", //这里的appid为目标小程序的appid，此处为携程小程序
    success(res) {
      // 打开成功
      console.log(res);
    },
    fail(err) {
      // 打开失败
      console.log(err);
    },
  });
};
const onNext = () => {
  //跳转地图页面
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
  position: relative;
  top: 0;
  left: 0;
}

.bg {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
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
  width: 582rpx;
  height: 39rpx;
  position: absolute;
  z-index: 100;
  top: 200rpx;
  left: 100rpx;
  opacity: 0;
}

.text_2 {
  width: 533rpx;
  height: 38rpx;
  position: absolute;
  top: 260rpx;
  z-index: 100;
  left: 100rpx;
  opacity: 0;
}

.text_3 {
  width: 543rpx;
  height: 39rpx;
  z-index: 100;
  position: absolute;
  top: 320rpx;
  left: 100rpx;
  opacity: 0;
}

.text_4 {
  width: 343rpx;
  height: 36rpx;
  z-index: 100;
  position: absolute;
  top: 380rpx;
  left: 100rpx;
  opacity: 0;
}

.ticket {
  width: 752rpx;
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
  width: 316rpx;
  height:136rpx;
  position: absolute;
  top: 1143rpx;
  left: 21rpx;
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

.cup {
  width: 89rpx;
  height: 90rpx;
  position: absolute;
  top: 1090rpx;
  left: 353rpx;
  opacity: 0;
}

.leaf {
  width: 200rpx;
  height: 190rpx;
  position: absolute;
  top: 406rpx;
  left: 18rpx;
  opacity: 0;
}

.userNumber {
  font-size: 25rpx;
  transform: rotateZ(15deg);
  position: absolute;
  width: 65rpx;
  height: 30rpx;
  top: 1020rpx;
  left: 450rpx;
  font-weight: bold;
  opacity: 0;
}

image {
  width: 100%;
  height: 100%;
}
</style>
