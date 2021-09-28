<template>
	<view class="content">
		<view class="header flexcenter">
			<image src="../../static/wyb.jpg" mode="aspectFill"></image>
			<text @click="submitForm">立即登录</text>
		</view>

		<view class="conlist flexcolumn">
			<view class="conlist_a flexcenter" @tap="mybtn">
				<image src="../../static/qian.png" mode="aspectFill"></image>
				<text>我的优惠券</text>
				<image src="../../static/right.png" class="rigthjtone"></image>
			</view>
			<view class="conlist_a flexcenter" @tap="mxbtn">
				<image src="../../static/shu.png" mode="aspectFill"></image>
				<text>优惠券明细</text>
				<image src="../../static/right.png" class="rigthjtone"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: '',
				user_id: ''
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
				window.location.href =
					`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx1ce7793fbf3e6181&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
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
		height: 334rpx;
		// background: pink;
		background: url(../../static/my.png) no-repeat;
		background-size: 100% 100%;

		image {
			width: 136rpx;
			height: 136rpx;
			border-radius: 50%;
			margin-left: 30rpx;
			margin-right: 18rpx;
		}

		text {
			font-size: 30rpx;
			font-weight: 500;
			color: #000002;
		}
	}

	.conlist {
		margin-top: 20rpx;
		margin: 43rpx 30rpx;
		box-shadow: 0px 0px 10px #ececec;
		border-radius: 15rpx;

		.conlist_a {
			padding: 30rpx 20rpx;
			box-sizing: border-box;
		}

		.conlist_a:first-of-type {
			border-bottom: 1px solid #eeeeee;
		}

		image {
			width: 49rpx;
			height: 43rpx;
		}

		text {
			font-size: 30rpx;
			font-weight: bold;
			color: #000000;
			margin-left: 20rpx;
		}

		.rigthjtone {
			display: block;
			width: 12rpx;
			height: 22rpx;
			margin-left: auto;
			// margin-right: 20rpx;
		}
	}
</style>
