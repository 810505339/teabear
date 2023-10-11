<template>
  <view class="main">
    <image
      :src="`/static/img/page4/${item}.png`"
      :class="item"
      v-for="(item, index) in imageList"
      :key="index"
      :animation="animationData[item]"
    />
  </view>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive } from "vue";
import { getAnimation } from "@/utils/until";

let timer1: any = null;
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
onBeforeUnmount(() => {
  clearInterval(timer1);
});

const xiongAnimation = (index: number) => {
  return {
    xiongShow: {
      action: {
        opacity: 1,
      },
      duration: 2000,
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
// const animation: any = uni.createAnimation({
//   duration: 1000,
//   timingFunction: "ease",
// });
// animation.rotateZ;
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
      top: "130rpx",
    },
    duration: 500,
    sleep: 500,
    key: "position",
  },
  position22: {
    action: {
      top: "110rpx",
    },
    duration: 500,
    key: "position",
  },
  tips: {
    action: {
      opacity: 1,
    },
    duration: 1000,
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
  line: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    key: "line",
  },
  map: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    sleep: 1000,
    key: "map",
  },
  t10: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    key: "t10",
  },
  t23: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    key: "t23",
  },
  t32: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    key: "t32",
  },
  ditie: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    key: "ditie",
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
    key: "cup1",
  },
  cup11: {
    action: {
      top: "463rpx",
    },
    duration: 500,
    sleep: 500,
    key: "cup1",
  },
  cup12: {
    action: {
      top: "443rpx",
    },
    duration: 500,
    key: "cup1",
  },
  cup2: {
    action: {
      opacity: 1,
    },
    duration: 500,
    key: "cup2",
  },
  cup21: {
    action: {
      top: "622rpx",
    },
    duration: 500,
    sleep: 500,
    key: "cup2",
  },
  cup22: {
    action: {
      top: "602rpx",
    },
    duration: 500,
    key: "cup2",
  },
  cup3: {
    action: {
      opacity: 1,
    },
    duration: 500,
    key: "cup3",
  },
  cup31: {
    action: {
      top: "574rpx",
    },
    duration: 500,
    sleep: 500,
    key: "cup3",
  },
  cup32: {
    action: {
      top: "554rpx",
    },
    duration: 500,
    sleep: 500,
    key: "cup3",
  },
  siji: {
    action: {
      rotateX: 0,
    },
    duration: 1000,
    key: "siji",
  },
  siji1: {
    action: {
      top: "361rpx",
    },
    duration: 1000,
    sleep: 1000,
    key: "siji",
  },
  chaoyang: {
    action: {
      rotateX: 0,
    },
    duration: 1000,
    key: "chaoyang",
  },
  rule: {
    action: {
      opacity: 1,
    },
    duration: 1000,
    key: "rule",
  },
};
const imageList = reactive([
  "bg",
  "t3",
  "t4",
  "t5",
  "t10",
  "t14",
  "t16",
  "t18",
  "t23",
  "t32",
  "btn",
  "chaoyang",
  "chu",
  "city",
  "cup1",
  "cup2",
  "cup3",
  "ditie",
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
]);

