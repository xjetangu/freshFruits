<template>
    <div class="goodFeture">
        <ul>
            <li v-for="(item,index) in fetureList" :key="index">
                <h4>{{item.title}}</h4>
                <p>{{item.names}}</p>
                <div class="FetureImage">
                    <img :src="item.url" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fetureList:[{
                title:'夏日畅汇饮',
                names:'几箱都包邮',
                url:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3397196524,2831185594&fm=15&gp=0.jpg"
            },
            {
                title:'水果7折',
                names:'618大狂欢',
                url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1166744644,1183732893&fm=26&gp=0.jpg"
            },
            {
                title:'万宁中国',
                names:'个护五折起',
                url:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3994578286,910684274&fm=26&gp=0.jpg"
            }]
        }
    }
}
</script>
<style lang="less" scoped>
.goodFeture {
    width: 100%;
    margin-top: 5px;
    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
   li:nth-child(2) {
       margin: 0 5px;
   }
        li {
            position: relative;
            flex: 1;
            color: rgb(228, 178, 70);
            background: pink;
           border-radius: 10px;
            h4,p {
                font-size: 20px;
                margin: 0;
                padding-left:5px;
                color:black;
                margin-top: 5px;
            }
            p {
                color:gray;
                 font-size: 14px;
            }
            .FetureImage {
                width: 30px;
                height: 30px;           
           
                img {
                       position: absolute;
                    width: 30px;
                    border-radius: 100%;
                        right: 5px;
                }
            }
        }
    }
}

</style>