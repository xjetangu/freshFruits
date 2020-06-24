<template>
  <div class="swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in images" :key="index" class="imgs">
        <img v-lazy="item.url" class="imgs" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: []
    };
  },
  created() {
    this.getSwiper();
  },
  methods: {
    getSwiper() {
      this.$http.get("/swiper").then(res => {
        
        this.images = res.data.swiper.swiperlist;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.swiper {
    margin-top: 5px;
    padding-top: 80px;
}
.imgs {
  height: 150px;
  img {
    width: 100%;
  }
}
</style>