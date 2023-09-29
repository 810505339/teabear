<template>
  <view>1231232131</view>
</template>
<script setup lang="ts">

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
    console.log(res.result.userInfo.openId)
  })
}

getOpenId()

</script>
