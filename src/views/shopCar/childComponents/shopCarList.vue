<template>
  <div class="shopCarList">
    <scroll class="content">
      <shopListItem v-for="(item,index) in shopCarsList" :key="index" :listItem="item"></shopListItem>
    </scroll>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import shopListItem from "./shopListItem";
import scroll from "../../../components/common/scroll/scroll";
export default {
  computed: {
    ...mapGetters(["shopCarsList"]),   
  },
  components: {
    shopListItem,
    scroll
  }
};
</script>
<style lang="less" scoped>
.shopCarList {
  height: 100vh;
  padding-top: 0;
}
.content {
  height: calc(100% - 130px);
}
</style>