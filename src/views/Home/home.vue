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
   <router-view></router-view>
  </div>
</template>

<script>
import search from '../../components/content/searchBar/searchBar'
import tabs from '../../components/content/tabs/tabs'

export default {
  name: '',
  data(){
    return {}
  },
  components: {
    search,
    tabs,
    
  }
 
}
</script>
<style lang='less' scoped>

</style>
