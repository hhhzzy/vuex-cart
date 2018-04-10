module.exports = {
	calculateCart(state){
		console.log(state)
		var list = state.cartList;
        state.cartInfo.cartMoney = 0;
        state.cartInfo.cartNum = 0;
        state.cartInfo.cartNum = list.length;
        for(var i = 0; i < list.length; i ++){
            state.cartInfo.cartMoney += list[i].saleNum * list[i].price; 
        }   
		return  state.cartInfo;
	}
}