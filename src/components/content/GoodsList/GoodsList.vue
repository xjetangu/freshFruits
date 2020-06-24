<template>
  <div class="goodsList">
    <goodsListItem
      v-for="(item,index) in goodsListItem"
      :key="index"
      :goodsListItem="item"
    
    ></goodsListItem>
  </div>
</template>
<script>
import goodsListItem from "./GoodsListItem";
export default {
  data() {
    return {
      goodsListItem: []
    };
  },
  created() {
    this.getList();
  },
  components: {
    goodsListItem
  },
  methods: {
    getList() {
      this.$http.get("/goodlist").then(res => {
        this.goodsListItem = res.data.goodsList;
      });
    },
    // goodsListClick(item) {
    //   this.$store.commit('pushShopList',item)
    // }
  }
};
</script>
<style lang="less" scoped>
</style>