<template>
  <view>
    <button open-type="getUserInfo" @click="getUserInfo" @bindtap="getUserInfo">登录</button>
    <view v-if="userInfo.avatarUrl">
      <view>{{userInfo.nickName}}</view>
      <image :src="userInfo.avatarUrl"/>
      <view>{{gender}}</view>
    </view>
  </view>
</template>
<script setup lang="ts">
import {ref,onMounted,nextTick,computed} from 'vue';
const userInfo=ref({
  avatarUrl: "",
city: "",
country: "",
gender: 0,
language: "",
nickName: "",
province: "",
})
const gender=computed(()=>userInfo.value.gender===0?'男':'女')


async function getOpenId() {
   wx.cloud.callFunction({
   
    name: 'quickstartFunctions',
    config: {
        env: 'test-3gszsltre96027e3'
      },
    data: {
      type: 'getOpenId'
    }
  }).then(res=>{
    console.log(res.result)
  })
}



function getUserInfo(){
  wx.getUserProfile({
    desc: '用于完善会员资料', 
    success: (res) => {
      console.log(res);
      userInfo.value=res.userInfo
    }})

}
onMounted(()=>{


  
})



</script>
