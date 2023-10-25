<template>
  <view class="main">
    <image :src="bg" mode="cover" class="bg" />
    <view>
      <view class="head" :animation="animationData.title">
        <image :src="log" mode="cover" class="log" />
        <image :src="slogan" mode="cover" class="slogan" />
      </view>
      <image
        :src="youliao"
        mode="cover"
        class="text_youliao"
        :animation="animationData.youliao"
      />
      <image
        :src="youliao_bg"
        mode="cover"
        class="youliao_bg"
        :animation="animationData.youliao"
      />
      <image
        :src="zhiyu"
        mode="cover"
        class="text_zhiyu"
        :animation="animationData.zhiyu"
      />
      <image
        :src="zhiyu_bg"
        mode="cover"
        class="zhiyu_bg"
        :animation="animationData.zhiyu"
      />
      <image
        :src="to_right"
        mode="cover"
        class="to_right"
        :animation="animationData.toRight"
      />
      <image
        :src="to_left"
        mode="cover"
        class="to_left"
        :animation="animationData.toLeft"
      />
      <view
        class="to_right_click"
        :style="{ display: flag > -1 ? 'block' : 'none' }"
        @click="onNext(1)"
      ></view>
      <view
        class="to_left_click"
        :style="{ display: flag > -1 ? 'block' : 'none' }"
        @click="onNext(2)"
      ></view>
      <image :src="or" mode="cover" class="or" :animation="animationData.or" />
      <view class="box">
        <image
          :src="xiongDa"
          mode="cover"
          class="xiongDa"
          :animation="animationData.xiongDa"
        />
        <image
          :src="xiongEr"
          mode="cover"
          class="xiongEr"
          :animation="animationData.xiongEr"
        />
      </view>
      <image
        :src="leaf_1"
        mode="cover"
        class="leaf_1"
        :animation="animationData.leaf_1"
      />
      <image
        :src="leaf_2"
        mode="cover"
        class="leaf_2"
        :animation="animationData.leaf_2"
      />
      <image
        :src="leaf_3"
        mode="cover"
        class="leaf_3"
        :animation="animationData.leaf_3"
      />
      <image
        :src="leaf_4"
        mode="cover"
        class="leaf_4"
        :animation="animationData.leaf_4"
      />
      <image
        :src="leaf_5"
        mode="cover"
        class="leaf_5"
        :animation="animationData.leaf_5"
      />
      <image
        :src="leaf_6"
        mode="cover"
        class="leaf_6"
        :animation="animationData.leaf_6"
      />
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { getAnimation } from "@/utils/until";
import bg from "@/static/img/page2/bg.png";
import log from "@/static/img/page2/log.png";
import slogan from "@/static/img/page2/slogan.png";
import to_right from "@/static/img/page2/to_right.png";
import to_left from "@/static/img/page2/to_left.png";
import youliao from "@/static/img/page2/youliao.png";
import zhiyu from "@/static/img/page2/zhiyu.png";
import youliao_bg from "@/static/img/page2/youliao_bg.png";
import zhiyu_bg from "@/static/img/page2/zhiyu_bg.png";
import xiongDa from "@/static/img/page2/xiong1.png";
import xiongEr from "@/static/img/page2/xiong2.png";
import or from "@/static/img/page2/or.png";
import leaf_1 from "@/static/img/page2/leaf_1.png";
import leaf_2 from "@/static/img/page2/leaf_2.png";
import leaf_3 from "@/static/img/page2/leaf_3.png";
import leaf_4 from "@/static/img/page2/leaf_4.png";
import leaf_5 from "@/static/img/page2/leaf_5.png";
import leaf_6 from "@/static/img/page2/leaf_6.png";
let timer1: any = null;

onMounted(async () => {
  await getAnimation(animationStep, animationData);
  flag.value = 0;
  await getAnimation(youliaoAnimation, animationData);
  timer1 = setInterval(async () => {
    await getAnimation(youliaoAnimation, animationData);
    await getAnimation(zhiyuAnimation, animationData);
  }, 3500);
  getAnimation(zhiyuAnimation, animationData);
});
onBeforeUnmount(() => {
  clearInterval(timer1);
});

