<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "scroll",
  data() {
    return {
      scroll: null
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    listenScroll: {
      type: Boolean,
      default: false
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: true
      });
       this.scroll.on('scroll', (pos) => {
            this.$emit('scroll', pos)
          })
    });
    
   
  },
  methods: {
   scrollTo(x,y,time=1000) {
     this.scroll.scrollTo(x,y,time)
   }
  }
};
</script>
<style lang="less" scoped>
</style>