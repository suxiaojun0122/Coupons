<template>
	<view class="content">
		<!-- 选项卡 -->
		<view>
			<u-tabs-swiper ref="uTabs" bar-width='100' active-color='pink' :list="tabs" :current="current" @change="tabsChange" :is-scroll="false" swiperWidth="750">
			</u-tabs-swiper>
		</view>
		<swiper :current="swiperCurrentone" @transition="transition"
			@animationfinish="animationfinish">
			<swiper-item v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 100%; width: 100" @scrolltolower="onreachBottomone">
					<view class="active-color">
						<view>
							<view class="volume">
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
										<view>
											券码：2346788
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
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs: [{
					name: '未使用'
				}, {
					name: '已使用',
					count: 0
				}, {
					name: '已过期',
					count: 0
				}],
				current: 0,
				swiperCurrentone: 0
			}
		},
		mounted() {
			console.log(this.$u.config.v);
		},
		methods: {
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
				// 	if (this.goodsList.length != 0) {
				// 		// 当前页已经是最新页
				// 		if (this.getSearch.page >= this.pageTotal) {
				// 			// 给出提示  没有更多了
				// 			this.status = 'nomore';
				// 			return;
				// 		};
				// 		this.status = 'loading';

				// 		this.getSearch.page += 1;
				// 		this.getGoodsListone();
				// 	}
			},
		}

	}
</script>

<style lang="scss" scoped>
	.active-color{
		
	}
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
