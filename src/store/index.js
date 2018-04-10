import Vue from 'vue';
import Vuex from 'vuex';

//使用vuex
Vue.use(Vuex);

//引入数据
import cart from './cart';
//导出实例
export default new Vuex.Store({
	 modules:{
	    cart,
	  },
})