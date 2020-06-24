<template>
  <div class="checkButton" @click="buttonClick">
    <img src="../../../assets/img/对勾.png" v-show="checked" />
  </div>
</template>
<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checked:this.isChecked
    }
  },


methods: {
buttonClick() {
  this.checked = !this.checked
  this.$emit('buttonClick')
}

}
  
};
</script>
<style lang="less" scoped>
.checkButton {
  width: 5%;
  height: 20px;
  border: 1px solid black;
  border-radius: 50%;
  text-align: center;
  margin-right: 5px;
  // margin-top: 50px;
  line-height: 20px;
  img {
      width: 100%;
      height: 100%;
  }
  
  
}
.checked {
     border: 1px solid green; 
  }
</style>