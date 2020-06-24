<template>
    <div class="goods1ListItem">
       <div class="imgs">
           <img :src="goodsListItem.url" alt="">
       </div>
       <p class="title">{{goodsListItem.title}}</p>
       <p class="email">包邮，最快次日达</p>
       <div class="goods1Price">
           <span>￥{{goodsListItem.price}}</span>
           <span @click="goodsItem(goodsListItem)">+</span>
       </div>
    </div>
</template>
<script>
export default {
    props:{
        goodsListItem:{
            type:Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        goodsItem(val) {
            this.$store.dispatch('pushShopList',val).then(res =>{
                this.$toast.show(res,2000)
                
            })
            
        }
    },
}
</script>
<style lang="less" scoped>
.goods1ListItem {
    
    width: 50%;
    height: 350px;
  
  
    .email {
        margin: 10px 0;
        display: inline-block;
        padding: 5px;
        border: 1px solid #c5bfbf;
        border-radius: 10px;
       
    }
    .title {
        color: #afa8ac;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .imgs {
       width: 100%;
        img {
            width: 100%;
        }
    }
    .goods1Price{
        display: flex;
        justify-content: space-between;
        :nth-child(2) {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: hotpink;
            margin-right: 5px;
            border-radius: 50%;
            color: #fff;
            line-height: 20px;
            text-align: center;
            font-size: 20px;
        }
    }
}
</style>