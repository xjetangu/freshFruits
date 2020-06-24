<template>
  <div class="orders">
    <div class="miOrders">
      <div class="miOrdersTop">
        <span>我的订单</span>
        <span>全部订单</span>
      </div>
      <ul>
        <li>
        

           <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-hongbao" />
          </svg>
          <p>待支付</p>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-waimaiguanli" />
          </svg>
          <p>待配送</p>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-waimai" />
          </svg>
          <p>配送中</p>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-waimai" />
          </svg>
          <p>待评价</p>
        </li>
        <li>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shouhou" />
          </svg>
          <p>售后/退款</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.orders {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  .miOrders {
    background: #fff;
    border-radius: 10px;
    .miOrdersTop {
      padding: 0 10px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #d6d1d1;
      color: gray;
      span:nth-child(1) {
        font-size: 20px;
      }
    }
    ul {
      display: flex;
      li {
        flex: 1;
        padding: 20px 0;
        text-align: center;
        :nth-child(1) {
          font-size: 25px;
          color: pink;
        }
        p {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>