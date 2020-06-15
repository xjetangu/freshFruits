<template>
  <div class='tabbarItem'  @click="tabbarClick">
    
       <div class="img1" v-if="isActive"><slot name="img1"></slot></div>
         <div class="img" v-else><slot name="img"></slot></div>
      <div class="text" :style="isColor"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {}
  },
  props:{
    path:{
      type:String
    },
    color:{
      type:String,
      default:'hotpink'
    }
  },
  components: {},
  created(){},
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
  isColor() {
    return this.isActive? {color:this.color} :{}
  }
  },
  methods: {
    tabbarClick() {
      this.$router.push(this.path)
    }
  }
}
</script>
<style lang='less' scoped>
.tabbarItem {
    color: #333;
    .img,.img1 {
      display:inline-block;
    }
    
}

</style>
