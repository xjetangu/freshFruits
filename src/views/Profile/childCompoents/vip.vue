<template>
    <div class="vip">
        <div class="vipTop">
           <p>
               <span>优享会员</span>
               <span>开通即享6大权益</span>
           </p>
           <span class="open">立即开通</span>
        </div>
        <ul>
            <li>
                <van-icon name="diamond-o" size='20' class="icon" />
                <span>专享价</span>
            </li>
           <li>
                <van-icon name="paid"  size='20' class="icon" />
                <span>任务红包</span>
            </li>
             <li>
                <van-icon name="point-gift-o" size='20' class="icon" />
                <span>会员日</span>
            </li>
             <li>
                <van-icon name="balance-list-o" size='20' class="icon" />
                <span>共享会员</span>
            </li>
             <li>
                <van-icon name="points" size='20' class="icon" />
                <span>积分加倍</span>
            </li>
             <li>
                <van-icon name="manager-o" size='20' class="icon" />
                <span>专属客服</span>
            </li>
             <li>
                <van-icon name="ellipsis" size='20' class="icon" />
                <span>敬请期待</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.vip {
  
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background: rgba(91,87,86,.4);
   .vipTop {
       display: flex;
       justify-content: space-between;
       padding: 10px;
       font-weight: 700;
       color:rgb(217,209,191) ;
        border-bottom: 1px solid rgb(217,209,191);
       .open {
            background: rgb(231, 231, 134);
            color: gray;
            padding: 5px;
            border-radius: 5px;
        }
       p {
          
           span:nth-child(1) {
              font-style: italic;
           }
           span:nth-child(2) {
               margin-left: 10px;
           }
       }
   }
   ul {
       display: flex;
       flex-wrap: wrap;
       li {
           width: 90px;
           padding: 10px 0;
           margin-left: 5px;
           color: rgb(235, 235, 137);
           .icon {
               vertical-align: bottom;
           }
           span {
               margin-left: 5px;
           }
       }
   }
}
</style>