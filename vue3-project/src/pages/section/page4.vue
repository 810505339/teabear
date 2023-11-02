<template>
  <view class="main">
    <image :src="item == 'rule_model' ? 'http://s3hhcuo5k.bkt.clouddn.com/img/rule_model.png' : `/static/img/page4/${item}.png`" :class="item"
      v-for="(item, index) in imageList" :style="{ display: item == 'rule_model' && !show ? 'none' : 'block' }"
      :key="index" @click="
        item == 'rule' || item == 'rule_model' ? showModel() : closeModel(item)
        " :animation="animationData[item]" />
    <button open-type="share" class="share"></button>
  </view>
</template>
<script setup lang="ts">
import { onShareAppMessage } from "@dcloudio/uni-app";
import { ref, onMounted, onBeforeUnmount, reactive } from "vue";
import { getAnimation } from "@/utils/until";

onShareAppMessage((res) => {
  //   if (res.from === "button") {
  //     // 来自页面内分享按钮
  //     console.log(11, res.target);
  //   }

  setTimeout(() => {
    uni.navigateTo({
      url: "/pages/section/page5",
      animationType: "none",
      animationDuration: 200,
    });
  }, 200);
  return {
    title: "生成搜茶令",
    path: "/pages/section/page1?ok=true",
  };
});

let timer1: any = null,
  timer2: any = null;
onMounted(async () => {
  await getAnimation(animationStep, animationData);
  timer1 = setInterval(async () => {
    await getAnimation(xiongAnimation(1), animationData);
    await getAnimation(xiongAnimation(2), animationData);
    await getAnimation(xiongAnimation(3), animationData);
    await getAnimation(xiongAnimation(4), animationData);
  }, 8000);
  await getAnimation(xiongAnimation(1), animationData);
  await getAnimation(xiongAnimation(2), animationData);
  await getAnimation(xiongAnimation(3), animationData);
  await getAnimation(xiongAnimation(4), animationData);
});
const show = ref(false);
onBeforeUnmount(() => {
  clearInterval(timer1);
});
//弹窗 动画
const showModel = async () => {
  clearTimeout(timer2);
  show.value = true;
  await getAnimation(ruleAnimation(1), animationData);
};
const closeModel = async (key) => {
  clearTimeout(timer2);
  //跳转
  //   if (key == "btn") {
  //     uni.navigateTo({
  //       url: "/pages/section/page5",
  //       animationType: "none",
  //       animationDuration: 200,
  //     });
  //     return;
  //   }
  await getAnimation(ruleAnimation(0), animationData);
  timer2 = setTimeout(() => {
    show.value = false;
  }, 2000);
};
const ruleAnimation = (number) => {
  return {
    rule_model: {
      action: {
        opacity: number,
      },
      duration: 2000,
      sleep: 2000,
      key: "rule_model",
    },
  };
};

