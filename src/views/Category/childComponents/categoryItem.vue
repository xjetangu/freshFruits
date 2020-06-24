<template>
    <div class="cateListItem">
        <img :src="cateItem.url" alt="" v-lazy="cateItem.url">
        <div class="title">
            <p>{{cateItem.title}}</p>
             <p>包邮，最快次日到达</p>
             <p>
                 <span>￥{{cateItem.price}}</span>
                 <span @click="cateListClick(cateItem)">+</span>
             </p>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        cateItem:{
            type:Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        cateListClick(val) {
            this.$store.dispatch('pushShopList',val).then(res =>{
               this.$toast.show(res,2000)
                
            })
            
        }
    },
}
</script>
<style lang="less" scoped>
.cateListItem {
    display: flex;
    
   
   .title p:nth-of-type(2) {
       display: inline-block;
       padding: 5px;
       border: 1px solid #bdb5b5;
       margin: 15px 0 20px 0;
       border-radius: 10px;
       font-size: 12px;
   }
    .title p:nth-of-type(3) {
     display: flex;
     justify-content: space-between;
        span:nth-of-type(1) {
        color:hotpink;
        font-size: 18px;
     }
     span:nth-of-type(2) {
         margin-right: 10px;
         width: 20px;
         height: 20px;
         background: hotpink;
         color: #fff;
         text-align: center;
         line-height: 20px;
         border-radius: 50%;
     }
   }
    img {
        width:50%;
         height: 150px;
    }
    .title {
        margin-left: 5px;
    }
}
</style>