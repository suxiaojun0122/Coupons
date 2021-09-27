<script>
	export default {
		mounted() {
			//在页面加载时读取sessionStorage里的状态信息
			if (sessionStorage.getItem("store")) {
				this.$store.replaceState(
					Object.assign({},
						this.$store.state,
						JSON.parse(sessionStorage.getItem("store"))
					)
				);
			}
			//在页面刷新时将vuex里的信息保存到sessionStorage里
			window.addEventListener("beforeunload", () => {
				sessionStorage.setItem("store", JSON.stringify(this.$store.state));
			});
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	// @import './common/common.css';
	// @import './common/ask_for_leave.css';
	/*每个页面公共css */
	page{
		font-family:'PingFang SC,思源雅黑';
	}
	// uni-swiper{
	// 	height: 100vh;
	// }
</style>
