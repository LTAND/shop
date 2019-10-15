<template>
  <div id="app">
    <div class="nav">零食商贩</div>
    <router-view />
    <tabber></tabber>
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

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
