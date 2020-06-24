<template>
  <div class="goods3">
    <scroll class="content" :probeType="3" :listenScroll="true" @scroll="scroll" ref="scroll">
      <goods1list :goods1List="goos3LIst"></goods1list>
    </scroll>
    <backTop @click.native="scrollTo" v-show="isbackTop"></backTop>
  </div>
</template>
<script>
import goods1list from "../../../components/content/Good1/good1List";
import scroll from "../../../components/common/scroll/scroll";
import backTop from "../../../components/content/backTop/backTop";

import { backTopMixin } from "../../../assets/js/mixin/mixin";
export default {
  data() {
    return {
      goos3LIst: []
    };
  },
  mixins: [backTopMixin],
  components: {
    goods1list,
    scroll
  },
  created() {
    this.goods3List();
  },
  methods: {
    async goods3List() {
      const res = await this.$http.get("/goods3");
      this.goos3LIst = res.data.goods3.goods3Item;
    }
  }
};
</script>
<style lang="less" scoped>
.goods3 {
  height: 100vh;
  margin-top: 80px;
  .content {
    height: calc(100% - 100px);
  }
}
</style>