<template>
  <div class="goods0">
    <scroll class="content" :probeType='3' :listenScroll='true' @scroll='scroll'  ref="scroll">
       <swiper></swiper>
      <goods0Item></goods0Item>
      <!-- <GoodsFeture></GoodsFeture> -->
      <goodsDay></goodsDay>
      <goodsTime></goodsTime>
      <GoodList></GoodList>  
    </scroll>
     <backTop v-show=" isbackTop" @click.native="scrollTo"></backTop>
     <toast></toast>
  </div>
</template>
<script>
import swiper from "../../../components/common/swiper/swiper";
import goods0Item from "./goods0Item";
import goodsDay from "./goosDay";
import goodsTime from "./goosTime";
import GoodList from "../../../components/content/GoodsList/GoodsList";
import backTop from '../../../components/content/backTop/backTop'

import scroll from "../../../components/common/scroll/scroll";
import toast from '../../../components/common/toast/toast'
export default {
  data() {
    return {
      isbackTop:false,
      
    }
  },
  components: {
    swiper,
    goods0Item,
    // GoodsFeture,
    goodsDay,
    goodsTime,
    GoodList,
    scroll,
    backTop,
    toast
  },
  
  methods: {
    scroll(pos){
      this.isbackTop = (-pos.y) >1000
    },
    scrollTo() {
      this.$refs.scroll.scrollTo(0,0,1000)
    }
    
  },

};
</script>
<style lang="less" scoped>
.goods0 {
  height: 100vh;
}
.content {
  height: calc(100% - 90px);
}

</style>