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
			//判断是否有code
			if (this.getUrlParam('code')) {
				//获取code
				this.code = this.getUrlParam('code')
				console.log(this.code)
				//获取用户信息  --是否登录
				this.getInfo()
			} else {
				console.log('未授权')
			}
		},
		methods: {
			//获取微信授权
			submitForm() {
				this.$wxAuthorize();
				// 注意一定要encodeURIComponent 受权成功回调地址  --需要微信开发者平台配置
				// let url = encodeURIComponent('http://192.168.1.12:8096/#/pages/user/user');
				// window.location.href =
				// 	`https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf246b0f9a3dd5503&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
			},
			//获取用户信息
			getInfo() {},
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
			},
			//截取url地址code
			getUrlParam(name) {
				//构造一个含有目标参数的正则表达式对象
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				//匹配目标参数
				var r = window.location.search.substr(1).match(reg);
				//返回参数
				if (r != null) {
					return unescape(r[2]);
				} else {
					return null;
				}
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
