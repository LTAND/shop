<template>
  <div class="banner">
    <van-swipe class="custom-indicator" :autoplay="3000" indicator-color="black">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item.img.url" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: null
    }
  },
  data() {
    return {};
  },
  created() {
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
.banner {
  width: 100%;

  .custom-indicator {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>