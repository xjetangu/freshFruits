<template>
  <div class="tabs">
    <van-tabs  animated v-model="active">
      <van-tab v-for="(item,index) in tabs" :to="'/home/goods'+index" :key="index" :title="item.title"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      tabs: [],
      active:0
    };
  },
  props: {},
  components: {},
  created() {
    this.getTabs();
  },
  mounted() {
    
  },
  methods: {
    getTabs() {
      this.$http.get("/tabs").then(res => {
        this.tabs = res.data.tabs.tablist;
      });
    }
  
  }
};
</script>
<style lang='less'>
.tabs {
  
  position: fixed;
  top: 40px;
  z-index: 99;
  width: 100%;
}
</style>
