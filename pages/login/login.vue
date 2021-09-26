<template>
	<view class="content">
		<view class="textname">
			<input placeholder="请输入手机号" />
			<input placeholder="请输入密码" />
			<button @tap="zcbtn">立即注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
			zcbtn(){
				uni.switchTab({
					url:'../index/index'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	
</style>
