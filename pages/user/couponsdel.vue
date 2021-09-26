<template>
	<view class="content">
		<view>
			<view class="volume">
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
	</view>
</template>

<script>
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
	.bigbox{
		margin-bottom: 20rpx;
	}
</style>
