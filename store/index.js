import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		username:'',
		avatarurl:''
	},
	mutations: {
		usernames(state, res) {
			state.username = res;
		},
		avatar_urls(state, res) {
			state.avatarurl = res;
		},
	},
	actions: {
	}
})
export default store
