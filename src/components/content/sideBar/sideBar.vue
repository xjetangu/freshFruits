<template>
  <div class="sideBar">
    <van-sidebar v-model="activeKey">
     
      <van-sidebar-item :title="item.title" v-for="(item,index) in sideBar" :key="index" @click="sidebaritem(index,item.name)"></van-sidebar-item>
    </van-sidebar>
  </div>
</template>
<script>

export default {
  data() {
    return {
      activeKey: ''
    };
  },
  props: {
    sideBar: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    sidebaritem(index,name) {
        this.$emit('sidebaritem',name);
      },
    
   
  }
};
</script>
<style lang="less" scoped>

.sideBar {
  margin-top: 40px;
  

}
</style>