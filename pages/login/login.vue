<template>
	<view class="content">
		<image src="../../static/header.png" class="headerimg"></image>
		<view class="textname flexcolumn">
			<view class="telephone flexcenter">
				<text>手机号码：+86</text>
				<input v-model="telephone" placeholder="请输入手机号" placeholder-style="color: #A4A4A4;font-size:28rpx"
					maxlength='11' type="number" />
			</view>
			<view class="tzpass flexcenter">
				<text>短信验证码：</text>
				<input v-model="dxcode" placeholder="请输入短信验证码" placeholder-style="color: #A4A4A4;font-size:28rpx"
					maxlength='6' type="number" />
				<view class="button">
					<text v-if="yzshow" @click="getCode">获取验证码</text>
					<text v-if="!yzshow">{{yzcount}}s</text>
				</view>
			</view>
			<view class="flexcenter">
				<view class='btn_zc' @tap="zcbtn">立即注册</view>
			</view>
		</view>
		<image src="../../static/headerone.png" class="headerimgone"></image>
		<view class="footer">
			大兴航空旅游节将依托北京大兴国际机场的便利通达，助力北京锚定‘国际’方向，聚焦‘消费’核心，建成具有全球影响力的国际消费中心城市，引领创新生态的数字消费和新型消费标杆，促进北京服务贸易的发展。由临空区管委会发放“大兴航空旅游节”消费券，用于购买大兴机场出行的相关机票产品，助力大兴航空旅游业态健康发展。
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				telephone: '',
				dxcode: '',
				yzshow: true,
				yzcount: 60
			}
		},
		onLoad(opction) {},
		methods: {
			// 获取短信验证码
			getCode() {
				console.log(this.telephone.split(''))
				// 验证码倒计时
				if(this.telephone && this.telephone.split('').length==11){
					let that = this;
					let method = 'post';
					let data = {
						'phone': that.telephone
					}
					that.$netReq('/user/api/get_code', method, data).then(res => {
						console.log(res)
						if(res && res.code==200){
							that.$defineToast('获取成功')
							if (!that.timer) {
								that.yzcount = 60;
								that.yzshow = false;
								that.timer = setInterval(() => {
									if (that.yzcount > 0 && that.yzcount <= 60) {
										that.yzcount--;
									} else {
										that.yzshow = true;
										clearInterval(that.timer);
										that.timer = null;
									}
								}, 1000);
							}
						}else{
							that.$defineToast('手机号输入错误')
						}
						
					})
				}else{
					this.$defineToast('请输入正确的手机号')
				}
				
			},
			zcbtn() {
				if(this.telephone && this.dxcode){
					let that = this;
					let method = 'post';
					let data = {
						'phone': that.telephone,
						'code':that.dxcode
					}
					that.$netReq('/user/api/user_auth', method, data).then(res => {
						console.log(res)
						if(res.code==200){
							window.location.href = window.location.origin+'/#/pages/user/user'
						}else{
							that.$defineToast(res.message)
						}
						
					})
				}
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.headerimg {
		display: block;
		width: 100%;
		height: 408rpx;
	}

	.headerimgone {
		display: block;
		width: 100%;
		height: 260rpx;
	}

	.textname {
		height: 407rpx;
		width: 100%;
		background: #F2F2F2;

		.telephone {
			margin-left: 30rpx;
			margin-right: 30rpx;
			margin-top: 45rpx;

			text {
				font-size: 28rpx;
				font-weight: bold;
				color: #030303;
				width: 200rpx;
			}

			input {
				width: 470rpx;
				height: 74rpx;
				background: #FFFFFF;
				padding: 0rpx 25rpx;
				box-sizing: border-box;
				margin-left: 30rpx;
				font-size: 28rpx;
				font-weight: 500;
				// color: #A4A4A4;
			}

		}

		.tzpass {
			margin-left: 30rpx;
			margin-right: 30rpx;
			margin-top: 30rpx;

			text {
				font-size: 28rpx;
				font-weight: bold;
				color: #030303;
				width: 200rpx;
			}

			input {
				width: 284rpx;
				height: 74rpx;
				background: #FFFFFF;
				padding: 0rpx 25rpx;
				box-sizing: border-box;
				margin-left: 30rpx;
				font-size: 28rpx;
				font-weight: 500;
				// color: #A4A4A4;
			}

			.button {
				width: 166rpx;
				height: 74rpx;
				background: #FDC101;
				border: 1px solid #616281;
				border-radius: 5rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #030303;
				outline: none;
				text-align: center;
				line-height: 72rpx;
				margin-left: 20rpx;
			}
		}

		.btn_zc {
			width: 470rpx;
			height: 88rpx;
			line-height: 84rpx;
			text-align: center;
			background: #25AAE5;
			border-radius: 44px;
			margin: 58rpx auto;
			font-size: 28rpx;
			font-weight: bold;
			color: #FFFFFF;
		}
	}

	.footer {
		margin-top: 67rpx;
		padding: 0rpx 30rpx 65rpx 30rpx;
		box-sizing: border-box;
		text-indent: 2em;
		text-align: justify ;
	}
</style>
