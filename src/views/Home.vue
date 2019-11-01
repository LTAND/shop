<template>
  <div class="home">
    <banner :images="images"></banner>
    <theme :data="themeImg"></theme>
    <div class="home-main-header">最近新品</div>
    <product-tpl :data="productorArr"></product-tpl>
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Theme from "@/components/Theme";
import ProductTpl from "@/components/Product-tpl";

export default {
  data() {
    return {
      images: [],
      themeImg: [],
      productorArr: []
    };
  },
  components: {
    Banner,
    Theme,
    ProductTpl
  },
  created() {
    this._getProductorData();
    this._getBannerData();
    this._getThemeData();
  },
  methods: {
    _getProductorData() {
      let obj = {
        count: 15
      };
      this.$api.home.getProductorData(obj).then(res => {
        this.productorArr = res.data;
        console.log(this.productorArr);
      });
    },
    _getThemeData() {
      this.$api.home.getThemeData().then(res => {
        this.themeImg = res.data;
      });
    },
    _getBannerData() {
      this.$api.home.getBannerData().then(res => {
        this.images = res.data.items;
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.home {
  padding-bottom: 150px;
  .home-main-header {
    display: flex;
    height: 60px;
    color: #ab956d;
    background-color: #fff;
    font-size: 32px;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
}
</style>