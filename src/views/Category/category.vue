<template>
  <div class="category">
    <searchBar class="searchBar">
      <div class="search" slot="search">
        <van-icon name="search" />
        <span>鲜鸡蛋30枚29.9元包邮</span>
      </div>
    </searchBar>
    <div class="sideBar">
      <sideBar :sideBar="sideBar" @sidebaritem="sidebaritem"></sideBar>
      <scroll class="content" :probeType="3" :listenScroll="true" ref="scroll">
        <cateList :list="list"></cateList>
      </scroll>
    </div>
  </div>
</template>

<script>
import searchBar from "../../components/content/searchBar/searchBar";
import sideBar from "../../components/content/sideBar/sideBar";

import cateList from "./childComponents/categoryList";
import scroll from "../../components/common/scroll/scroll";

export default {
  name: "",
  data() {
    return {
      sideBar: [],
      list: []
    };
  },
  components: {
    searchBar,
    sideBar,
    cateList,
    scroll
  },
  created() {
    this.getSideBar();
    this.sidebaritem("jiuyin");
  },
  mounted() {},
  methods: {
    async getSideBar() {
      const res = await this.$http.get("/sideBar");
      this.sideBar = res.data.sideBar;
    },
    // 监听子组件sidebar发出的事件
    async sidebaritem(name) {
      const res = await this.$http.get("/" + name);
      this.list = res.data.list;
    }
  }
};
</script>
<style lang='less' scoped>
.category {
  height: 100vh;
}
.search {
  margin: 0;
}
.sideBar {
  display: flex;
  height: 100vh;
}
.content {
  height: calc(100% - 80px);
}
</style>
