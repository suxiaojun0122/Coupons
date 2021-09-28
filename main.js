import Vue from 'vue'
import App from './App'
import config from "@/config.js"
//引入vuex
import store from './store'

//把vuex定义成全局组件
Vue.prototype.$store = store;
Vue.config.productionTip = false;

// 引入uView 
import uView from "uview-ui"
Vue.use(uView)
/* uni.scss 文件 引入uView的全局SCSS主题文件 */
import 'uview-ui/theme.scss';

//引入封装好的函数
import {netRequest,defineToast,regexConfig,wxAuthorize} from './utils/utils.js';

//vconsole--移动端调试
// import VConsole from "vconsole";

Vue.prototype.$baseUrl = window.global_config.BASE_URL;

 
Vue.prototype.$netReq = netRequest;
Vue.prototype.$wxAuthorize = wxAuthorize;
Vue.prototype.$defineToast = defineToast;
Vue.prototype.$reg = regexConfig;
Vue.config.productionTip = false
//vconsole需移动端测试打开
// const vConsole = new VConsole();
// Vue.use(vConsole);

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