const xiongAnimation = (index: number) => {
  return {
    xiongShow: {
      action: {
        opacity: 1,
      },
      duration: 2000,
      sleep: 10,
      key: "xiong" + index,
    },
    xiongMove: {
      action: {
        translateY: "-30rpx",
      },
      duration: 2000,
      sleep: 2000,
      key: "xiong" + index,
    },
    xiongShow2: {
      action: {
        opacity: 0.8,
      },
      duration: 2000,
      key: "xiong" + index,
    },
    xiongMove2: {
      action: {
        translateY: 0,
      },
      duration: 2000,
      sleep: 2000,
      key: "xiong" + index,
    },
  };
};
const animationStep = {
  title: {
    action: {
      opacity: 1,
    },
    duration: 3000,
    key: "title",
  },
  position: {
    action: {
      opacity: 1,
    },
    duration: 500,
    sleep: 500,
    key: "position",
  },
  position1: {
    action: {
      top: "157rpx",
    },
    duration: 500,
    sleep: 500,
    key: "position",
  },
  position22: {
    action: {
      top: "137rpx",
    },
    duration: 500,
    key: "position",
  },
  tips: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    sleep: 200,
    key: "tips",
  },
  tips1: {
    action: {
      translateX: "690rpx",
    },
    duration: 1000,
    sleep: 1000,
    key: "tips",
  },
  // line: {
  //   action: {
  //     opacity: 1,
  //   },
  //   duration: 1000,
  //   key: "line",
  // },
  map: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    sleep: 1000,
    key: "map",
  },
  video: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    key: "video",
  },
  city: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    key: "city",
  },
  cup1: {
    action: {
      opacity: 1,
    },
    duration: 500,
    sleep: 20,
    key: "cup1",
  },
  cup11: {
    action: {
      top: "459rpx",
    },
    duration: 300,
    sleep: 300,
    key: "cup1",
  },
  cup12: {
    action: {
      top: "439rpx",
    },
    duration: 500,
    key: "cup1",
  },
  cup2: {
    action: {
      opacity: 1,
    },
    duration: 500,
    sleep: 10,
    key: "cup2",
  },
  cup21: {
    action: {
      top: "588rpx",
    },
    duration: 300,
    sleep: 300,
    key: "cup2",
  },
  cup22: {
    action: {
      top: "568rpx",
    },
    duration: 500,
    key: "cup2",
  },
  cup3: {
    action: {
      opacity: 1,
    },
    duration: 500,
    sleep: 10,
    key: "cup3",
  },
  cup31: {
    action: {
      top: "467rpx",
    },
    duration: 300,
    sleep: 300,
    key: "cup3",
  },
  cup32: {
    action: {
      top: "447rpx",
    },
    duration: 500,
    sleep: 300,
    key: "cup3",
  },
  siji: {
    action: {
      rotateX: 0,
    },
    duration: 300,
    sleep: 20,
    key: "siji",
  },
  siji1: {
    action: {
      top: "361rpx",
    },
    duration: 400,
    key: "siji",
  },
  chaoyang: {
    action: {
      rotateX: 0,
    },
    duration: 1000,
    sleep: 1000,
    key: "chaoyang",
  },
  rule: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    key: "rule",
  },
  time: {
    action: {
      opacity: 1,
    },
    duration: 2000,
    key: "time",
  },
  title_bg: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    sleep: 500,
    key: "title_bg",
  },
  xiong: {
    action: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
    },
    duration: 500,
    sleep: 400,
    key: "xiong",
  },
  chu: {
    action: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
    },
    duration: 500,
    sleep: 400,
    key: "chu",
  },
  mo: {
    action: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
    },
    duration: 500,
    sleep: 700,
    key: "mo",
  },
  btn: {
    action: {
      opacity: 1,
    },
    duration: 2000,
    key: "btn",
  },
  t3: {
    action: {
      opacity: 1,
    },
    duration: 2000,
    key: "t3",
  },
  t4: {
    action: {
      opacity: 1,
    },
    duration: 2000,
    key: "t4",
  },
  t5: {
    action: {
      opacity: 1,
    },
    duration: 2000,
    sleep: 2000,
    key: "t5",
  },
  leaf: {
    action: {
      opacity: 1,
    },
    duration: 2000,
    key: "leaf",
  },
  leaf1: {
    action: {
      opacity: 1,
    },
    duration: 2000,
    key: "leaf1",
  },
  leaf2: {
    action: {
      opacity: 1,
    },
    duration: 2000,
    key: "leaf2",
  },
  leaf3: {
    action: {
      opacity: 1,
    },
    duration: 2000,
    key: "leaf3",
  },
  leaf4: {
    action: {
      opacity: 1,
    },
    duration: 2000,
    key: "leaf4",
  },
  leaf5: {
    action: {
      opacity: 1,
    },
    duration: 2000,
    key: "leaf5",
  },
};
const imageList = reactive([
  "bg",
  "t3",
  "t4",
  "t5",
  "btn",
  "chaoyang",
  "chu",
  "city",
  "cup1",
  "cup2",
  "cup3",
  "line",
  "map",
  "mo",
  "position",
  "rule",
  "siji",
  "time",
  "tips",
  "title",
  "title_bg",
  "xiong",
  "xiong1",
  "xiong2",
  "xiong3",
  "xiong4",
  "rule_model",
  "video",
  "leaf",
  "leaf1",
  "leaf2",
  "leaf3",
  "leaf4",
  "leaf5",
]);

const animationData = ref<any>({
  bg: "",
  t3: "",
  t4: "",
  t5: "",
  btn: "",
  chaoyang: "",
  chu: "",
  city: "",
  cup1: "",
  cup2: "",
  cup3: "",
  line: "",
  map: "",
  mo: "",
  position: "",
  rule: "",
  siji: "",
  time: "",
  tips: "",
  title: "",
  title_bg: "",
  xiong: "",
  xiong1: "",
  xiong2: "",
  xiong3: "",
  xiong4: "",
  video: "",
  leaf: "",
  leaf1: "",
  leaf2: "",
  leaf3: "",
  leaf4: "",
  leaf5: "",
});
</script>

<style scoped>
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

.t3 {
  width: 15rpx;
  height: 23rpx;
  position: absolute;
  top: 1220rpx;
  left: 545rpx;
  z-index: 3;
  opacity: 0;
}

.t4 {
  width: 15rpx;
  height: 23rpx;
  position: absolute;
  top: 1220rpx;
  left: 567rpx;
  z-index: 3;
  opacity: 0;
}

.t5 {
  width: 15rpx;
  height: 23rpx;
  position: absolute;
  top: 1220rpx;
  left: 586rpx;
  z-index: 3;
  opacity: 0;
}

.xiong3 {
  width: 163rpx;
  height: 129rpx;
  position: absolute;
  top: 527rpx;
  left: 430rpx;
  z-index: 3;
  opacity: 0;
}

.xiong2 {
  width: 168rpx;
  height: 139rpx;
  position: absolute;
  top: 528rpx;
  left: 40rpx;
  z-index: 3;
  opacity: 0;
}

.xiong1 {
  width: 107rpx;
  height: 90rpx;
  position: absolute;
  top: 424rpx;
  left: 130rpx;
  z-index: 3;
  opacity: 0;
}

