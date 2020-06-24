<template>
  <div class="shop-bottom">
    <checkButton :isChecked='isSelectAll' @click.native="checkClick"></checkButton>
    <div class="price">
      <span>总计:￥{{totalPrice}}</span>
      <div>提交订单</div>
    </div>
  </div>
</template>
<script>
import checkButton from "../../../components/content/checkButton/checkButton";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
     
    };
  },
  components: {
    checkButton
  },
  
  computed: {
     ...mapGetters(["shopCarsList"]),   
    totalPrice() {
     return this.shopCarsList.filter(item => {
      return item.checked === true
     }).reduce((preValue,item) =>{
       return preValue+item.price*item.count
     },0).toFixed(2)
      
    
    },
    isSelectAll() {
      if(this.shopCarsList.length === 0) return false
      return !this.shopCarsList.find(item => !item.checked)
    }
  },
  methods: {
    checkClick() {
      if(this.isSelectAll) {
        this.shopCarsList.forEach(item =>item.checked = false)
      }else {
        this.shopCarsList.forEach(item =>item.checked = true)
      }
      
    }
  },

};
</script>
<style lang="less" scoped>
.shop-bottom {
  position: fixed;
  width: 100%;
  height: 40px;
  background: #d6d5d5;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .price {
    display: flex;
    align-items: center;
    div {
      box-sizing: border-box;
      height: 40px;
      margin-left: 50px;
      padding: 10px;
      background: red;
      line-height: 20px;
      color: #fff;
    }
  }
  .bottomButton {
    margin: 10px;
  }
}
</style>