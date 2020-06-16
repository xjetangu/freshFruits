<template>
  <div class="goosItem">
    <ul>
      <li v-for="(item,index) in goodsList" :key="index">
        <img :src="item.url" alt />
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList: []
    };
  },
  created() {
    this.getGoodList();
  },

  methods: {
    getGoodList() {
      this.$http.get("/goodsItem").then(res => {
        this.goodsList = res.data.goods0Item.goods0ItemList;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.goosItem {
  margin-top: 10px;

  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 80px;
      text-align: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
  }
}
</style>