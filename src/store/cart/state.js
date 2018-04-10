module.exports = {
	//state：里面存放的是数据（全局变量）
	goodsLists:[
		{
			"id":1,
			"name":"苹果",
			"price":10,
			"num":10,
			"saleNum":0 //商品已卖的数量
		},
		{
			"id":2,
			"name":"梨",
			"price":10,
			"num":10,
			"saleNum":0  //商品已卖的数量
		},
		{
			"id":3,
			"name":"西瓜",
			"price":10,
			"num":10,
			"saleNum":0 //商品已卖的数量
		},
		{
			"id":4,
			"name":"香蕉",
			"price":10,
			"num":10,
			"saleNum":0 //商品已卖的数量
		},
		{
			"id":5,
			"name":"葡萄",
			"price":10,
			"num":10,
			"saleNum":0 //商品已卖的数量
		}
	],
	cartList:[],  //点击加入购物车时候，保存点击的当前商品
	cartInfo:{
		cartNum:0,//购物车商品总数量
		cartMoney:0,//购物车商品总价
	}
}