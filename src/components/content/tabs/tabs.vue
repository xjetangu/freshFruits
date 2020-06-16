<template>
  <div class="tabs">
    <van-tabs @click='tabsClick'>
      <van-tab v-for="(item,index) in tabs" :to="path" :key="index" :title="item.title"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tabs: [],
       path:''
    };
  },
  props: {},
  components: {},
  created() {
    this.getTabs();
  },
  mounted() {},
  methods: {
    getTabs() {
      this.$http.get("/tabs").then(res => {
        this.tabs = res.data.tabs.tablist;
      });
    },
    tabsClick(name,title) {
        
        this.path = '/goods'+name
      
        
    }
  }
};
</script>
<style lang='less' scoped>
</style>
