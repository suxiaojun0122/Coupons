<template>
	<view class="content">
		<!-- 优惠券 -->
		<view v-if="q_show">
			<view class="volume" @tap="qbtn">
				<view class="top_con flexstart">
					<view class="topleft_con">
						<view>
							￥<text>10</text>
						</view>
						<view>无金额门槛</view>
					</view>
					<view class="topright_con">
						<view>
							<text>现金券</text>
							<text>纯露化妆水无门槛10元券</text>
						</view>
						<view>
							<text>2020.01.02至2021.02.03</text>
							<text>立即领取</text>
						</view>
					</view>
				</view>
				<view class="bottom_con flexstart">
					<view>
						仅限购买工厂店商品
					</view>
					<view>
						>
					</view>
				</view>
			</view>
		</view>
		<!-- 成功 -->
		<view v-if="yesshow">
			<image src="../../static/logo.png"></image>
			<view>恭喜您，优惠券领取成功</view>
			<view>
				<button @tap="retbtn">返回</button>
				<button>查看我的优惠券</button>
			</view>
		</view>
		<!-- 失败-->
		<view v-if="noshow">
			<image src="../../static/logo.png"></image>
			<view>领取失败</view>
			<view>
				<button @tap="retbtn">返回</button>
				<button>再次领取</button>
			</view>
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
				}
			}
		}
</script>

<style lang="scss" scoped>
	.volume{
		background: pink;
		width: 690rpx;
		margin: auto;
		.top_con{
			margin-bottom: 20rpx;
		}
		.topleft_con{
			margin-right: 20rpx;
		}
	}
</style>
