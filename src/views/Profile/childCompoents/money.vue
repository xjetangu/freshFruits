<template>
    <div class="money">
        <ul class="moneyitem">
            <li>
                <h4>￥0</h4>
                <span>余额</span>
            </li>
            <li>
                <h4>0</h4>
                <span>优惠券</span>
            </li>
             <li>
                <h4>0</h4>
                <span>商品券</span>
            </li>
             <li>
                <h4>0</h4>
                <span>鲜币兑换</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.money {
   
    width: 100%;
   
  padding:10px 10px;
   box-sizing: border-box;
  .moneyitem {
      border-radius: 10px;
     background: #fff;
    display: flex;
    li:nth-child(4) {
        border: none;
    }
    li {
        flex: 1;
        padding: 15px;
        
        text-align: center;
        border-right: 1px solid rgb(235, 233, 233);
        span {
            display: inline-block;
            padding-top: 5px;
            color: gray;
        }
    }
  }
    
}
</style>