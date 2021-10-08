<template>
	<view class="content">
		<view class="header flexcenter" v-if="token">
			<image :src="avatar_urls" mode="aspectFill"></image>
			<text>{{usernames}}</text>
		</view>
		<view class="header flexcenter" v-if="!token">
			<image src="../../static/wdl.png" mode="aspectFill"></image>
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
				token:'',
				usernames:'',
				avatar_urls:''
			}
		},
		onLoad(option) {
			if(localStorage.getItem('token')){
				this.token=localStorage.getItem('token')
			}else{
				this.token=''
			}
			if(localStorage.getItem('usernames')){
				this.usernames=localStorage.getItem('usernames')
			}
			if(localStorage.getItem('avatar_urls')){
				this.avatar_urls=localStorage.getItem('avatar_urls')
			}
		},
		mounted() {
			if(localStorage.getItem('token')){
				this.token=localStorage.getItem('token')
			}else{
				this.token=''
			}
			if(localStorage.getItem('usernames')){
				this.usernames=localStorage.getItem('usernames')
			}
			if(localStorage.getItem('avatar_urls')){
				this.avatar_urls=localStorage.getItem('avatar_urls')
			}
		},
		methods: {
			//获取微信授权
			submitForm() {
				this.$wxAuthorize();
			},
			//跳转优惠券明细
			mxbtn() {
				// if (!this.$getWXCode('code')) {
				// 	console.log('未授权')
				// 	this.$wxAuthorize();
				// }else{
				// 	uni.navigateTo({
				// 		url: './couponsdel'
				// 	})
				// }
			},
			//跳转我的优惠券
			mybtn() {
				if (!localStorage.getItem('token')) {
					console.log('未授权')
					this.$wxAuthorize();
				}else{
					uni.navigateTo({
						url: './mycou'
					})
				}
			},
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
