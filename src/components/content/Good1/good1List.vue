<template>
    <div class='goods1list'>
       
        <goods1ListItem v-for="(item,index) in goods1List" :key="index" :goodsListItem='item'></goods1ListItem>
        
    </div>
</template>
<script>
import goods1ListItem from './goods1ListItem'

export default {
    props:{
        goods1List:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components:{
        goods1ListItem,
        
    }
}
</script>
<style lang="less" scoped>
.goods1list {
    display: flex;
    flex-wrap: wrap;
}

</style>