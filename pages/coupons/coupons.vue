<template>
	<view class="content">
		<!-- 优惠券 -->
		<view v-if="q_show" class="consty flexcolumn">
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
					<view class="topright_con flexstart">
						<view>
							<view class="rig_a">
								航旅节指定出行产品
							</view>
							<view class="rig_b">
								2020.01.02至2021.02.03
							</view>
							<view class="rig_c" @tap="qbtn">立即抢券</view>
						</view>
						<image class="rig_img" src="../../static/folwer.png"></image>
					</view>
				</view>
				<view class="bottom_con flexcenter">
					<view class="let_b flexcenter">
						<image src="../../static/twoma.png"></image>
						可在以下合作方消费时抵扣
					</view>
					<image class="img_let" src="../../static/bottom.png"></image>
				</view>
			</view>
			<view class="volume">
				<view class="top_con flexstart">
					<view class="topleft_con flexcolumn">
						<view class="left-a flexstart">
							<image src="../../static/xj.png"></image>
							<text>元</text>
						</view>
						<view class="bigmoney">30</view>
						<!-- <view class="bigmoney_a">消费满200元</view> -->
					</view>
					<view class="topright_con flexstart">
						<view>
							<view class="rig_a">
								航旅节指定出行产品
							</view>
							<view class="rig_b">
								2020.01.02至2021.02.03
							</view>
							<view class="rig_c">立即抢券</view>
						</view>
						<image class="rig_img" src="../../static/folwer.png"></image>
					</view>
				</view>
				<view class="bottom_con flexcenter">
					<view class="let_b flexcenter">
						<image src="../../static/twoma.png"></image>
						可在以下合作方消费时抵扣
					</view>
					<image class="img_let" src="../../static/bottom.png"></image>
				</view>
			</view>
		</view>
		<!-- 成功 -->
		<view v-if="yesshow">
			<image class="cgimg" src="../../static/cg.png"></image>
			<view class="oksty">恭喜您，优惠券领取成功！</view>
			<view class="cgbtn" @tap='ckmec'>查看我的优惠券</view>
			<view class="fhbtn" @tap="retbtn">返回</view>
		</view>
		<!-- 失败-->
		<view v-if="noshow">
			<image class="cgimg" src="../../static/sb.png"></image>
			<view class="oksty">优惠券领取失败</view>
			<view class="cgbtn">再次领取</view>
			<view class="fhbtn" @tap="retbtn">返回</view>
		</view>
	</view>
</template>

<script>
		export default {
			data(){
				return{
					q_show:true,
					yesshow:false,//领取成功
					noshow:false//领取失败
				}
			},
			onLoad() {
				
			},
			methods:{
				retbtn(){
					this.q_show=true
					this.yesshow=false
					this.noshow=false
					// location.reload()
				},
				qbtn(){
					this.q_show=false
					this.yesshow=true
					this.noshow=false
					// location.reload()
				},
				ckmec(){
					uni.navigateTo({
						url:'../user/mycou'
					})
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
	.volume {
		background: #E2F0D9;
		border-radius: 15rpx;
		margin-bottom: 20rpx;
	
		.top_con {}
	
		.topleft_con {
			// padding-bottom: 16rpx;
	
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
				line-height: 49rpx;
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
			padding-bottom: 26rpx;
			border-left: 1px dashed #FFFFFF;
			.rig_img {
				display: block;
				width: 130rpx;
				height: 125rpx;
				margin-top: 30rpx;
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
				height: 22rpx;
				font-weight: 500;
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
			height: 70rpx;
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
	
	.oksty{
		font-size: 32rpx;
		font-weight: 500;
		color: #030303;
		text-align: center;
		margin-top: 60rpx;
		margin-bottom: 126rpx;
	}
	.cgimg{
		width: 145rpx;
		height: 145rpx;
		display: block;
		margin:162rpx auto 0rpx auto;
	}
	.cgbtn{
		width: 471rpx;
		height: 88rpx;
		background: #25AAE5;
		border-radius: 44rpx;
		margin: auto;
		font-size: 28rpx;
		font-weight: bold;
		color: #FFFFFF;
		text-align: center;
		line-height: 88rpx;
	}
	.fhbtn{
		width: 471rpx;
		height: 88rpx;
		border: 2px solid #25AAE5;
		border-radius: 44rpx;
		margin:50rpx auto;
		text-align: center;
		line-height: 88rpx;
		font-size: 28rpx;
		font-weight: bold;
		color: #25AAE5;
	}
</style>
