<template>
  <div class="goods1">
      <scroll class="content" :probeType='3' @scroll="scroll" :listenScroll='true' ref="scroll">
           <goods1List :goods1List="goods1List" ></goods1List>
      </scroll>
      <backTop @click.native="scrollTo" v-show="isbackTop"></backTop>
   
  </div>
</template>
<script>
import goods1List from "../../../components/content/Good1/good1List";
import backTop from '../../../components/content/backTop/backTop'

import scroll from '../../../components/common/scroll/scroll'
import {backTopMixin} from '../../../assets/js/mixin/mixin'

export default {
  data() {
    return {
      goods1List: []
    };
  },
  mixins:[backTopMixin],
  components: {
    goods1List, 
    scroll
  },
  created() {
    this.getGoods1();
  },
  methods: {
    async getGoods1() {
      const res = await this.$http.get("/goods1");
      this.goods1List = res.data.goods1.goods1Item;
    }
  
  }
  
};
</script>
<style lang="less" scoped>
.goods1 {
   
  height: 100vh;
  padding: 35px 0 0 0;
  .content {
    height: calc(100% - 93px);
  }
}
</style>