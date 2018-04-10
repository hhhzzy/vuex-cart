<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <shop-list></shop-list>
    <shop-cart></shop-cart>
    <shop-all></shop-all>
  </div>
</template>

<script>
import shopList from './component/shop-list.vue'
import shopCart from './component/shop-cart.vue'
import shopAll from './component/shop-all.vue'
export default {
  name: 'app',
  components:{
    shopList,
    shopCart,
    shopAll
  },
  data () {
    return {
      msg: '购物车案例'
    }
  }
}
</script>

<style>

</style>
