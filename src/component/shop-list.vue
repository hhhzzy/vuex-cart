<template>
	<div class="shop-list">
		<h2>商品信息</h2>
		<table>
			<thead>
				<tr>
					<th>id</th>
					<th>名称</th>
					<th>价格</th>
					<th>数量</th>
					<th>操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for=" obj in goodsObj ">
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
						{{obj.num}}
					</td>
					<td>
						<!-- <button @click="add(obj)">{{obj.num ? "+" : "加入购物车"}}</button> -->
						<button @click="add(obj)">加入购物车</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				goodsObj:[],
			}
		},
		mounted(){
			var list = this.$store.state.cart.goodsLists;
			for(var i = 0; i < list.length; i ++){
				this.goodsObj.push(list[i]);
			}
		},
		methods:{
			add(obj){
				var goodsId = obj.id; //点击的当前商品的id
				this.$store.dispatch('create_goods',{obj});
			}
		}
	}
</script>
<style scoped>
	table{border-collapse: collapse;}
	table th,td{border:1px solid black;width: 200px;height: 50px;text-align: center;}
	button{border:none;background-color:#46b8da;color: white;cursor: pointer;width: 96px;height: 34px;border-radius: 5px;}
</style>