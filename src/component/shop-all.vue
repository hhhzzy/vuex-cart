<template>
	<div class="shop-all">
		总价：{{count}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;总数量：{{all_money}}
	</div>
</template>
<script>
	export default{
		data(){
			return{
				m:11,
			}
		},
		computed:{
			// count(){
				// console.log(this.$store.state.cart.goodsLists);
			// }

			count(){  //购物车总的数量
				return this.$store.getters.calculateCart.cartNum;
			},
			all_money(){  //购物车的总价
				return this.$store.state.cart.cartInfo.cartMoney;
			},
		}
	}
</script>