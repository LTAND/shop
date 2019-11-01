<template>
  <div class="product">
    <ul class="products-box">
      <li class="products-item" v-for="(item,index) in data" :key="index">
        <img class="products-image" :src="item.mainImgUrl" />
        <div class="products-item-bottom">
          <div class="name">{{item.name}}</div>
          <div class="price">￥{{item.price}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: null
    }
  }
};
</script>

<style lang='scss' scoped>
.products-box {
  margin: 0 20px 20px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .products-item {
    min-height: 300px;
    width: 49%;
    border-radius: 10px;
    margin-right: 0;
    margin-bottom: 10px;
    background-color: #f5f6f5;
    text-align: center;
    .products-image {
      margin: 10px auto 0 auto;
      width: 80%;
      height: 220px;
      border-radius: 10px;
    }
    .products-item-bottom {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
      .name {
        font-size: 28px;
      }
      .price {
        font-size: 24px;
      }
    }
  }
}
</style>