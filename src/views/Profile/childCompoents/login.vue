<template>
  <div class="login">
    <div class="loginTop">
        <van-icon name="user-circle-o" size='50' color="pink" />
        <h2>登陆/注册</h2>
        <van-icon name="envelop-o" size='30' color="pink" />
    </div>
    <vip></vip>
  </div>
</template>
<script>
import vip from './vip'
export default {
    components:{
        vip
    }
};
</script>
<style lang="less" scoped>
.login {
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 10px;
  width: 100%;
  height: 230px;
  background: -webkit-linear-gradient(left, #eea0c7, #ee6c9e 100%);
 .loginTop {
     height: 100px;
     display: flex;
     justify-content: space-around;
     align-items: center;
     h2 {
         margin: 0;
         margin-left: -104px;
         color: rgb(247, 232, 205);
         
     }
 }
 
}
</style>