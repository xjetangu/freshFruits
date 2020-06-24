<template>
  <div class='home'>
    <search>
      <div class="logo" slot="logo"></div>
      <div class="search" slot="search">
        <van-icon name="search" />
       <span>泰国山竹5斤69.9元包邮</span>
      </div>
    </search>
    <tabs></tabs>
    <!-- <keep-alive> -->
       <router-view></router-view>
    <!-- </keep-alive> -->
    
   
  </div>
</template>

<script>
import search from '../../components/content/searchBar/searchBar'
import tabs from '../../components/content/tabs/tabs'

export default {
  name: '',
  data(){
    return {
      index:''
    }
  },
  components: {
    search,
    tabs,
    
  },
  activated() {
    console.log('actived');
    
  },
  deactivated() {
    console.log('deactived');
    
  },
 
 
}
</script>
<style lang='less' scoped>
.search {
  margin: 0;
}
</style>
