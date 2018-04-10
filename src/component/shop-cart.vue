<template>
	<div class="shop-cart">
		<h2>购物车的信息</h2>
		<table>
			<thead>
				<tr>
					<th>id</th>
					<th>名称</th>
					<th>单价</th>
					<th>数量</th>
					<th>总价</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for=" obj in cartList ">
					<td>
						{{obj.id}}
					</td>
					<td>
						{{obj.name}}
					</td>
					<td>
						{{obj.price}}
					</td>
					<td>
						{{obj.saleNum}}
					</td>
					<td>
						{{obj.saleNum * obj.price}}
					</td>
					<td>
						<button @click="add_num(obj)">+</button>
						<button @click="reduce_num(obj)">-</button>
						<button class="del-btn" @click="del_goods(obj)">X</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	import {mapState} from "vuex";
	import {mapAction} from "vuex"
	export default{
		// computed:{
		// 	// console.log(this.$store+"2626");
		// 	cartList(){   //把state里面cartList里面改变的数据读取到购物车中
		// 		return this.$store.state.cart.cartList;
		// 	},

		// },
		computed:mapState({   //使用mapState:把state 映射到 子组件中，所以子组件可以直接使用state
			cartList: state => state.cart.cartList
		}),
		methods:{
			add_num(obj){
				this.$store.dispatch('create_goods',{obj});
			},
			reduce_num(obj){
				this.$store.dispatch('reduce_num',{obj});
			},
			del_goods(obj){
				this.$store.dispatch('del_goods',{obj});
			}
		}
	}
</script>
<style scoped>
	table{border-collapse: collapse;}
	table th,td{border:1px solid black;width: 200px;height: 50px;text-align: center;}
	button{border:none;background-color:#46b8da;color: white;cursor: pointer;width: 55px;height: 34px;border-radius: 5px;}
	.del-btn{background-color: red;}
</style>