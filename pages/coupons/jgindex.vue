<template>
	<view>
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
			<view class="cgbtn" @tap='zaicibtn'>再次领取</view>
			<view class="fhbtn" @tap="retbtn">返回</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				yesshow:true,//领取成功
				noshow:false,//领取失败
				id:''
			}
		},
		methods:{
			ckmec(){
				uni.navigateTo({
					url:'../user/mycou'
				})
			},
			retbtn(){
				uni.navigateBack({
					delta:1
				})
				// uni.navigateTo({
				// 	url:'./coupons'
				// })
			},
			zaicibtn(){
				let that = this;
				let method = 'post';
				let data = {
					'id': this.id
				}
				that.$netReq('/user/api/receive_coupon', method, data).then(res => {
					if(res && res.code==200){
						this.yesshow=true//领取成功
					}else{
						this.noshow=false//领取失败
					}
				})
			}
		},
		onLoad(option) {
			if(option.state==200){
				this.yesshow=true//领取成功
			}else{
				this.noshow=false//领取失败
			}
			this.id=option.id
		}
	}
</script>
<style lang="scss" scoped>
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
