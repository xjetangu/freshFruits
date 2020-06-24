<template>
  <div class="shoplistitem">
    <checkButton :isChecked='listItem.checked' @buttonClick="buttonClick(listItem)" class="button"></checkButton>
    <div class="shoplistTitle">
      <img :src="listItem.url" alt />
      <div class="itemTitle">
        <p>{{listItem.title}}</p>
        <p>包邮，最快次日到达</p>
        <p>
          <span class="price">￥{{listItem.price}}</span>
          <span>x{{listItem.count}}</span>
        </p>
      </div>
    </div>
 
    
  </div>
</template>
<script>
import checkButton from "../../../components/content/checkButton/checkButton";

export default {
  // data() {
  //   return {
  //     check:true
  //   }
  // },
  props: {
    listItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
 
  components: {
    checkButton
  },
  methods: {
    buttonClick(listItem) {
  //  this.listItem.checked = !this.listItem.checked
    this.$store.dispatch('changeChecked',listItem)  
    
          
    }
  },

};
</script>
<style lang="less" scoped>
.shoplistitem {
  box-sizing: border-box;
  width: 100%;
  height: 150px;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ddd7d7;
.button {
  margin-top: 50px;
}
  img {
    width: 30%;
    height: 100%;
    border-radius: 10px;
  }
  .shoplistTitle {
    display: flex;
    width: 95%;
  }
  .itemTitle {
    margin-left: 5px;
    p:nth-child(3) {
      display: flex;
      justify-content: space-between;
      .price {
        color: hotpink;
        font-size: 18px;
      }
    }
  }
  .itemTitle p:nth-child(1) {
    font-size: 18px;
  }
  .itemTitle p:nth-child(2) {
    padding: 15px 0;
  }
}
</style>