<template>
	<view class="content">
		<view class='home'>
			<swiper indicator-dots circular autoplay interval=3000>
				<swiper-item v-for="(item,index) in swipers" :key="index" @tap="swipersbtn(index)">
					<image :src="item" class="imgarr"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="textimglist flexcolumn">
			<view class="textimglist_con flexstart" @tap="eventdetailsbtn">
				<view class="textimglist_text">文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</view>
				<image src="../../static/wyb.jpg" mode='aspectFill'></image>
			</view>
			<view class="textimglist_con flex">
				<view>文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字</view>
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
	.home {
		swiper {
			width: 100%;
		}
		image {
			width: 100%;
		}
	}
	.textimglist{
		width: 100%;
		margin-top: 20rpx;
		.textimglist_con{
			width: 690rpx;
			margin:0rpx auto 20rpx auto;
			border-bottom: 1px solid #333333;
			padding-bottom: 20rpx;
			.textimglist_text{
				width:550rpx;
			}
			image{
				width: 200rpx;
				height: 150rpx;
			}
		}
	}
</style>
