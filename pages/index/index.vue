<template>
	<view class="content">
		<image src="../../static/syheader.png" class="header"></image>
		<view class='home'>
			<swiper indicator-dots circular autoplay interval=3000>
				<swiper-item v-for="(item,index) in swipers" :key="index" @tap="swipersbtn(index)">
					<image :src="item" class="imgarr"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="textimglist flexcolumn">
			<view class="textimglist_con flexcenter" @tap="eventdetailsbtn">
				<text class="text_a">旅游节优惠券</text>
				<view class="text_b">
					<text>更多</text>
					<image src="../../static/right.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: []
			}
		},
		onLoad() {
			this.swipers = ['https://app-file.beitaichufang.com/img/H5/web/banner/banner20.jpg',
				"https://app-file.beitaichufang.com/img/H5/web/banner/banner21.jpg",
				"https://app-file.beitaichufang.com/img/H5/web/banner/banner22.jpg",
				"https://app-file.beitaichufang.com/img/H5/web/banner/banner23.jpg"
			];
		},
		methods: {
			//点击轮播图详情
			swipersbtn(index){
				uni.navigateTo({
					url:'./swipersdeil?index=' + index
				})
			},
			//点击活动详情
			eventdetailsbtn(){
				uni.navigateTo({
					url:'./eventdetails'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.header{
		display: block;
		height: 128rpx;
		width: 100%;
	}
	.home {
		swiper {
			width: 690rpx;
			margin: auto;
			border-radius: 10rpx;
			margin-top: 30rpx;
			margin-bottom: 20rpx;
		}
		image {
			width: 100%;
			height: 100%;
			border-radius: 10rpx;
		}
	}
	.textimglist{
		height: 687rpx;
		background: #FFFFFF;
		border-radius: 15rpx;
		border: 1px solid #333333;
		margin: 0rpx 30rpx;
		padding:0rpx 20rpx 20rpx 20rpx;
		box-sizing: border-box;
		.textimglist_con{
			height: 92rpx;
			.text_a{
				font-size: 34rpx;
				font-weight: bold;
				color: #030303;
			}
			.text_b{
				margin-left: auto;
				text{
					font-size: 24rpx;
					font-weight: bold;
					color: #606060;
					height: 34rpx;
					margin-right: 17rpx;
				}
				image{
					width: 12rpx;
					height: 22rpx;
				}
			}
		}
	}
</style>
