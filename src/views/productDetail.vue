<template>
  <div class="productDetail">
    <div class="banner">
      <div class="navTop">
        <i class="iconfont icon-fanhui" @click="back"></i>
        <div class="nav">
          <div
            class="product"
            :class="{ active: current === 'product' }"
            @click="current = 'product'"
          >
            商品
          </div>
          <div
            class="comment"
            :class="{ active: current === 'comment' }"
            @click="current = 'comment'"
          >
            评价
          </div>
          <div
            class="detail"
            :class="{ active: current === 'detail' }"
            @click="current = 'detail'"
          >
            详情
          </div>
        </div>
        <i class="iconfont icon-gouwuche1"></i>
      </div>
    </div>
    <div class="productDisplay">
      <img src="@/assets/images/products/vagetable.png" alt="" />
    </div>
    <div class="productinfo">
      <h4>鲜果优精选水果盒子 500g</h4>
      <div class="pro-price">
        <span class="proNow">￥589. <span class="zero">0</span> </span>
        <span class="proBefore">￥888.0</span>
      </div>
      <div class="pro-comment">
        <div class="freeShipping">包邮</div>
        <div class="payed"><span class="payedNum">4238</span> 已购</div>
        <div class="goodComment"><span class="goodRate">97%</span>好评</div>
      </div>
    </div>
    <div class="choosed">
      <span class="status">已选</span>
      <span class="orderList">葡萄+火龙果+杨桃+枇杷</span>
    </div>
    <div class="other">
      <div class="service">
        <i class="iconfont icon-tongyong-lianxikefutubiao"></i>
        <p>客服</p>
      </div>
      <div class="service">
        <i class="iconfont icon-fenxiang"></i>
        <p>分享</p>
      </div>
      <div class="service">
        <i class="iconfont icon-shoucang"></i>
        <p>收藏</p>
      </div>
      <div class="bottom">
        <div class="b-left" @click="toSubmitOrder">加入购物车</div>
        <div class="b-right" @click="toSubmitOrder">购买</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 'product',
    }
  },
  methods: {
    back() {
      this.$router.back('/category')
    },
    toSubmitOrder() {
      this.$router.push('/submitOrder')
    },
  },
}
</script>

<style lang="scss" scoped>
.productDetail {
  position: relative;
  background-color: #eeeef1;
  height: 100%;
  .banner {
    width: 750px;
    height: 508px;
    background-image: url('@/assets/images/banner/banner.png');
    background-size: 100% 100%;
    border-radius: 0 0 50% 50%;
    box-shadow: 0px 6px 17px 0px rgba(96, 197, 255, 0.67);
    .navTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 50px;
      padding: 70px 30px 0 30px;
      .iconfont {
        color: #fff;
        font-size: 45px;
      }
      .nav {
        width: 325px;
        display: flex;
        justify-content: space-between;
        color: #fff;
        font-size: 36px;
        .active {
          font-weight: 600;
        }
      }
    }
  }
  .productDisplay {
    position: absolute;
    top: 131px;
    left: 135px;
    width: 480px;
    height: 480px;
    background: #ffffff;
    box-shadow: 0px 8px 49px 0px rgba(18, 46, 116, 0.13);
    border-radius: 10px;
    img {
      width: 480px;
      height: 480px;
      box-shadow: 0px 16px 18px 0px rgba(47, 47, 47, 0.26);
    }
  }
  .productinfo {
    width: 690px;
    height: 264px;
    background: #ffffff;
    box-shadow: 0px 0px 35px 0px rgba(18, 46, 116, 0.1);
    border-radius: 10px;
    padding: 51px 24px 42px 24px;
    margin: 152px 35px 35px 25px;
    h4 {
      margin: 0;
    }
    .pro-price {
      margin-top: 33px;
      .proNow {
        width: 139px;
        height: 33px;
        font-size: 42px;
        font-family: SourceHanSansCN;
        font-weight: bold;
        color: #ff1c1c;
        .zero {
          font-size: 32px;
        }
      }
      .proBefore {
        width: 85px;
        height: 18px;
        font-size: 24px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        text-decoration: line-through;
        color: #c9c9c9;
        margin-left: 10px;
      }
    }
  }
  .pro-comment {
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
    width: 450px;
    .freeShipping {
      font-size: 25px;
      font-weight: 500;
      color: #7c7c7c;
    }
    .payed {
      font-size: 25px;
      font-weight: 500;
      color: #7c7c7c;
      .payedNum {
        font-size: 25px;
        font-weight: bold;
        color: #202020;
      }
    }
    .goodComment {
      font-size: 25px;
      font-weight: 500;
      color: #7c7c7c;
      .goodRate {
        font-size: 25px;
        font-weight: bold;
        color: #202020;
      }
    }
  }
  .choosed {
    width: 690px;
    height: 82px;
    background: #ffffff;
    box-shadow: 0px 0px 35px 0px rgba(18, 46, 116, 0.1);
    border-radius: 10px;
    margin: 35px 35px 35px 25px;
    padding: 29px 0 27px 24px;
    .status {
      margin-right: 60px;
      font-size: 28px;
      font-weight: 400;
      color: #7c7c7c;
    }
    .orderList {
      font-size: 28px;
      font-weight: 700;
      color: #313131;
    }
  }
  .other {
    display: flex;
    justify-content: space-between;
    width: 692px;
    height: 154px;
    background: #ffffff;
    box-shadow: 0px 0px 35px 0px rgba(18, 46, 116, 0.1);
    border-radius: 10px;
    margin: 35px 35px 35px 25px;
    padding: 31px 55px 45px 65px;
    .service {
      .iconfont {
        font-size: 45px;
        color: #5bd3e9;
      }
      p {
        font-size: 22px;
        color: #2b2b2b;
        margin: 0;
      }
    }
  }
  .bottom {
    display: flex;
    position: fixed;
    bottom: 20px;
    .b-left {
      width: 301px;
      height: 92px;
      color: #fff;
      text-align: center;
      line-height: 92px;
      background-color: #5bd3e9;
      border-radius: 50px 0 0 50px;
    }
    .b-right {
      width: 301px;
      height: 92px;
      color: #fff;
      text-align: center;
      line-height: 92px;
      background-color: #f14242;
      border-radius: 0 50px 50px 0;
    }
  }
}
</style>