.video {
  width: 63rpx;
  height: 100rpx;
  position: absolute;
  top: 558rpx;
  left: 302rpx;
  z-index: 3;
  opacity: 0;
}

.btn {
  width: 487rpx;
  height: 92rpx;
  position: absolute;
  top: 1186rpx;
  left: 131rpx;
  opacity: 0;
}

.chaoyang {
  width: 179rpx;
  height: 65rpx;
  position: absolute;
  top: 754rpx;
  left: 321rpx;
  transform: rotateX(90deg);
  z-index: 3;
}

.city {
  width: 109rpx;
  height: 174rpx;
  position: absolute;
  top: 447rpx;
  left: 241rpx;
  z-index: 3;
  opacity: 0;
}

.cup1 {
  width: 43rpx;
  height: 59rpx;
  position: absolute;
  top: -59rpx;
  left: 461rpx;
  z-index: 3;
  opacity: 0;
}

.cup2 {
  width: 43rpx;
  height: 59rpx;
  position: absolute;
  top: -59rpx;
  left: 218rpx;
  z-index: 3;
  opacity: 0;
}

.cup3 {
  width: 61rpx;
  height: 82rpx;
  position: absolute;
  top: -82rpx;
  left: 569rpx;
  z-index: 3;
  opacity: 0;
}

.xiong4 {
  width: 138rpx;
  height: 112rpx;
  position: absolute;
  top: 666rpx;
  left: 68rpx;
  z-index: 3;
  opacity: 0;
}

.line {
  width: 100%;
  height: 607rpx;
  position: absolute;
  top: 290rpx;
  left: 0;
  opacity: 0;
}

.map {
  width: 647rpx;
  height: 340rpx;
  position: absolute;
  top: 469rpx;
  left: 54rpx;
  z-index: 1;
  opacity: 0;
}

.xiong {
  width: 79rpx;
  height: 76rpx;
  position: absolute;
  top: 878rpx;
  left: 50rpx;
  z-index: 3;
  opacity: 0;
  transform: scale(3, 3);
}

.chu {
  width: 70rpx;
  height: 66rpx;
  position: absolute;
  top: 878rpx;
  left: 137rpx;
  z-index: 3;
  opacity: 0;
  transform: scale(3, 3);
}

.mo {
  width: 79rpx;
  height: 76rpx;
  position: absolute;
  top: 879rpx;
  left: 222rpx;
  z-index: 3;
  opacity: 0;
  transform: scale(3, 3);
}

.position {
  width: 81rpx;
  height: 98rpx;
  position: absolute;
  top: -98rpx;
  left: 565rpx;
  z-index: 3;
  opacity: 0;
}

.rule {
  width: 154rpx;
  height: 46rpx;
  position: absolute;
  top: 829rpx;
  left: 548rpx;
  opacity: 0;
}

.rule_model {
  width: 650rpx;
  height: 790rpx;
  position: absolute;
  top: 347rpx;
  left: 50rpx;
  z-index: 6;
  opacity: 0;
}

.siji {
  width: 137rpx;
  height: 134rpx;
  position: absolute;
  top: 406rpx;
  left: 345rpx;
  transform: rotateX(90deg);
  z-index: 3;
}

.time {
  width: 385rpx;
  height: 40rpx;
  position: absolute;
  top: 902rpx;
  left: 311rpx;
  z-index: 5;
  opacity: 0;
}

.tips {
  width: 500rpx;
  height: 50rpx;
  position: absolute;
  top: 268rpx;
  left: -500rpx;
  opacity: 0;
}

.title {
  width: 502rpx;
  height: 112rpx;
  position: absolute;
  top: 128rpx;
  left: 22rpx;
  opacity: 0;
}

.title_bg {
  width: 671rpx;
  height: 198rpx;
  position: absolute;
  top: 917rpx;
  left: 34rpx;
  opacity: 0;
}

.share {
  width: 487rpx;
  height: 92rpx;
  position: absolute;
  top: 1186rpx;
  left: 131rpx;
  opacity: 0;
  z-index: 5;
}

.leaf {
  width: 82rpx;
  height: 65rpx;
  position: absolute;
  top: 209rpx;
  left: 460rpx;
  opacity: 0;
  z-index: 5;
}

.leaf1 {
  width: 93rpx;
  height: 120rpx;
  position: absolute;
  top: 318rpx;
  left: 40rpx;
  opacity: 0;
  z-index: 5;
}

.leaf2 {
  width: 162rpx;
  height: 158rpx;
  position: absolute;
  top: 303rpx;
  left: 586rpx;
  opacity: 0;
  z-index: 5;
}

.leaf3 {
  width: 61rpx;
  height: 65rpx;
  position: absolute;
  top: 818rpx;
  left: 258rpx;
  opacity: 0;
  z-index: 5;
}

.leaf4 {
  width: 135rpx;
  height: 188rpx;
  position: absolute;
  top: 1092rpx;
  left: 0;
  opacity: 0;
  z-index: 5;
}

.leaf5 {
  width: 88rpx;
  height: 94rpx;
  position: absolute;
  top: 1138rpx;
  left: 608rpx;
  opacity: 0;
  z-index: 5;
}
</style>
