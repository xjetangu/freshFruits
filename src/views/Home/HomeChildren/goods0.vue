<template>
    <div class="goods0">
     <swiper></swiper>
     <goods0Item></goods0Item>
     <GoodsFeture></GoodsFeture>
     <goodsDay></goodsDay>
     <goodsTime></goodsTime>
     <GoodList></GoodList>
    </div>
</template>
<script>
import swiper from '../../../components/common/swiper/swiper'
import goods0Item from './goods0Item'
import GoodsFeture from './goodsFeture'
import goodsDay from './goosDay'
import goodsTime from './goosTime'
import GoodList from '../../../components/content/GoodsList/GoodsList'
export default {
    components:{
        swiper,
        goods0Item,
        GoodsFeture,
        goodsDay,
        goodsTime,
        GoodList
    }
}
</script>
<style lang="less" scoped>
    
</style>