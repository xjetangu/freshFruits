<template>
  <div class="goods5">
    <scroll class="content" :probeType="5" :listenScroll="true" @scroll="scroll" ref="scroll">
      <goods1list :goods1List="goos5LIst"></goods1list>
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
      goos5LIst: []
    };
  },
  mixins: [backTopMixin],
  components: {
    goods1list,
    scroll
  },
  created() {
    this.goods5List();
  },
  methods: {
    async goods5List() {
      const res = await this.$http.get("/goods5");
      this.goos5LIst = res.data.goods5.goods5Item;
    }
  }
};
</script>
<style lang="less" scoped>
.goods5 {
  height: 100vh;
  margin-top: 80px;
  .content {
    height: calc(100% - 100px);
  }
}
</style>