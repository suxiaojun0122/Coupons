<template>
	<view class="content">
		<!-- <image src="../../static/syheader.png" class="header"></image> -->
		<view class='home'>
			<swiper indicator-dots circular autoplay interval=3000>
				<swiper-item v-for="(item,index) in swipers" :key="index" @tap="swipersbtn(index)">
					<image :src="item" class="imgarr"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="textimglist flexcolumn">
			<view class="textimglist_con flexcenter">
				<text class="text_a">航旅节优惠券</text>
				<view class="text_b">
					<text @tap='gengduoone'>更多</text>
					<image src="../../static/right.png"></image>
				</view>
			</view>
			<view class="mcoupons" @tap="eventdetailsbtn" v-for="(item,index) in coupon" :key='index'>
				<view :class="item.type==1?'volume volumeone':'volume volumetwo'">
					<view class="top_con flexstart">
						<view class="topleft_con flexcolumn">
							<view class="left-a flexstart">
								<image src="../../static/maj.png" v-if="item.type==1"></image>
								<image src="../../static/xj.png" v-if="item.type==2"></image>
								<text>元</text>
							</view>
							<view class="bigmoney">{{parseInt(item.num)}}</view>
							<view class="bigmoney_a" v-if="item.type==1">消费满{{parseInt(item.condition)}}元</view>
						</view>
						<view class="topright_con flexstart">
							<view>
								<view class="rig_a">
									{{item.name}}
								</view>
								<!-- <view class="rig_b">
									{{$timestampToTime(item.start_time)}}至{{$timestampToTime(item.end_time)}}
								</view> -->
								<view class="rig_c" @tap='qbtn(item)'>立即抢券
								</view>
							</view>
							<image class="rig_img" src="../../static/folwer.png"></image>
						</view>
					</view>
					<view class="bottom_con flexcenter" v-if="item.remark">
						<view class="let_b flexstart">
							<image src="../../static/twoma.png"></image>
							<u-read-more class="readmore flexstart" ref="uReadMore" :shadow-style="shadowStyle"
								:show-height="50" :toggle='true' close-text='' open-text='' color='#000000'
								text-indent='0'>
								<rich-text :nodes="item.remark"></rich-text>
							</u-read-more>
						</view>
					</view>
				</view>

			</view>
		</view>
		<view class="textimglist_a">
			<view class="textimglist_con_a flexcenter">
				<text class="text_a">航空旅游活动</text>
				<view class="text_b">
					<text @tap='gengduo'>更多</text>
					<image src="../../static/right.png"></image>
				</view>
			</view>
			<view class="textimglist_con_b flexstart flexworp">
				<view v-for="(item,index) in imglist" :key='index'>
					<image :src="item"></image>
				</view>
			</view>
		</view>
		<view class="textimglist_b">
			<view class="textimglist_con_c flexcenter">
				<text class="text_a">航空旅游+购物</text>
				<view class="text_b">
					<text>更多</text>
					<image src="../../static/right.png"></image>
				</view>
			</view>
			<view class="textimglist_con_d flexcolumn">
				<view v-for="(item,index) in imglistone" :key='index'>
					<image :src="item"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coupon: [],
				swipers: [],
				imglist: [],
				imglistone: [],
				shadowStyle: {
					backgroundImage: "none",
					paddingTop: "0",
					marginTop: "20rpx"
				},
			}
		},
		onLoad() {
			this.swipers = [
				'../../static/banner2.png',
				"../../static/banner3.png",
				"../../static/banner4.png"
				// "../../static/banner5.png"
			];
			this.imglist = [
				"../../static/banone.png",
				"../../static/bantwo.png",
				"../../static/banthree.png",
				"../../static/banfour.png"
			];
			this.imglistone = [
				"../../static/b.png",
				"../../static/b.png"
			]
		},
		mounted() {
			this.getliat()
		},
		methods: {
			getliat() {
				let that = this;
				let method = 'post';
				let data = {}
				that.$netReq('/user/index_info', method, data).then(res => {
					console.log(res)
					if (res && res.code == 200) {
						this.coupon = res.data.coupon
					}
				})
			},
			qbtn(item) {
				if (localStorage.getItem('token')) {
					let that = this;
					let method = 'post';
					let data = {
						'id': item.id,
						'token': localStorage.getItem('token')
					}
					that.$netReq('/user/api/receive_coupon', method, data).then(res => {
						console.log(res)
						uni.navigateTo({
							url: '../coupons/jgindex?state=' + res.code + '&id=' + item.id
						})

					})
				} else {
					console.log('未授权')
					this.$wxAuthorize();
				}
			},
			//点击轮播图详情
			swipersbtn(index) {

			},
			//点击活动详情
			eventdetailsbtn() {

			},
			gengduo() {
				window.location.href = 'https://wx.17u.cn/marktingapwebservice/activity/page/APAC142834KU20Z7CWR'
			},
			gengduoone() {
				uni.switchTab({
					url: '../coupons/coupons'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.header {
		display: block;
		height: 128rpx;
		width: 100%;
	}

	.home {
		swiper {
			width: 690rpx;
			height: 240rpx;
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

	.textimglist {
		background: #FFFFFF;
		border-radius: 15rpx;
		margin: 0rpx 30rpx;
		padding: 0rpx 20rpx 0rpx 20rpx;
		box-sizing: border-box;
		box-shadow: 0px 0px 10px #ececec;

		.textimglist_con {
			height: 92rpx;

			.text_a {
				font-size: 34rpx;
				font-weight: bold;
				color: #030303;
			}

			.text_b {
				margin-left: auto;

				text {
					font-size: 24rpx;
					font-weight: bold;
					color: #606060;
					height: 34rpx;
					margin-right: 17rpx;
				}

				image {
					width: 12rpx;
					height: 22rpx;
				}
			}
		}
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

	.volumeone {
		background: #E2F0D9;
	}

	.volumetwo {
		background: #DEEBF7;
	}

	.volume {
		border-radius: 15rpx;
		margin-bottom: 20rpx;

		.top_con {}

		.topleft_con {
			padding-bottom: 26rpx;

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
				margin-top: 40rpx;
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
				margin-top: 43rpx;
			}
		}

		.bottom_con {
			// height: 70rpx;
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

	.textimglist_a {
		background: #FFFFFF;
		border-radius: 15rpx;
		margin: 20rpx 30rpx 0rpx 30rpx;
		padding: 0rpx 20rpx 10rpx 20rpx;
		box-sizing: border-box;
		box-shadow: 0px 0px 10px #ececec;

		.textimglist_con_a {
			height: 92rpx;

			.text_a {
				font-size: 34rpx;
				font-weight: bold;
				color: #030303;
			}

			.text_b {
				margin-left: auto;

				text {
					font-size: 24rpx;
					font-weight: bold;
					color: #606060;
					height: 34rpx;
					margin-right: 17rpx;
				}

				image {
					width: 12rpx;
					height: 22rpx;
				}
			}
		}

		.textimglist_con_b {
			width: 100%;

			view {
				width: 320rpx;
				height: 227rpx;
				margin-bottom: 10rpx;

				image {
					display: inline-block;
					width: 320rpx;
					height: 227rpx;
					border-radius: 10rpx;
				}
			}

			view:nth-child(odd) {
				margin-right: 10rpx;
			}

		}
	}

	.textimglist_b {
		background: #FFFFFF;
		border-radius: 15rpx;
		margin: 20rpx 30rpx 24rpx 30rpx;
		padding: 0rpx 20rpx 10rpx 20rpx;
		box-sizing: border-box;
		box-shadow: 0px 0px 10px #ececec;

		.textimglist_con_c {
			height: 92rpx;

			.text_a {
				font-size: 34rpx;
				font-weight: bold;
				color: #030303;
			}

			.text_b {
				margin-left: auto;

				text {
					font-size: 24rpx;
					font-weight: bold;
					color: #606060;
					height: 34rpx;
					margin-right: 17rpx;
				}

				image {
					width: 12rpx;
					height: 22rpx;
				}
			}
		}

		.textimglist_con_d {
			width: 100%;

			view {
				width: 100%;
				height: 230rpx;
				margin-bottom: 20rpx;

				image {
					display: inline-block;
					width: 100%;
					height: 230rpx;
					border-radius: 10rpx;
				}
			}
		}
	}
</style>
