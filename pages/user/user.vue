<template>
	<view class="content">
		<view class="header flexcenter">
			<image src="../../static/logo.png" mode="aspectFill"></image>
			<text>王一博</text>
			<text class="rigthjt">></text>
		</view>
		
		<view class="conlist">
			<view class="flexcenter" @tap="mybtn">
				<image src="../../static/logo.png" mode="aspectFill"></image>
				<text>我的优惠券</text>
				<text class="rigthjtone">></text>
			</view>
			<view class="flexcenter" @tap="mxbtn">
				<image src="../../static/logo.png" mode="aspectFill"></image>
				<text>优惠券明细</text>
				<text class="rigthjtone">></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
			}
		},
		onLoad() {
			
		},
		methods:{
			//跳转优惠券明细
			mxbtn(){
				uni.navigateTo({
					url:'./couponsdel'
				})
			},
			//跳转我的优惠券
			mybtn(){
				uni.navigateTo({
					url:'./mycou'
				})
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.header{
		background: pink;
		image{
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
		.rigthjt{
			margin-left: auto;
		}
	}
	.conlist{
		margin-top: 20rpx;
		background: #999999;
		image{
			width: 60rpx;
			height: 60rpx;
		}
		.rigthjtone{
			margin-left: auto;
		}
	}
</style>
