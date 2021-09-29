<template>
	<view class="content">
		<image src="../../static/qd.png" @tap='homebtn'></image>
	</view>
</template>

<script>
	export default {
		methods:{
			homebtn(){
				uni.switchTab({
					url: '../index/index',
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.content{
		position: fixed;
		width: 100%;
		height: 100%;
	}
	image{
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
