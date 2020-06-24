<template>
  <div class="tabbar">
    <tabbarItem class="item" path='/home' color='hotpink'>
      <van-icon name="wap-home-o" slot="img" size="20" />
      <van-icon name="wap-home-o" slot="img1" size="20" color="hotpink"/>
      <span slot="text">首页</span>
    </tabbarItem>
    <tabbarItem class="item" path='/category' color='hotpink'>
      <van-icon name="qr-invalid" slot="img" size="20"  />
      <van-icon name="qr-invalid" slot="img1" size="20" color="hotpink" />
      <span slot="text">分类</span>
    </tabbarItem>
    <tabbarItem class="item" path='/shopCar' color='hotpink'>
      <van-icon name="shopping-cart-o" slot="img" size="20" />
        <van-icon name="shopping-cart-o" slot="img1" size="20" color="hotpink" />
      <span slot="text">购物车</span>
    </tabbarItem>
    <tabbarItem class="item" path='/profile' color='hotpink'>
      <van-icon name="user-circle-o" slot="img" size="20" />
       <van-icon name="user-circle-o" slot="img1" size="20" color="hotpink" />
      <span slot="text">我的</span>
    </tabbarItem>
  </div>
</template>

<script>
import tabbarItem from "./tabbarItem";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    tabbarItem
  }
};
</script>
<style lang="less">
.tabbar {
  display: flex;
  position: fixed;
  height: 49px;
 
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
z-index: 9999999;
  align-items: center;
  .item {
    flex: 1;
    text-align: center;
  }
}
</style>