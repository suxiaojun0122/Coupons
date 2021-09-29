<template>
	<view class="content">
		<z-paging ref="paging" v-model="coulist" @query="getliat">
			<!-- 优惠券 -->
			<view class="consty flexcolumn">
				<view class="volume" v-for="(item,index) in coulist" :key='index'>
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
								<view class="rig_b">
									{{$timestampToTime(item.start_time)}}至{{$timestampToTime(item.end_time)}}
								</view>
								<view class="rig_c" @tap="qbtn(item)">立即抢券</view>
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
		</z-paging>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coulist: [],
				shadowStyle: {
					backgroundImage: "none",
					paddingTop: "0",
					marginTop: "20rpx"
				},
			}
		},
		onLoad() {},
		mounted() {},
		methods: {
			qbtn(item) {
				uni.showModal({
				    title: '敬请恭候',
				    content: '2021年10月开始领券',
					showCancel:false
				});
				// if (this.$getWXCode('code')) {
				// 	let that = this;
				// 	let method = 'post';
				// 	let data = {
				// 		'id': item.id,
				// 		'token':localStorage.getItem('token')
				// 	}
				// 	that.$netReq('/user/api/receive_coupon', method, data).then(res => {
				// 		console.log(res)
				// 		uni.navigateTo({
				// 			url: './jgindex?state=' + res.code +'&id=' + item.id
				// 		})
						
				// 	})
				// } else {
				// 	console.log('未授权')
				// 	this.$wxAuthorize();
				// }
			},
			getliat(pageNo, pageSize) {
				//这里的pageNo和pageSize会自动计算好，直接传给服务器即可
				//通过this.$refs.paging.complete(请求回来的数组);将请求结果传给z-paging
				let that = this;
				let method = 'post';
				let data = {
					'offset': pageSize,
					'page': pageNo
				}
				that.$netReq('/user/coupon_list', method, data).then(res => {
					console.log(res)
					if (res && res.code == 200) {
						this.$refs.paging.complete(res.data);
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.consty {
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

	.oksty {
		font-size: 32rpx;
		font-weight: 500;
		color: #030303;
		text-align: center;
		margin-top: 60rpx;
		margin-bottom: 126rpx;
	}

	.cgimg {
		width: 145rpx;
		height: 145rpx;
		display: block;
		margin: 162rpx auto 0rpx auto;
	}

	.cgbtn {
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

	.fhbtn {
		width: 471rpx;
		height: 88rpx;
		border: 2px solid #25AAE5;
		border-radius: 44rpx;
		margin: 50rpx auto;
		text-align: center;
		line-height: 88rpx;
		font-size: 28rpx;
		font-weight: bold;
		color: #25AAE5;
	}
</style>
