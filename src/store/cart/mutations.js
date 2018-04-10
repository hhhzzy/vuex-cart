import * as type from './mutations_types.js';


export default{
	[type.CREATE_GOODS](state,obj){  //添加商品到购物车
		var list = state.cartList;
		var record = list.find((item) =>{   //es6的find(() => {})写法，如果找到了该商品就返回该商品，没找到就返回underfind
			return  item.id == obj.id;
		});
		if(record == undefined){
			state.cartList.push(obj);  //吧当前点击的商品放入state的存放商品的全局变量中
			obj.num--;//商品的总数量-1
			obj.saleNum++;//已卖的数量+1
		}else{
			if(obj.num == 0){
				alert("没有库存了!");
			}else{
				record.num--;//商品的总数量-1
				record.saleNum++;//已卖的数量+1
			}
		}
	},
	[type.REDUCE_NUM](state,obj){   //减少商品
		if(obj.saleNum > 1){   //当购物车的商品数量为1时，不允许减少商品了
			obj.num++;
			obj.saleNum--;
		}
	},
	[type.DEL_GOODS](state,obj){//删除商品
		for(var i = 0; i < state.cartList.length; i ++){
			if(state.cartList[i] == obj){
				state.cartList[i].num += obj.saleNum;
				obj.saleNum = 0;
				state.cartList.splice(i,1);//删除数组中的商品
				break;
			}
		}

	}
}