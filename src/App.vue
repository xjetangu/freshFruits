<template>
  <div id="app">
    <tabbar></tabbar>

    <router-view></router-view>
  </div>
</template>
<script>
import tabbar from "./components/common/Tabbar/tabbar";

export default {
  data() {
    return {};
  },
  created() {},
  components: {
    tabbar
  },
  methods: {}
};
</script>
<style lang="less">
@import "./assets/css/normalize.css";
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
body {
  background: rgba(250, 219, 219, 0.3);
}

.item {
  flex: 1;
  text-align: center;
}
</style>
