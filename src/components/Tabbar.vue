<template>
  <van-tabbar route v-model="active" active-color="#AB956D" inactive-color="#999" @change="onTab">
    <van-tabbar-item replace :to="item.to" class="tabbar-item" v-for="(item, index) in tabbarItems" :key="index">
      <span>{{item.title}}</span>
      <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabbarItems: [
        {
          title: "主页",
          to:"/home",
          normal: require("../assets/toolbar/home.png"),
          active: require("../assets/toolbar/home@selected.png")
        },
        {
          title: "分类",
          to:"/category",
          normal: require("../assets/toolbar/category.png"),
          active: require("../assets/toolbar/category@selected.png")
        },
        {
          title: "购物车",
          to:"/cart",
          normal: require("../assets/toolbar/cart.png"),
          active: require("../assets/toolbar/cart@selected.png")
        },
        {
          title: "我的",
          to:"/my",
          normal: require("../assets/toolbar/my.png"),
          active: require("../assets/toolbar/my@selected.png")
        }
      ]
    };
  },
  methods:{
    onTab(activeIndex){
      console.log('activeIndex :', activeIndex);
    }
  }
};
</script>

<style>
</style>