<template>
  <div id="app">
   <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from './components/common/Tabbar/tabbar'

export default {
  data() {
    return {
      
    };
  },
  created() {},
  components: {
    tabbar
  },
  methods: {
  
  }
};
</script>
<style lang="less">
@import './assets/css/normalize.css';

 .item {
    flex: 1;
    text-align: center;
  }
</style>
