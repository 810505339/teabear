<template>
	<view>
		<view class="row">
			<view>昵称：</view>
			<input type="nickname" name="nickname" placeholder="请输入昵称" @input="bindinput" />
		</view>
		<button type="primary" style="margin-top: 40rpx;margin-bottom: 20rpx;" @click="onSubmit">提交</button>

	</view>
</template>
<script setup lang="ts">
	import {
		ref,
		onMounted,
		nextTick,
		computed
	} from 'vue';
	const userInfo = ref({
		avatarUrl: "",
		city: "",
		country: "",
		gender: 0,
		language: "",
		nickName: "",
		province: "",
	})
	// const gender = computed(() => userInfo.value.gender === 0 ? '男' : '女')
	const bindinput = (e) => {
		userInfo.value.nickName = e.detail.value
	}
	const onSubmit = (e) => {
		if (userInfo.value.nickName.trim() == '') return
		wx.navigateTo({
			url: '/pages/section/page1',
		})
	}


	async function getOpenId() {
		wx.cloud.callFunction({
			name: 'quickstartFunctions',
			config: {
				env: 'test-3gszsltre96027e3'
			},
			data: {
				type: 'getOpenId'
			}
		}).then(res => {
			console.log(res.result)
		})
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
	onMounted(() => {
		getOpenId()
	})
</script>
