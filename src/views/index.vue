<template>
  <div class="index">
    <div class="banner">
      <img src="@/assets/images/banner/banner.png" alt="" />
      <div class="nav">
        <span><i class="iconfont icon-sousuo"></i></span>
        <input type="text" placeholder="搜索想送上门的商品，食品" />
      </div>
      <div class="location">
        <i class="iconfont icon-ditu_dingwei_o"></i>
        <span> 天河区 </span>
      </div>
    </div>
    <div class="catalog">
      <div class="ProList">
        <span>水果</span>
        <i class="iconfont icon-shuiguo"></i>
      </div>
      <div class="ProList">
        <span>水果</span>
        <i class="iconfont icon-shuiguo"></i>
      </div>
      <div class="ProList">
        <span>水果</span>
        <i class="iconfont icon-shuiguo"></i>
      </div>
      <div class="ProList">
        <span>水果</span>
        <i class="iconfont icon-shuiguo"></i>
      </div>
      <div class="ProList" style="margin-right: 0">
        <span>水果</span>
        <i class="iconfont icon-shuiguo"></i>
      </div>
      <div class="ProList">
        <span>水果</span>
        <i class="iconfont icon-shuiguo"></i>
      </div>
      <div class="ProList">
        <span>水果</span>
        <i class="iconfont icon-shuiguo"></i>
      </div>
      <div class="ProList">
        <span>水果</span>
        <i class="iconfont icon-shuiguo"></i>
      </div>
      <div class="ProList">
        <span>水果</span>
        <i class="iconfont icon-shuiguo"></i>
      </div>
      <div class="ProList" style="margin-right: 0">
        <span>水果</span>
        <i class="iconfont icon-shuiguo"></i>
      </div>
    </div>
    <div class="ad">
      <img src="@/assets/images/ad/ad.png" alt="" />
    </div>
    <div class="discount">
      <div class="top">
        <h3>限时折扣</h3>
        <span>01:22:33</span>
      </div>
      <div class="bottom">
        <div class="recommend">
          <img src="@/assets/images/products/pro1.png" alt="" />
          <span class="now">￥332.00</span>
          <span class="before">￥400.00</span>
        </div>
        <div class="recommend">
          <img src="@/assets/images/products/pro2.png" alt="" />
          <span class="now">￥332.00</span>
          <span class="before">￥400.00</span>
        </div>
        <div class="recommend">
          <img src="@/assets/images/products/pro2.png" alt="" />
          <span class="now">￥332.00</span>
          <span class="before">￥400.00</span>
        </div>
        <div class="recommend">
          <img src="@/assets/images/products/pro1.png" alt="" />
          <span class="now">￥332.00</span>
          <span class="before">￥400.00</span>
        </div>
        <div class="recommend">
          <img src="@/assets/images/products/pro1.png" alt="" />
          <span class="now">￥332.00</span>
          <span class="before">￥400.00</span>
        </div>
      </div>
    </div>
    <div class="activities">
      <div class="groupBuying">
        <h3>拼团购</h3>
        <img src="@/assets/images/products/shrimp.png" alt="" />
      </div>
      <div class="groupBuying">
        <h3>抢秒杀</h3>
        <img src="@/assets/images/products/shrimp.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.index {
  $color: #46e1ff;
  padding-bottom: 137px;
  .banner {
    // display: flex;
    position: relative;
    width: 750px;
    height: 487px;
    img {
      width: 100%;
      height: 100%;
    }
    .nav {
      display: flex;
      align-items: center;
      position: absolute;
      left: 31px;
      top: 61px;
      background-color: #daf8ff;
      width: 546px;
      height: 56px;
      border-radius: 50px;

      i {
        color: $color;
        margin-left: 20px;
      }
      input {
        border: none;
        outline: none;
        margin-left: 10px;
        color: $color;
        background-color: #daf8ff;
      }
    }
    .location {
      position: absolute;
      top: 74px;
      right: 29px;
      i {
        color: #e1faff;
      }
      span {
        color: #fff;
        font-weight: 700;
      }
    }
  }
  .catalog {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    position: absolute;
    top: 321px;
    left: 32px;
    width: 686px;
    height: 354px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 7px 30px 0px rgba(87, 87, 87, 0.26);
    padding: 42px 24px 49px 21px;
    .ProList {
      position: relative;
      width: 97px;
      height: 97px;
      background-color: $color;
      border-radius: 100px;
      margin-right: 30px;
      span {
        position: absolute;
        top: 10px;
        left: 25px;
        font-size: 12px;
        text-align: center;
        color: #fff;
      }

      i {
        position: absolute;
        bottom: 0;
        left: 25px;
        font-size: 40px;
        color: #fff;
      }
    }
  }
  .ad {
    width: 715px;
    height: 201px;
    img {
      width: 100%;
      height: 100%;
      margin: 166px 21px 0 15px;
    }
  }
  .discount {
    margin: 130px 0 0 34px;
    .top {
      h3 {
        display: inline-block;
        margin-right: 20px;
      }
    }
    .bottom {
      display: flex;
      width: 715px;
      // 滚动条 (可以单独设置横纵轴)overflow-x: auto; overflow-y: auto;
      overflow: auto;
      .recommend {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-right: 46px;
        img {
          width: 160px;
          height: 160px;
          border-radius: 20px;
        }
        .now {
          margin-top: 5px;
          font-size: 30px;
          font-weight: bold;
          color: #ff3d3d;
        }
        .before {
          font-size: 20px;
          color: #b3b3b3;
          text-decoration: line-through;
        }
      }
    }
  }
  .activities {
    display: flex;
    .groupBuying {
      display: flex;
      width: 332px;
      height: 137px;
      box-shadow: 0px 6px 15px 0px rgba(151, 149, 143, 0.3);
      border-radius: 5px;
      margin: 32px 21px 32px 32px;
      &:last-child {
        margin-left: 0;
      }
      h3 {
        margin: 26px 0 0 12px;
        display: inline-block;
      }
      img {
        width: 142px;
        height: 130px;
        margin-left: 20px;
      }
    }
  }
}
</style>
