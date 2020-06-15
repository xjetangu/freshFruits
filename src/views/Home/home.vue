<template>
  <div class='home'>
    <search>
      <div class="logo" slot="logo"></div>
      <div class="search" slot="search">
        <van-icon name="search" />
       <span>泰国山竹5斤69.9元包邮</span>
      </div>
    </search>
  </div>
</template>

<script>
import search from '../../components/content/searchBar/searchBar'
export default {
  name: '',
  data(){
    return {}
  },
  components: {
    search
  }
 
}
</script>
<style lang='less' scoped>

</style>
