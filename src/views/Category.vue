<template>
  <div class="category-wrapper">
    <van-sidebar class="left-box" v-model="activeKey" @change="onChangeSidebar">
      <van-sidebar-item v-for="item in categoryArr" :key="item.id" :title="item.name" />
    </van-sidebar>
    <div class="right-box">
      <div class="category-detail-box" v-show="activeKey == good.activeKey" v-for="good in goods" :key="good.id">
        <div class="category-header">
          <img :src="good.headerImg" alt />
        </div>
        <div class="category-title">
          <span class="text"></span>
        </div>
        <div class="category-main">
          <ul class="category-goods-items">
            <li class="middle" v-for="item in good.data" :key="item.id">
              <img :src="item.mainImgUrl"/>
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      categoryArr: [],
      goods:[]
    };
  },
  created() {
    this._getCategoryType();
    this._getProductsByCategory(this.activeKey+2); // 第一次加载请求商品id2 
  },
  computed: {
  },
  methods: {
    onChangeSidebar(index) {
      this._getProductsByCategory(index+2)
      console.log("activeKey", index);
    },
    _getCategoryType() {
      this.$api.category.getCategoryType().then(res => {
        this.categoryArr = res.data;
      });
    },
    _findGood(list,goal){
      return list.find(v=>{
        return v.id == goal
      })
    },
    _getProductsByCategory(id) {
      this.$api.category.getProductsByCategory(id).then(res => {
        if(this._findGood(this.goods,id)){
          return
        }
        this.goods.push({
          id,
          headerImg:this.categoryArr[this.activeKey].img.url,
          activeKey:this.activeKey,
          data:res.data
        })
      });
    }
  }
};
</script>

<style lang='scss' scoped>
.category-wrapper {
  display: flex;
  .category-detail-box {
    overflow: hidden;
    padding: 20px;
    .category-header {
      height: 200px;
      text-align: center;
      img {
        width: 520px;
        border-radius: 5px;
        max-height: 100%;
      }
    }
    .category-title {
      margin: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      .text {
        font-size: 24px;
        color: #ab956d;
        &::before,
        &::after {
          content: "";
          display: inline-block;
          position: relative;
          top: -6px;
          width: 70px;
          height: 2px;
          margin: 0 20px;
          background-color: #979797;
        }
      }
    }
    .category-main {
      .category-goods-items {
        margin-bottom: 20px;
        width: 30%;
        .middle {
          margin: 0 20px;
          img {
            width: 120px;
            height: 120px;
            border-radius: 120px;
          }
          p {
            color: #444452;
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>