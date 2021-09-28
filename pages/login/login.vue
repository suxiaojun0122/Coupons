<template>
	<view class="content">
		<image src="../../static/header.png" class="headerimg"></image>
		<view class="textname flexcolumn">
			<view class="telephone flexcenter">
				<text>手机号码：+86</text>
				<input placeholder="请输入手机号" placeholder-style="color: #A4A4A4;font-size:28rpx" maxlength='11'
					type="number" />
			</view>
			<view class="tzpass flexcenter">
				<text>短信验证码：</text>
				<input placeholder="请输入短信验证码" placeholder-style="color: #A4A4A4;font-size:28rpx" maxlength='6'
					type="number" />
				<view class="button">获取验证码</view>
			</view>
			<view class="flexcenter">
				<view class='btn_zc' @tap="zcbtn">立即注册</view>
			</view>
		</view>
		<image src="../../static/headerone.png" class="headerimgone"></image>
		<view class="footone flexcolumn">
			<view class="font_a flexcenter marginbottom_30">
				<view class="font_atext">头等舱优惠券1万张</view>
				<view class="font_btext">劵面值50元，消费满20元时抵减</view>
			</view>
			<view class="font_a flexcenter marginbottom_30">
				<view class="font_atext">头等舱优惠券1万张</view>
				<view class="font_btext">劵面值50元，消费满20元时抵减</view>
			</view>
			<view class="font_a flexcenter">
				<view class="font_atext">头等舱优惠券1万张</view>
				<view class="font_btext">劵面值50元，消费满20元时抵减</view>
			</view>
		</view>
		<view class="footer">
			头等舱优惠券头等舱优惠券头等舱优惠券头等舱优惠券头等舱优惠券头等舱优惠券头等舱优惠券头等舱优惠券头等舱优惠券头等舱优惠券头等舱优惠券头等舱优惠券头等舱优惠券头等舱优惠券
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				code: ''
			}
		},
		onLoad(opction) {
			// this.code = this.getUrlParam('code')
			// console.log(this.code)
		},
		methods: {
			zcbtn() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			getData(url) {
				
			},
		}
	}
</script>

<style scoped lang="scss">
	.headerimg {
		display: block;
		width: 100%;
		height: 408rpx;
	}

	.headerimgone {
		display: block;
		width: 100%;
		height: 260rpx;
	}

	.textname {
		height: 407rpx;
		width: 100%;
		background: #F2F2F2;

		.telephone {
			margin-left: 30rpx;
			margin-right: 30rpx;
			margin-top: 45rpx;

			text {
				font-size: 28rpx;
				font-weight: bold;
				color: #030303;
				width: 200rpx;
			}

			input {
				width: 470rpx;
				height: 74rpx;
				background: #FFFFFF;
				padding: 0rpx 25rpx;
				box-sizing: border-box;
				margin-left: 30rpx;
				font-size: 28rpx;
				font-weight: 500;
				// color: #A4A4A4;
			}

		}

		.tzpass {
			margin-left: 30rpx;
			margin-right: 30rpx;
			margin-top: 30rpx;

			text {
				font-size: 28rpx;
				font-weight: bold;
				color: #030303;
				width: 200rpx;
			}

			input {
				width: 284rpx;
				height: 74rpx;
				background: #FFFFFF;
				padding: 0rpx 25rpx;
				box-sizing: border-box;
				margin-left: 30rpx;
				font-size: 28rpx;
				font-weight: 500;
				// color: #A4A4A4;
			}

			.button {
				width: 166rpx;
				height: 74rpx;
				background: #FDC101;
				border: 1px solid #616281;
				border-radius: 5rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #030303;
				outline: none;
				text-align: center;
				line-height: 72rpx;
				margin-left: 20rpx;
			}
		}

		.btn_zc {
			width: 470rpx;
			height: 88rpx;
			line-height: 84rpx;
			text-align: center;
			background: #25AAE5;
			border-radius: 44px;
			margin: 58rpx auto;
			font-size: 28rpx;
			font-weight: bold;
			color: #FFFFFF;
		}
	}

	.footone {
		margin: 60rpx 28rpx 0rpx 28rpx;

		.font_a {
			.font_atext {
				width: 279rpx;
				height: 66rpx;
				background: #DDEBF8;
				border-radius: 33rpx 0px 0px 33rpx;
				line-height: 66rpx;
				text-align: center;
				font-size: 28rpx;
				font-weight: 500;
				color: #000000;
				margin-right: 12rpx;
			}

			.font_btext {
				font-size: 28rpx;
				font-weight: 500;
				color: #000000;
			}
		}
	}

	.footer {
		margin-top: 67rpx;
		padding: 0rpx 30rpx 65rpx 30rpx;
		box-sizing: border-box;

	}
</style>
