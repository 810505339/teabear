<template>
  <view class="main">
    <image
      :src="`/static/img/page4/${item}.png`"
      :class="item"
      v-for="(item, index) in imageList"
      :style="{ display: item == 'rule_model' && !show ? 'none' : 'block' }"
      :key="index"
      @click="
        item == 'rule' || item == 'rule_model' ? showModel() : closeModel(item)
      "
      :animation="animationData[item]"
    />
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
  return {
    title: "生成搜茶令",
    path: "/pages/section/page5?ok=true",
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
    duration: 300,
    sleep: 300,
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
    duration: 300,
    sleep: 300,
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
    duration: 300,
    sleep: 300,
    key: "cup3",
  },
  cup32: {
    action: {
      top: "554rpx",
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
    duration: 1000,
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
};
const imageList = reactive([
  "bg",
  "t3",
  "t4",
  "t5",
  "t10",
  "t23",
  "t32",
  "btn",
  "chaoyang",
  "chu",
  "city",
  "cup1",
  "cup2",
  "cup3",
//   "ditie",
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
]);

const animationData = ref<any>({
  bg: "",
  t3: "",
  t4: "",
  t5: "",
  t10: "",
  t23: "",
  t32: "",
  btn: "",
  chaoyang: "",
  chu: "",
  city: "",
  cup1: "",
  cup2: "",
  cup3: "",
//   ditie: "",
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

.t10 {
  width: 125rpx;
  height: 77rpx;
  position: absolute;
  top: 645rpx;
  left: 330rpx;
  z-index: 3;
  opacity: 0;
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

.xiong4 {
  width: 140rpx;
  height: 110rpx;
  position: absolute;
  top: 672rpx;
  left: 70rpx;
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
  z-index: 4;
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
  z-index: 2;
  opacity: 0;
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
  opacity: 0;
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

/* .xiong4 {
  width: 80rpx;
  height: 128rpx;
  position: absolute;
  top: 572rpx;
  left: 151rpx;
  z-index: 3;
  opacity: 0;
} */
.share {
  width: 487rpx;
  height: 92rpx;
  position: absolute;
  top: 1186rpx;
  left: 131rpx;
  opacity: 0;
  z-index: 5;
}
</style>
