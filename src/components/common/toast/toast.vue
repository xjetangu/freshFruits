<template>
    <div class="toast" v-show="isShow">
        <div>{{message}}</div>
    </div>
</template>
<script>
export default {
   data() {
       return {
           message:'',
           isShow:false
       }
   },
    methods: {
        show(message,duration) {
            this.isShow  = true,
            this.message = message,
            setTimeout(() =>{
                this.isShow = false,
                this.message = ''
            },duration)
        }
    },
}
</script>
<style lang="less" scoped>
.toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(0, 0, 0, .6);
    color: #fff;
    padding: 8px 10px;
    border-radius: 5px;
}
</style>