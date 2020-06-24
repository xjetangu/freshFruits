<template>
  <div class="goosListitem">
    <img :src="goodsListItem.url" alt />
    <div class="showInfo">
      <h3>{{goodsListItem.title}}</h3>
      <p>{{goodsListItem.showinfo}}</p>
      <p>
        ￥{{goodsListItem.price}}
        <span @click="goodsListClick(goodsListItem)">+</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    goodsListClick(val) {
      this.$store.dispatch("pushShopList", val).then(res =>{
      this.$toast.show(res,2000)
       
        
      });
    }
  }
};
</script>
<style lang="less" scoped>
.goosListitem {
  display: flex;
  margin: 10px 0;

  img {
    width: 30%;
    height: 150px;
  }
  .showInfo {
    width: 80%;
    margin-left: 5px;
    border-bottom: 1px solid rgb(196, 190, 190);
    h3 {
      margin: 0;
      font-weight: 400;
    }
    :nth-child(2) {
      display: inline-block;
      margin: 10px 0 15px 0;
      border: 1px solid gray;
      padding: 5px;
      border-radius: 10px;
    }
    :nth-child(3) {
      font-size: 20px;
      color: hotpink;
      span {
        float: right;
        margin-right: 5px;
        width: 30px;
        height: 30px;
        background: hotpink;
        border-radius: 50%;
        font-size: 20px;
        text-align: center;
        line-height: 30px;
        color: #fff;
      }
    }
  }
}
</style>