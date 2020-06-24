<template>
    <div class="poster">
        <ul>
            <li>
                <img src="../../../assets/img/fruits1.jpg" alt="">
            </li>
            <li>
                <img src="../../../assets/img/fruits2.jpg" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.poster {
    padding: 0 3px;
    ul {
        display: flex;

        li {
            width: 50%;
            height: 100px;
            overflow: hidden;
            img {
                width: 100%;
               height: 100%;
               border-radius: 10px;
            }
            
        }
        li:nth-child(2) img {
            margin-left: 5px;
        }
    }
}
</style>