<template>
  <div id="app">
    <div class="container">
      <div class="header">零食商贩</div>
      <div>
        <router-view />
      </div>
      <tabber class="tabber"></tabber>
    </div>
  </div>
</template>

<script>
import Tabber from "@/components/Tabbar.vue";
export default {
  components: {
    Tabber
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  background-color: #fff;
  .header {
    text-align: center;
  }
  .tabber {
    position: flex;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style> 
