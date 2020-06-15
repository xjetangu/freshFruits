<template>
  <div class='searchBar'>
      <slot name="logo"></slot>
     <slot name="search"></slot>
  </div>
</template> 

<script>
export default {
  name: '',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style lang='less' scoped>
.searchBar {
    display:flex;
    width: 100%;
    height: 40px;
   
   
    
}
.logo {
    flex: 1;
    background:url('../../../assets/img/timg.jpg') no-repeat center center;
    background-size:cover;
}
.search {
    flex: 2;   
    background:#cfc9c9;
    text-align: center;
    line-height: 40px;
     margin-left: 3px;
     border-radius: 5px;
    :nth-child(1) {
        margin-top:10px;
    }
    span {
          vertical-align: top;
          margin-left: 10px;
          color:gray;

    }
  
    
   
}
</style>
