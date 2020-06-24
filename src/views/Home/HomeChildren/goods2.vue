<template>
    <div class="goods2">
        <scroll class="content" :probeType='3' :listenScroll='true' @scroll='scroll'  ref="scroll">
             <goods1list :goods1List='goos2LIst'></goods1list>
        </scroll>
    <backTop @click.native="scrollTo" v-show="isbackTop"></backTop>
      
    </div>
</template>
<script>
import goods1list from '../../../components/content/Good1/good1List'
import scroll from '../../../components/common/scroll/scroll'
import backTop from '../../../components/content/backTop/backTop'

import {backTopMixin} from '../../../assets/js/mixin/mixin'
export default {
   data() {
       return {
           goos2LIst:[]
       }
   },
   mixins:[backTopMixin],
   components:{
       goods1list,
       scroll
   },
   created() {
       this.goods2List()
   },
   methods: {
      async goods2List() {
          const res =await this.$http.get('/goods2');
          this.goos2LIst = res.data.goods2.goods2Item
          
       }
       
   },
}
</script>
<style lang="less" scoped>
  .goods2 {
      margin-top: 80px;
      height: 100vh;
      .content {
          height: calc(100% - 98px);
      }
  }
</style>