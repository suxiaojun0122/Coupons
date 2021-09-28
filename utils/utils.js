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
				'token': store.state.token,
				'Authorization': store.state.ticket,
				// 'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6ImMxMDI1ZTRkNjZmZTk5NWY3MmE3OWJhZTNmYmQ1ZDk4YTVkNzhlZWMzZGY4MzBmMGUxYmIxYTE0Yzg0NDMwYmMifQ.O1tIn3dABNHX9iwp0RJxkmsNPGtSDE6OHS6hkJco0C4',
			},
			success(r) {
				// uni.hideLoading()
				setTimeout(function() {
					uni.hideLoading();
				}, 1000);
				if (r.data.code == 401 || r.data.code == 1006) {
					defineToast(r.data.code)
					uni.clearStorageSync();
					// if (uni.getSystemInfoSync().platform === 'ios') {
					// 	window.webkit.messageHandlers.doAction.postMessage(JSON.stringify({
					// 		"event": "web_close"
					// 	}))
					// } else if (uni.getSystemInfoSync().platform === 'android') {
					// 	window.doAction.postMessage(JSON.stringify({
					// 		"event": "web_close"
					// 	}))
					// }
				} else if (r.data.code == 400) {
					uni.showToast({
						icon: 'none',
						title: r.data.msg,
						duration: 5000,
						position: 'bottom'
					});
				} else {
					res(r.data)
				}
			},
			fail() {
				uni.hideLoading()
				// if (url.indexOf('/trip/businesstravel/companyInfo') != -1) {
				// 	uni.navigateTo({
				// 		url: '/components/components/error/index'
				// 	})
				// } else {
				// 	defineToast('请求超时,稍候再试')
				// }
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
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

function wxAuthorize() {
	let link = window.location.href;
	// 已经授权登录过的就不用再授权了
	// if (store.state.token) return;
	
	// 如果拿到code，调用授权接口，没有拿到就跳转微信授权链接获取
	// if (getWXCode("code")) {
	// 	api.wxAuth(params.code); // 调用后台接口，授权
	// } else {
		let appid = 'wxf246b0f9a3dd5503';
		let uri = encodeURIComponent(link);
		let authURL =
			`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${uri}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
		window.location.href = authURL;
	// }
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
export {
	netRequest,
	defineToast,
	regexConfig,
	wxAuthorize
	// uploadImg
}
