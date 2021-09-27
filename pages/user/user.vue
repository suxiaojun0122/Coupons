<template>
	<view class="content">
		<view class="header flexcenter" @click="submitForm">
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
		data() {
			return {
				code:'',
				user_id:''
			}
		},
		onLoad(option) {
			this.user_id = uni.getStorageSync("user_id");
			this.code = option.code
		},
		methods: {
			submitForm() {
				let url = encodeURIComponent('http://192.168.1.12:8096/#/pages/login/login'); // 注意一定要encodeURIComponent
				console.log(url)
				// window.location.href =
				// 	`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1ce7793fbf3e6181&redirect_uri=http://localhost:8096/#/login&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect`
				window.location.href=`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1ce7793fbf3e6181&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
			},
			//跳转优惠券明细
			mxbtn() {
				uni.navigateTo({
					url: './couponsdel'
				})
			},
			//跳转我的优惠券
			mybtn() {
				uni.navigateTo({
					url: './mycou'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		background: pink;

		image {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}

		.rigthjt {
			margin-left: auto;
		}
	}

	.conlist {
		margin-top: 20rpx;
		background: #999999;

		image {
			width: 60rpx;
			height: 60rpx;
		}

		.rigthjtone {
			margin-left: auto;
		}
	}
</style>