const flag = ref(-1);
const animationData = ref({
  title: "",
  toRight: "",
  toLeft: "",
  youliao: "",
  zhiyu: "",
  xiongDa: "",
  xiongEr: "",
  or: "",
  leaf_1: "",
  leaf_2: "",
  leaf_3: "",
  leaf_4: "",
  leaf_5: "",
  leaf_6: "",
});
const youliaoAnimation = {
  youliao: {
    action: {
      opacity: 1,
      rotateZ: 15,
      scaleX: 1.2,
      scaleY: 1.2,
    },
    duration: 500,
    sleep: 500,
    key: "youliao",
  },
  youliao1: {
    action: {
      rotateZ: -15,
      scaleX: 0.8,
      scaleY: 0.8,
    },
    duration: 200,
    sleep: 500,
    key: "youliao",
  },
  youliao2: {
    action: {
      rotateZ: 0,
      scaleX: 1.0,
      scaleY: 1.0,
    },
    duration: 200,
    sleep: 500,
    key: "youliao",
  },
};
const zhiyuAnimation = {
  zhiyu: {
    action: {
      opacity: 1,
      rotateZ: -15,
      scaleX: 1.2,
      scaleY: 1.2,
    },
    duration: 500,
    sleep: 500,
    key: "zhiyu",
  },
  zhiyu1: {
    action: {
      rotateZ: 15,
      scaleX: 0.8,
      scaleY: 0.8,
    },
    duration: 200,
    sleep: 500,
    key: "zhiyu",
  },
  zhiyu2: {
    action: {
      rotateZ: 0,
      scaleX: 1.0,
      scaleY: 1.0,
    },
    duration: 200,
    sleep: 500,
    key: "zhiyu",
  },
};
const animationStep = {
  titleShow: {
    action: {
      opacity: 1,
    },
    duration: 3000,
    sleep: 3000,
    key: "title",
  },
  titleMove: {
    action: {
      translateY: "-453rpx",
    },
    duration: 1000,
    sleep: 500,
    key: "title",
  },
  toRight: {
    action: {
      translateX: "790rpx",
    },
    duration: 1500,
    key: "toRight",
  },
  toLeft: {
    action: {
      translateX: "-710rpx",
    },
    duration: 1500,
    sleep: 1000,
    key: "toLeft",
  },
  toRight1: {
    action: {
      translateX: "820rpx",
    },
    duration: 500,
    key: "toRight",
  },
  toLeft1: {
    action: {
      translateX: "-740rpx",
    },
    duration: 500,
    sleep: 500,
    key: "toLeft",
  },
  toRight2: {
    action: {
      translateX: "790rpx",
    },
    duration: 500,
    key: "toRight",
  },
  toLeft2: {
    action: {
      translateX: "-710rpx",
    },
    duration: 500,
    sleep: 500,
    key: "toLeft",
  },
  youliao: {
    action: {
      opacity: 1,
    },
    duration: 3000,
    key: "youliao",
  },
  zhiyu: {
    action: {
      opacity: 1,
    },
    duration: 3000,
    key: "zhiyu",
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
      translateX: "215rpx",
    },
    duration: 500,
    key: "xiongDa",
  },
  xiongEr2: {
    action: {
      translateX: "-215rpx",
    },
    duration: 500,
    key: "xiongEr",
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
    key: "or",
  },
  or1: {
    action: {
      rotateZ: -15,
      scaleX: 0.8,
      scaleY: 0.8,
    },
    duration: 200,
    sleep: 500,
    key: "or",
  },
  or2: {
    action: {
      rotateZ: 0,
      scaleX: 1.0,
      scaleY: 1.0,
    },
    duration: 200,
    // sleep: 500,
    key: "or",
  },
  leaf_1: {
    action: {
      opacity: 1,
    },
    duration: 3000,
    key: "leaf_1",
  },
  leaf_2: {
    action: {
      opacity: 1,
    },
    duration: 3000,
    key: "leaf_2",
  },
  leaf_3: {
    action: {
      opacity: 1,
    },
    duration: 3000,
    key: "leaf_3",
  },
  leaf_4: {
    action: {
      opacity: 1,
    },
    duration: 3000,
    key: "leaf_4",
  },
  leaf_5: {
    action: {
      opacity: 1,
    },
    duration: 3000,
    key: "leaf_5",
  },
  leaf_6: {
    action: {
      opacity: 1,
    },
    duration: 3000,
    key: "leaf_6",
  },
};

