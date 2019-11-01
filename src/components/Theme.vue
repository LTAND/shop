<template>
  <div class="theme">
    <div class="theme-title">精选主题</div>
    <div class="theme-box">
      <div class="theme-item" v-for="(item, index) in data" :key="index">
        <img :src="index<2?item.topicImg.url:item.headImg.url" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  created() {},
  mounted() {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.theme {
  .theme-title {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    color: #ab956d;
    background-color: #fff;
    font-size: 32px;
    margin: 20px 0;
  }
  .theme-box {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    .theme-item {
      display: flex;
      width: 50%;
      height: 375px;
      box-sizing: border-box; 
      border-bottom: 4px solid #fff;
      position: relative;
      &:first-child{
        border-right:4px solid #fff;
      }
      &:last-child{
        width: 100%;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>