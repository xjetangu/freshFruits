<template>
  <div class="shopCar">
    <searchBar>
      <div class="search" slot="search">
        <van-icon name="location-o" />
        <span>购物车</span>
      </div>
    </searchBar>
    <shopCartList></shopCartList>
    <shopBottom ref="shopBottom"></shopBottom>
  </div>
</template>

<script>
import searchBar from "../../components/content/searchBar/searchBar";
import shopCartList from "./childComponents/shopCarList";
import shopBottom from "./childComponents/shopBottom";
export default {
  name: "",
  data() {
    return {};
  },
  
   
  components: {
    searchBar,
    shopCartList,
    shopBottom
  }
};
</script>
<style lang='less' scoped>
.shopCar {
  width: 100%;
  padding-top: 44px;
  .search {
    margin: 0;
  }
}
</style>
