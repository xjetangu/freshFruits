<template>
    <div class="cateList">
        <cateGoryItem v-for="(item,index) in list" :key="index" :cateItem='item'></cateGoryItem>
    </div>
</template>
<script>
import cateGoryItem from '../childComponents/categoryItem'
export default {
    props:{
        list:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components:{
        cateGoryItem
    }
}
</script>
<style lang="less" scoped>
.cateList {
    margin-left: 5px;
    padding-top:43px;
}

</style>