<template>
  <div class="profile">
    <scroll class="content">
      <login></login>
      <money></money>
      <orders></orders>
      <poster></poster>
      <service></service>
    </scroll>
  </div>
</template>

<script>
import login from "./childCompoents/login";
import money from "./childCompoents/money";
import orders from "./childCompoents/orders";
import poster from "./childCompoents/poster";
import service from "./childCompoents/sevice";
import scroll from "../../components/common/scroll/scroll";
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    login,
    money,
    orders,
    poster,
    service,
    scroll
  }
};
</script>
<style lang='less' scoped>
.profile {
  height: 100vh;
}
.content {
  height: calc(100% - 49px);
}
</style>