const onNext = (type: any) => {
  flag.value = type;

  //跳转领券页面
  uni.navigateTo({
    url: "/pages/section/page3?flag=" + type,
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

.head {
  opacity: 0;
  position: absolute;
  top: calc((100% - 508rpx) / 2);
  left: calc((100% - 676rpx) / 2);
  width: 676rpx;
  height: 508rpx;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}

.log {
  width: 98rpx;
  height: 117rpx;
  text-align: center;
  z-index: 2;
}

.slogan {
  margin-top: 20rpx;
  width: 381rpx;
  height: 136rpx;
  text-align: center;
}

.to_right {
  width: 665rpx;
  height: 518rpx;
  position: absolute;
  top: 341rpx;
  left: -100%;
  /* background: #feffe8; */
  -webkit-clip-path: polygon(0 0, 76% 0, 24% 100%, 0% 100%);
  clip-path: polygon(0 0, 250% 0, 0% 100%, 0% 100%);
}

.to_left {
  width: 665rpx;
  height: 518rpx;
  position: absolute;
  top: 685rpx;
  left: 100%;
  /* background: #feffe8; */
  -webkit-clip-path: polygon(0 0, 76% 0, 24% 100%, 0% 100%);
  clip-path: polygon(100% 0%, 100% 0%, -150% 100%, 100% 100%);
}
.to_right_click {
  width: 665rpx;
  height: 448rpx;
  position: absolute;
  top: 341rpx;
  z-index: 20;
  left: calc(790rpx - 100%);
}
.to_left_click {
  width: 665rpx;
  height: 448rpx;
  position: absolute;
  top: 790rpx;
  z-index: 20;
  left: calc(100% - 710rpx);
}
.text_youliao {
  position: absolute;
  top: 481rpx;
  left: 261rpx;
  color: #825d45;
  z-index: 2;
  opacity: 0;
  width: 418rpx;
  height: 110rpx;
}
.youliao_bg {
  position: absolute;
  top: 552rpx;
  left: 261rpx;
  color: #825d45;
  z-index: 1;
  opacity: 0;
  width: 424rpx;
  height: 45rpx;
}
.text_zhiyu {
  color: #b1d026;
  position: absolute;
  top: 976rpx;
  right: 247rpx;
  z-index: 2;
  opacity: 0;
  width: 418rpx;
  height: 110rpx;
}
.zhiyu_bg {
  color: #b1d026;
  position: absolute;
  top: 1042rpx;
  right: 244rpx;
  z-index: 1;
  opacity: 0;
  width: 424rpx;
  height: 45rpx;
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
  position: absolute;
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

.leaf_1 {
  width: 202rpx;
  height: 213rpx;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  opacity: 0;
}
.leaf_2 {
  width: 115rpx;
  height: 107rpx;
  position: absolute;
  top: 183rpx;
  left: 609rpx;
  z-index: 5;
  opacity: 0;
}
.leaf_3 {
  width: 68rpx;
  height: 65rpx;
  position: absolute;
  top: 301rpx;
  left: 607rpx;
  z-index: 5;
  opacity: 0;
}
.leaf_4 {
  width: 256rpx;
  height: 241rpx;
  position: absolute;
  top: 1067rpx;
  left: 22rpx;
  z-index: 5;
  opacity: 0;
}
.leaf_5 {
  width: 105rpx;
  height: 113rpx;
  position: absolute;
  top: 1188rpx;
  left: 399rpx;
  z-index: 5;
  opacity: 0;
}
.leaf_6 {
  width: 200rpx;
  height: 206rpx;
  position: absolute;
  top: 1127rpx;
  left: 524rpx;
  z-index: 5;
  opacity: 0;
}
</style>
