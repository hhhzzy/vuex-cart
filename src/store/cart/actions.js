import * as type from './mutations_types.js'

export default{
	reduce_num:({commit},{obj}) => {
		commit(type.REDUCE_NUM,obj);
	},
	create_goods:({commit},{obj}) => {
		commit(type.CREATE_GOODS,obj);
	},
	del_goods:({commit},{obj}) => {
		commit(type.DEL_GOODS,obj);
	}
} 