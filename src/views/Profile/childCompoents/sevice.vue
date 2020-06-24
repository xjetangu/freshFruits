<template>
  <div class="service">
    <h2>我的服务</h2>
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liwu" />
        </svg>
        <span>储值送红包</span>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-hongbao" />
        </svg>
        <span>邀请得现金</span>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-jifenshangcheng" />
        </svg>
        <span>积分商城</span>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wodepintuan-" />
        </svg>
        <span>我的拼团</span>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-kefu" />
        </svg>
        <span>客服与帮助</span>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon-test" />
        </svg>
        <span>收货地址</span>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shezhi" />
        </svg>
        <span>设置</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.service {
  background: #fff;
  border-radius: 10px;
  h2 {
    padding: 10px 0 10px 5px;
    font-weight: 400;
    color: rgb(108, 105, 107);
    margin: 0;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 25%;
      text-align: center;
      padding: 10px 0;
      :nth-child(1) {
        font-size: 25px;
      }

      span {
        display: block;
        margin-top: 10px;
        color: gray;
      }
    }
  }
}
</style>