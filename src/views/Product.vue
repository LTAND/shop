<template>
  <div class="product">
    <div class="detail-top-box">
      <div class="fixed-btns-box">
        <div class="fiexd-cart">
          <img src="../assets/icon/cart@top.png" alt="">
          <span>{{cartTotalCounts}}</span>
        </div>
      </div>
      <div class="topic-img">
        <img :src="product.mainImgUrl">
      </div>
      <div class="cart-box">
        <div class="product-counts">
          <div class="picker">
            <div @click="showPicker = false">
              <span class="counts-tips">数量</span>
              <span class="counts-data">{{999}}</span>
              <img class="counts-icon" src="../assets/icon/arrow@down.png">
            </div>
          </div>
        </div>
      </div>
      <div class="middle-border"></div>
      <div class="add-cart-btn">
        <span>加入购物车</span>
        <img class="cart-icon" src="../assets/icon/cart.png">
        <!-- <img id="small-top-img" class="small-top-img {{isFly?'animate':''}}"
          src="{{product.main_img_url}}" mode="aspectFill" style="{{translateStyle}}"> -->
      </div>
      <div class="basic-info-box"></div>
    </div>
    <div class="detail-bottom-box">

    </div>
  </div>
</template>

<script>
export default {
  name:"product",
  data(){
    return {
      id: this.$route.params.id,
      product:{},
      cartTotalCounts:1,
      showPicker: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    }
  },
  created(){
    this._getProduct(this.id)
  },
  methods:{
    _getProduct(id){
      this.$api.product.getProduct(id).then(res=>{
        this.product = res.data
        console.log(this.product)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.product{
  display: flex;
  flex-direction: column;
  background-color:#F9F9F9;
  .detail-top-box{
    background-color: #fff;
    .fixed-btns-box{
      position: fixed;
      top:50px;
      right:12px;
      width: 80px;
      .fiexd-cart{
        img{
          height: 64px;
          width: 64px;        
        }
        span{
          font-size: 24px;
          background-color: #AB956D;
          color: white;
          position: absolute;
          right: 64px;
          top: 0px;
          height: 36px;
          width: 36px;
          line-height: 36px;
          border-radius: 36px;
          text-align: center;
        }
      }
    }
    .topic-img{
      display: flex;
      justify-content: center;
      img{
        width: 100%;
      }
    }
    .cart-box{
      width: 660px;
      height: 100px;
      margin: 30px auto;
      border-radius: 100px;
      background-color: #AB956D;
      color: #fff;
      display: flex;
      align-items: center;
      .product-counts{
        width: 50%;

        height: 100%;
        display: flex;
        font-size: 24px;
        align-items: center;
        justify-content: center;
        .picker{
          margin: 0 auto;
          height: 100px;
          width: 100%;
          color: #fff;          
          &.disabled{
            color: #D5D5DB;
          }
          div{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100px;
            .counts-tips,.counts-data,.counts-icon{
              margin: 0 20px;
            }
            .counts-data{
              font-size: 28px;
            }
            .counts-icon{
              height: 48px;
              width: 48px;
            }

          }
        }
      }
      .middle-border{
        width: 2px;
        height: 30px;
        border-right: 1px red dotted;     
      }
      .add-cart-btn{
        height: 100%;
        display: flex;
        font-size: 24px;
        align-items: center;
        justify-content: center;

        position: relative;
        flex: 1;
        &:active{
          color: #fff;
        }
        &.disabled{
          color: #D5D5DB;
        }
        .cart-icon{
          margin-left: 40px;
          height: 32px;
          width: 32px;
        }        
      }
    }

  }
  .detail-bottom-box{
    background-color: #fff;
  }
}
</style>