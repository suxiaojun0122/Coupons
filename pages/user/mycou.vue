<template>
	<view class="content">
		<!-- 选项卡 -->
		<u-tabs-swiper ref="uTabs" bar-width='109' bar-height='8' active-color='#25AAE5' inactive-color='#0F0E0E'
			:list="tabs" :current="current" @change="tabsChange" :is-scroll="false" font-size='28'>
		</u-tabs-swiper>
		<view style="height: 10rpx;background-color: #ececec;"></view>
		<view class="zwsj-box" v-if="getliat.length == 0">
			<view class="no-content">
				暂无优惠券
			</view>
		</view>
		<swiper :current="swiperCurrentone" @transition="transition" @animationfinish="animationfinish">
			<swiper-item v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="onreachBottomone">
					<view class="active-color">
						<!-- 优惠券 -->
						<view class="consty flexcolumn" v-for="(item,indexs) in getliat" :key='indexs'>
							<view :class="item.type==1?'volume volumeone':'volume volumetwo'" :style="{'background':background}">
								<view class="top_con flexstart">
									<view class="topleft_con flexcolumn" :style="{'border-right':borright}">
										<view class="left-a flexstart">
											<!-- <image :src="questy" ></image> -->
											<image :src="questy" v-if="item.type==1"></image>
											<image :src="questyone" v-if="item.type==2"></image>
											<!-- <image src="../../static/majh.png"></image> -->
											<text>元</text>
										</view>
										<view class="bigmoney">{{parseInt(item.num)}}</view>
										<view class="bigmoney_a" v-if="item.type==1">消费满{{parseInt(item.condition)}}元
										</view>
									</view>
									<view class="topright_con flexstart" :style="{'border-left':borleft}">
										<view>
											<view class="rig_a">
												{{item.name}}
											</view>
											<view class="rig_d">
												券码：<text>{{item.code}}</text>
											</view>
											<view class="rig_b">
												{{$timestampToTime(item.start_time)}}至{{$timestampToTime(item.end_time)}}
											</view>
											<view class="rig_c" v-if="rig_c"  v-clipboard:copy="item.code" v-clipboard:success="onCopy">复制券码</view>
										</view>
										<image class="rig_img" src="../../static/folwer.png"></image>
									</view>
								</view>
								<view class="bottom_con flexcenter" v-if="item.remark">
									<view class="let_b flexstart">
										<image src="../../static/twoma.png"></image>
										<u-read-more class="readmore flexstart" ref="uReadMore"
											:shadow-style="shadowStyle" :show-height="50" :toggle='true' close-text=''
											open-text='' color='#000000' text-indent='0'>
											<rich-text :nodes="item.remark"></rich-text>
										</u-read-more>
									</view>
								</view>
							</view>

						</view>
					</view>
					<u-loadmore :status="status" :icon-type="iconType" :load-text="loadText"
						v-if="getliat.length != 0" />
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shadowStyle: {
					backgroundImage: "none",
					paddingTop: "0",
					marginTop: "20rpx"
				},
				tabs: [{
					name: '未使用'
				}, {
					name: '已使用',
					count: 0
				}, {
					name: '已过期',
					count: 0
				}],
				getliat: [],
				current: 0,
				swiperCurrentone: 0,
				background: '',
				questy: '../../static/maj.png',
				questyone: '../../static/xj.png',
				rig_c: true,
				borleft: '1px dashed #FFFFFF',
				borright: '1px dashed #FFFFFF',
				page: 1,
				status: 'loadmore',
				iconType: 'flower',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
			}
		},
		onLoad() {
			this.getlist()
		},
		mounted() {
			
		},
		watch: {
			current: {
				handler(a, b) {
					console.log(a)
					if (a != 0) {
						this.background = '#DEDEDE'
						this.questy = '../../static/majh.png'
						this.questyone = '../../static/xjh.png'
						this.rig_c = false
						this.borleft = '0'
						this.borright = '1px dashed #FFFFFF'
					} else {
						this.background = ''
						this.questy = '../../static/maj.png'
						this.questyone = '../../static/xj.png'
						this.rig_c = true
						this.borleft = '1px dashed #FFFFFF'
						this.borright = '0'
					}
					this.getliat = [];
					this.page = 1
					this.getlist();
				},
				immediate: false
			}
		},
		methods: {
			getlist() {
				let that = this;
				let method = 'post';
				let type = '1'
				if (this.swiperCurrentone == 0) {
					type = '1'
				} else if (this.swiperCurrentone == 1) {
					type = '2'
				} else if (this.swiperCurrentone == 2) {
					type = '3'
				}
				let data = {
					'type': type,
					'page': that.page,
					'offset': 10
				}
				that.$netReq('/user/api/my_coupon', method, data).then(res => {
					if (res && res.code == 200) {
						// that.getliat = res.data
						// 拼接列表
						if (that.getliat.length != 0) {
							// this.goodsList = []
							if (that.page == 1) {
								that.getliat = []
							}
							that.getliat = that.getliat.concat(res.data)
							that.status = 'nomore';
						} else {
							that.getliat = res.data
						}
					}
				})
			},
			// 复制成功时的回调函数
			onCopy(e) {
				this.$defineToast('复制成功')
			}, 
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrentone = index;
				console.log('z')
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrentone = current;
				this.current = current;
			},
			// 上滑加载
			onreachBottomone() {
				if (this.getliat.length != 0) {
					// 当前页已经是最新页
					console.log(this.getliat.length)
					if (this.getliat.length<10) {
						this.status = 'nomore';
						return;
					}else{
						this.status = 'loading';
						this.page += 1;
						this.getlist();
					}
					
				}
			},
		}

	}
</script>

<style lang="scss" scoped>
	uni-swiper {
		height: 100vh;
	}

	.content {
		width: 100%;
		height: 100%;
	}
	.zwsj-box {
		width: 366rpx;
		height: 400rpx;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.no-content {
		display: flex;
		justify-content: center;
		// margin-top: 40rpx;
		// font-size: ;
		// color: #CCCCCC;
	}

	.active-color {}

	.consty {
		margin-left: 30rpx;
		margin-right: 30rpx;
		margin-top: 20rpx;
		padding: 20rpx 20rpx 0rpx 20rpx;
		box-sizing: border-box;
		box-shadow: 0px 0px 10px #ececec;
		border-radius: 15rpx;
		position: relative;
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
		// background: #DEDEDE;
		border-radius: 15rpx;
		margin-bottom: 20rpx;

		.top_con {}

		.topleft_con {
			// border-right: 1px dashed #FFFFFF;
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
				line-height: 79rpx;
				font-weight: bold;
				color: #000000;
				text-align: center;
			}

			.bigmoney_a {
				font-size: 24rpx;
				font-weight: bold;
				color: #000000;
				text-align: center;
			}
		}

		.topright_con {
			// border-left: 1px dashed #FFFFFF;
			padding-bottom: 26rpx;

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
				height: 22rpx;
				font-weight: 500;
				color: #010101;
				margin-top: 22rpx;
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
				margin-top: 29rpx;
				padding-bottom: 26rpx;
			}

			.rig_d {
				font-size: 22rpx;
				height: 22rpx;
				font-weight: bold;
				color: #010101;
				margin-left: 22rpx;
				margin-top: 24rpx;
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
</style>
