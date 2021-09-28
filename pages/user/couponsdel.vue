<template>
	<view class="content">
		<view class="consty flexcolumn">
			<view class="bigbox flexstart">
				<view class="left_big">
					<view>已领取数量:12</view>
					<view>领取次数:12</view>
				</view>
				<view class="right_big">
					<view>已核销数量:20</view>
					<view>剩余数量:20</view>
				</view>
			</view>
			<view class="volume">
				<view class="top_con flexstart">
					<view class="topleft_con flexcolumn">
						<view class="left-a flexstart">
							<image src="../../static/maj.png"></image>
							<text>元</text>
						</view>
						<view class="bigmoney">30</view>
						<!-- <view class="bigmoney_a">消费满200元</view> -->
					</view>
					<view class="topright_con flexcenter">
						<view>
							<view class="rig_a">
								航旅节指定出行产品
							</view>
							<view class="rig_b">
								2020.01.02至2021.02.03
							</view>
						</view>
						<image class="rig_img" src="../../static/folwer.png"></image>
					</view>
				</view>
				<view class="bottom_con flexcenter">
					<view class="let_b flexstart">
						<image src="../../static/twoma.png"></image>
						<u-read-more class="readmore flexstart" ref="uReadMore" :shadow-style="shadowStyle"
							:show-height="50" :toggle='true' close-text='' open-text='' color='#000000'
							text-indent='0'>
							<rich-text :nodes="content"></rich-text>
						</u-read-more>
					</view>
				</view>
			</view>
		</view>
		<view class="consty flexcolumn">
			<view class="bigbox flexstart">
				<view class="left_big">
					<view>已领取数量:12</view>
					<view>领取次数:12</view>
				</view>
				<view class="right_big">
					<view>已核销数量:20</view>
					<view>剩余数量:20</view>
				</view>
			</view>
			<view class="volume">
				<view class="top_con flexstart">
					<view class="topleft_con flexcolumn">
						<view class="left-a flexstart">
							<image src="../../static/maj.png"></image>
							<text>元</text>
						</view>
						<view class="bigmoney">30</view>
						<view class="bigmoney_a">消费满200元</view>
					</view>
					<view class="topright_con flexcenter">
						<view>
							<view class="rig_a">
								航旅节指定出行产品
							</view>
							<view class="rig_b">
								2020.01.02至2021.02.03
							</view>
						</view>
						<image class="rig_img" src="../../static/folwer.png"></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容111',
				shadowStyle: {
					backgroundImage: "none",
					paddingTop: "0",
					marginTop: "20rpx"
				},
			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.consty{
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-top: 20rpx;
		padding: 20rpx 20rpx 0rpx 20rpx;
		box-sizing: border-box;
		box-shadow: 0px 0px 10px #ececec;
		border-radius: 15rpx;
	}
	//优惠券样式开始
	/deep/.u-content {
		font-size: 24rpx !important;
		font-size: 24rpx;
		font-weight: 500;
		color: #000000;
		padding-top: 16rpx;
		padding-bottom: 18rpx;
		width: 530rpx;
	}
	
	/deep/.u-content__showmore-wrap {
		flex: 1;
		margin-right: 30rpx;
		margin-left: auto;
	}
	.volume {
		background: #E2F0D9;
		border-radius: 15rpx;
		margin-bottom: 20rpx;
	
		.top_con {}
	
		.topleft_con {
			padding-bottom: 16rpx;
			border-right: 1px dashed #FFFFFF;
			.left-a {
				height: 86rpx;
	
				image {
					display: block;
					width: 86rpx;
					height: 86rpx;
				}
	
				text {
					margin-left: 48rpx;
					font-size: 30rpx;
					font-weight: bold;
					color: #000000;
					margin-top: 20rpx;
					margin-right: 22rpx;
				}
			}
	
			.bigmoney {
				font-size: 79rpx;
				height: 79rpx;
				line-height: 39rpx;
				font-weight: bold;
				color: #000000;
				text-align: center;
			}
	
			.bigmoney_a {
				font-size: 24rpx;
				height: 24rpx;
				line-height: 0rpx;
				font-weight: bold;
				color: #000000;
				text-align: center;
			}
		}
	
		.topright_con {
			padding-bottom: 16rpx;
			.rig_img {
				display: block;
				width: 130rpx;
				height: 125rpx;
				margin-top: 33rpx;
				margin-left: 6rpx;
			}
	
			.rig_a {
				font-size: 32rpx;
				height: 32rpx;
				font-weight: bold;
				color: #000000;
				margin-top: 30rpx;
				margin-left: 22rpx;
			}
	
			.rig_b {
				font-size: 22rpx;
				font-weight: 500;
				height: 22rpx;
				color: #010101;
				margin-top: 20rpx;
				margin-left: 22rpx;
			}
	
			.rig_c {
				width: 266rpx;
				height: 53rpx;
				line-height: 53rpx;
				text-align: center;
				background: #FF0000;
				border-radius: 27rpx;
				font-size: 28rpx;
				font-weight: bold;
				color: #FFFFFF;
				margin-left: 22rpx;
				margin-top: 23rpx;
			}
		}
	
		.bottom_con {
			border-top: 1px dashed #FFFFFF;
	
			.let_b {
				font-size: 24rpx;
				font-weight: 500;
				color: #000000;
	
				image {
					display: block;
					width: 30rpx;
					height: 30rpx;
					margin-left: 20rpx;
					margin-right: 20rpx;
					margin-top: 22rpx;
				}
				.readmore {
					flex: 1;
					line-height: 36rpx;
				}
			}
	
			.img_let {
				display: block;
				width: 22rpx;
				height: 12rpx;
				margin-left: auto;
				margin-right: 30rpx;
			}
		}
	}
	//优惠券样式结束
	.bigbox{
		margin-bottom: 20rpx;
		font-size: 26rpx;
		font-weight: 500;
		color: #474748;
		height: 100rpx;
		.left_big{
			width: 50%;
			view{
				margin-bottom: 20rpx;
			}
		}
		.right_big{
			view{
				margin-bottom: 20rpx;
			}
		}
	}
</style>