const animationData = ref<any>({
  bg: "",
  t3: "",
  t4: "",
  t5: "",
  t10: "",
  t14: "",
  t16: "",
  t18: "",
  t23: "",
  t32: "",
  btn: "",
  chaoyang: "",
  chu: "",
  city: "",
  cup1: "",
  cup2: "",
  cup3: "",
  ditie: "",
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
}
.t4 {
  width: 15rpx;
  height: 23rpx;
  position: absolute;
  top: 1220rpx;
  left: 567rpx;
  z-index: 3;
}
.t5 {
  width: 15rpx;
  height: 23rpx;
  position: absolute;
  top: 1220rpx;
  left: 586rpx;
  z-index: 3;
}
.t10 {
  width: 125rpx;
  height: 77rpx;
  position: absolute;
  top: 645rpx;
  left: 330rpx;
  z-index: 3;
  opacity: 0;
}
.t14 {
  width: 170rpx;
  height: 36rpx;
  position: absolute;
  top: 1005rpx;
  left: 70rpx;
  z-index: 2;
}
.t16 {
  width: 172rpx;
  height: 36rpx;
  position: absolute;
  top: 1005rpx;
  left: 285rpx;
  z-index: 2;
}
.t18 {
  width: 173rpx;
  height: 36rpx;
  position: absolute;
  top: 1005rpx;
  left: 500rpx;
  z-index: 2;
}
.t23 {
  width: 125rpx;
  height: 77rpx;
  position: absolute;
  top: 500rpx;
  left: 25rpx;
  z-index: 3;
  opacity: 0;
}
.t32 {
  width: 125rpx;
  height: 77rpx;
  position: absolute;
  top: 422rpx;
  left: 58rpx;
  z-index: 3;
  opacity: 0;
}
.btn {
  width: 487rpx;
  height: 92rpx;
  position: absolute;
  top: 1186rpx;
  left: 131rpx;
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
.chu {
  width: 70rpx;
  height: 66rpx;
  position: absolute;
  top: 878rpx;
  left: 137rpx;
  z-index: 3;
}
.city {
  width: 109rpx;
  height: 174rpx;
  position: absolute;
  top: 447rpx;
  left: 287rpx;
  z-index: 3;
  opacity: 0;
}
.cup1 {
  width: 43rpx;
  height: 59rpx;
  position: absolute;
  top: -59rpx;
  left: 472rpx;
  z-index: 3;
  opacity: 0;
}
.cup2 {
  width: 43rpx;
  height: 59rpx;
  position: absolute;
  top: -59rpx;
  left: 254rpx;
  z-index: 3;
  opacity: 0;
}
.cup3 {
  width: 61rpx;
  height: 82rpx;
  position: absolute;
  top: -82rpx;
  left: 439rpx;
  z-index: 3;
  opacity: 0;
}
.ditie {
  width: 125rpx;
  height: 77rpx;
  position: absolute;
  top: 672rpx;
  left: 25rpx;
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

.mo {
  width: 79rpx;
  height: 76rpx;
  position: absolute;
  top: 879rpx;
  left: 222rpx;
  z-index: 3;
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
  width: 183rpx;
  height: 40rpx;
  position: absolute;
  top: 902rpx;
  left: 311rpx;
  z-index: 2;
}
.tips {
  width: 500rpx;
  height: 50rpx;
  position: absolute;
  top: 236rpx;
  left: -500rpx;
  opacity: 0;
}
.title {
  width: 502rpx;
  height: 112rpx;
  position: absolute;
  top: 96rpx;
  left: 22rpx;
  opacity: 0;
}
.title_bg {
  width: 671rpx;
  height: 198rpx;
  position: absolute;
  top: 917rpx;
  left: 34rpx;
}
.xiong {
  width: 79rpx;
  height: 76rpx;
  position: absolute;
  top: 878rpx;
  left: 50rpx;
  z-index: 3;
}
.xiong1 {
  width: 83rpx;
  height: 133rpx;
  position: absolute;
  top: 550rpx;
  left: 520rpx;
  z-index: 3;
  opacity: 0;
}
.xiong2 {
  width: 78rpx;
  height: 125rpx;
  position: absolute;
  top: 357rpx;
  left: 197rpx;
  z-index: 3;
  opacity: 0;
}
.xiong3 {
  width: 68rpx;
  height: 110rpx;
  position: absolute;
  top: 377rpx;
  left: 553rpx;
  z-index: 3;
  opacity: 0;
}
.xiong4 {
  width: 80rpx;
  height: 128rpx;
  position: absolute;
  top: 572rpx;
  left: 151rpx;
  z-index: 3;
  opacity: 0;
}
</style>
