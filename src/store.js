import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

cons store = new Vuex.store.({
	state : {
		token : "",
		apiKey: "AIzaSyCaa2Giws-CcFDGushuApB0cc-vxscXZVI",
	},
	mutations : {
		setToken(state,token){
			state.token = token
		},
		clearToken(state){
			state.token = ""
		}
	},
	actions : {
		login({ commit, dispatch, state}, autData){
		},
		logout({ commit, dispatch, state}, autData){
		},
	},
	getters : {}
})

export default store