<template>
  <div class="goodDay">
    <div class="days">
     <span>今日秒杀</span>
    </div>
    <div>
      还剩<span>{{day}}</span>天
      <span>{{hr}}</span>:
      <span>{{min}}</span>:
      <span>{{sec}}</span>
    </div>
    <div class="days">
      <span>更多<van-icon name="arrow" /></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      day: "0",
      hr: "00",
      min: "00",
      sec: "00"
    };
  },
  mounted() {
    this.cutDown();
  },
  methods: {
    cutDown() {
      //   定义结束时间戳
      const end = new Date("2020-6-28 24:00:00").getTime();
      //定义当前时间戳
      const start = new Date().getTime();

      if (start > end) {
        this.day = "0";
        this.hr = "00";
        this.min = "00";
        this.sec = "00";
        return;
      }
      //用结束的时间戳减去当前时间戳获取倒计时时间戳
      const msec = end - start;
      //   转化时间戳
      let day = parseInt(msec / 1000 / 60 / 60 / 24); //算出天数
      let hr = parseInt((msec / 1000 / 60 / 60) % 24); //算出小时数
      let min = parseInt((msec / 1000 / 60) % 60); //算出分钟数
      let sec = parseInt((msec / 1000) % 60); //算出秒数

      this.day =day;
      this.hr =hr ;
      this.min =min;
      this.sec =sec

      setTimeout(()=>{
          this.cutDown()
      },1000)
    },
    
    
  },
  
};
</script>
<style lang="less" scoped>
.goodDay {
  display: flex;
  margin-top: 15px;
  div:nth-child(3) {
      text-align: right;
      span {
          vertical-align: top;
      }
  }
  div:nth-child(2) {
    flex: 1;
    span {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: black;
      color: #fff;
      margin: 0 5px;
      text-align: center;
      line-height: 20px;
    }
  }
  .days:nth-child(1) span {
    font-weight: 700;
  }
 
  .days {
    width: 100px;
  }
}
</style>