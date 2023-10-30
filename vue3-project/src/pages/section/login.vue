<template>
  <view>
    <view class="row">
      <view>昵称：</view>
      <input
        type="nickname"
        name="nickname"
        placeholder="请输入昵称"
        @input="bindinput"
      />
    </view>
    <button style="margin-top: 40rpx; margin-bottom: 20rpx" @click="onSubmit">
      提交  
    </button>

    <div class="box">
      <div class="line" :animation="animationData.line"></div>
      <div
        class="item"
        v-for="(item, index) in tabList"
        :key="index"
        @click="
          () => {
            onChange(index);
          }
        "
      >
        {{ item }}
      </div>
    </div>
  </view>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getAnimation } from "@/utils/until";

const tabList = ref(["全部", "待支付", "已支付", "支付失败", "已取消"]);
const beforeIndex = ref(0);
const falg = ref(false);
const animationData = ref({
  line: "",
});
const lineAnimation = (index: any) => {
  const distance = index - Math.trunc(tabList.value.length / 2);
  const rIndex = index - beforeIndex.value;
  const finaly = rIndex > 0 ? Math.abs(distance) : distance;
  const map = {
    min1: {
      action: {
        scale: 0.1,
      },
      duration: 300,
      sleep: 200,
      key: "line",
    },
    min2: {
      action: {
        scale: 1,
      },
      duration: 300,
      key: "line",
    },
    min3: {
      action: {
        translateX: 150 * rIndex + 30 * finaly + "rpx",
      },
      duration: 300,
      sleep: 300,
      key: "line",
    },
    min4: {
      action: {
        translateX: 150 * rIndex + "rpx",
      },
      duration: 500,
      sleep: 500,
      key: "line",
    },
    min5: {
      action: { left: index * 150 + "rpx" },
      duration: 0,
      key: "line",
    },
    min6: {
      action: { translateX: 0 },
      duration: 0,
      key: "line",
    },
  };
  beforeIndex.value = index;
  return map;
};
const onChange = async (index: any) => {
  if (falg.value) return;
  falg.value = true;
  await getAnimation(lineAnimation(index), animationData);
  falg.value = false;
};
const userInfo = ref({
  avatarUrl: "",
  city: "",
  country: "",
  gender: 0,
  language: "",
  nickName: "",
  province: "",
});
// const gender = computed(() => userInfo.value.gender === 0 ? '男' : '女')
const bindinput = (e) => {
  userInfo.value.nickName = e.detail.value;
};
const onSubmit = (e) => {
  if (userInfo.value.nickName.trim() == "") return;
  wx.navigateTo({
    url: "/pages/section/page1",
  });
};

async function addUser() {
  const data = await wx.cloud.callFunction({
    name: "userManagerFun",
    config: {
      env: "test-3gszsltre96027e3",
    },
    data: {
      type: "addUser",
    },
  });
  console.log(data);
}

// function getUserInfo() {
// 	wx.getUserProfile({
// 		desc: '用于完善会员资料',
// 		success: (res) => {
// 			console.log(res);
// 			userInfo.value = res.userInfo
// 			// uni.redirectTo({
// 			//   url: './page1'
// 			// })
// 		}
// 	})

// }
onMounted(async () => {
  await addUser();
});
</script>
<style scoped>
.box {
  width: 100%;
  height: 40px;
  display: flex;
  position: relative;
  align-items: center;
}
.item {
  text-align: center;
  flex: 1;
  z-index: 1;
}
.line {
  width: 150rpx;
  height: 100%;
  background: #ee4444;
  border-radius: 50rpx;
  position: absolute;
}
</style>
