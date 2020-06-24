<template>
    <div class="googsTime">
        <ul>
            <li v-for="(item,index) in goodsTiemList" :key="index">
                <img :src="item.url" alt="">
                <p>已抢{{item.number}}件</p>
                <h4>{{item.price|getPrice}}</h4>
                <div class="oldPrice">
                    <span>{{item.oldPrice|getPrice}}</span>
                    <div @click="oldPriceClick">抢</div>
                </div>
            </li>
            
        </ul>
       
      
    </div>
</template>
<script>
export default {
    data() {
        return {
            goodsTiemList:[]
        }
    },
    created(){
        this.getGoodsTime()
    },
    filters:{
        getPrice(price) {
            return '￥'+price
        }
    },
    methods:{
        getGoodsTime() {
            this.$http.get('/goodTime').then(res=>{
               this.goodsTiemList = res.data.goosTime
              
            })
        },
        oldPriceClick() {
           
            
        }
    }
}
</script>
<style lang="less" scoped>
.googsTime {
    margin-top: 10px;
    ul {
        display: flex;
        li {
            padding: 0 10px;
            width: 220px;
            img {
                width: 100%;
                height: 100px;
            }
            p {
                color:gray;
            }
            h4 {
                font-size: 28px;
                color:hotpink;
                padding: 5px 0;
                font-weight: 400;
            }
            .oldPrice {
                display: flex;
                justify-content: space-between;
                span {
                    font-size: 18px;
                    text-decoration: line-through;
                    line-height: 40px;
                    color: gray;
                }
                div {
                    width: 40px;
                    height: 40px;
                    background: hotpink;
                    border-radius: 50%;
                    text-align: center;
                    line-height: 40px;
                    font-size: 20px;
                    color: #fff;
                }
            }
        }
    }
}
</style>