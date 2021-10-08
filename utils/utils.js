import config from "../config.js"
const baseURL = window.global_config.BASE_URL;
// import '@/utils/common.js';
import Vue from 'vue'
import store from '@/store'


// 封装请求函数
const netRequest = (url, method = "POST", params, httpHeader = "application/json") => {
	url = baseURL + url;
	uni.showLoading({
		title: '努力加载中...',
	})
	return new Promise((res, rej) => {
		uni.request({
			url,
			method,
			data: params || {},
			header: {
				'content-type': httpHeader,
				'token': localStorage.getItem('token') ? localStorage.getItem('token') : ''
			},
			success(r) {
				// uni.hideLoading()
				setTimeout(function() {
					uni.hideLoading();
				}, 1000);
				if (r.data.code == 401 || r.data.code == 1006) {
					defineToast(r.data.code)
					uni.clearStorageSync();
				} else {
					res(r.data)
				}
			},
			fail() {
				uni.hideLoading()
				defineToast('请求超时,稍候再试')

			}

		})
	})
}
//自定义图片上传
// const uploadImg = (tempFilePaths, fromImg) => {
// 	var token = "",
// 		pid = "";
// 	if (uni.getStorageSync('userData').token != undefined) {
// 		token = uni.getStorageSync('userData').token;
// 		pid = uni.getStorageSync('userData').pid;
// 	}
// 	uni.uploadFile({
// 		url: baseURL + '/partner/headPic', //仅为示例，非真实的接口地址
// 		filePath: tempFilePaths[0],
// 		name: 'file',
// 		header: {
// 			'token': token,
// 			'Content-Type': 'multipart/form-data;charset=utf-8'
// 		},
// 		formData: {
// 			file: {
// 				'name': tempFilePaths[0]
// 			}
// 		},
// 		success: (uploadFileRes) => {
// 			console.log(uploadFileRes.data);
// 		}
// 	});

// }
// 自定义消息提示
const defineToast = (title, image = "", duration = 2000, mask) => {
	uni.showToast({
		title,
		icon: "none",
		image,
		duration,
		mask: true
	})
}

//是否已经获得code
function getWXCode(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	console.log(window.location.search, '浏览器地址')
	var r = window.location.search.substr(1).match(reg);
	console.log(r, 'r值')
	if (r != null) return decodeURI(r[2]);
	return null;
}
var code = ''

function wxAuthorize() {
	let link = window.location.href;
	console.log(link, 'window.location.href')
	// let link = 'https://coupon-system-index.huijik.com';
	// 已经授权登录过的就不用再授权了
	// if (localStorage.getItem('token')) return;

	// 如果拿到code，调用授权接口，没有拿到就跳转微信授权链接获取
	// if (getWXCode("code")) {
	// 	code = getWXCode('code')
	// 	console.log(code, 'code值')
	// 	getInfo()
	// } else {
		let appid = 'wxf246b0f9a3dd5503';
		let uri = encodeURIComponent(link);
		let authURL =
			`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
		window.location.href = authURL;
	// }
}
if (getWXCode('code')) {
	code = getWXCode('code')
	getInfo()
}
//获取用户信息 是否需要注册  获取token
function getInfo() {
	let that = this;
	let method = 'post';
	netRequest('/user/login', method, {
		'code': code
	}).then(res => {
		if (res && res.data && res.data.token) {
			localStorage.setItem('token', res.data.token)
		} else {
			localStorage.setItem('token', '')
		}
		if (res.code == 202) {
			uni.navigateTo({
				url: '/pages/login/login'
			})
			localStorage.setItem('usernames', res.data.nick_name)
			localStorage.setItem('avatar_urls', res.data.avatar_url)
			store.commit('usernames', res.data.nick_name)
			store.commit('avatar_urls', res.data.avatar_url)
		} else if (res.code == 200) {
			localStorage.setItem('usernames', res.data.nick_name)
			localStorage.setItem('avatar_urls', res.data.avatar_url)
			store.commit('usernames', res.data.nick_name)
			store.commit('avatar_urls', res.data.avatar_url)
			console.log(window.location)
			window.location.href=window.location.origin+window.location.hash
		} else {
			console.log('erro')
		}

	})
}

// 规则判断
function regexConfig() {
	var reg = {
		phone: /^1[3456789]\d{9}$/,
		idcard: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
		realName: /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/,
	}
	return reg;
}

// 时间戳转换成日期
function timestampToTime(timestamp) {
	var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	let Y = date.getFullYear() + '.';
	let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '.';
	let D = date.getDate() + ' ';
	return Y + M + D;
}
export {
	netRequest,
	defineToast,
	regexConfig,
	wxAuthorize,
	getWXCode,
	getInfo,
	timestampToTime
	// uploadImg
}
