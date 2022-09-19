<template>
  <div class="mine">
    <div class="header">
      <img src="@/assets/images/background/blue.png" alt="" />
    </div>
    <div class="mineInformation">
      <div class="wrap">
        <div class="profilePhoto"></div>
        <span>佚名</span>
        <div class="goldVip">
          <div class="vip">v</div>
          <span class="gold">黄金会员 ></span>
        </div>
      </div>

      <div class="data">
        <div class="scan">
          <div class="scanNum">48</div>
          <div class="scanNume">浏览</div>
        </div>
        <div class="scan">
          <div class="scanNum">38</div>
          <div class="scanNume">收藏</div>
        </div>
        <div class="scan">
          <div class="scanNum">4</div>
          <div class="scanNume">优惠券</div>
        </div>
      </div>
    </div>
    <div class="mineOrder">
      <div class="mineTop">
        <h4>我的订单</h4>
        <p @click="toOrderList">查看全部 ></p>
      </div>
      <div class="mineBottom">
        <div class="function">
          <i class="iconfont icon-daifukuan"></i>
          <p class="paying">待付款</p>
        </div>
        <div class="function">
          <i class="iconfont icon-daifahuo"></i>
          <p class="paying">待发货</p>
        </div>
        <div class="function">
          <i class="iconfont icon-daishouhuo"></i>
          <p class="paying">待收货</p>
        </div>
        <div class="function">
          <i class="iconfont icon-daipingjia01"></i>
          <p class="paying">待评价</p>
        </div>
        <div class="function">
          <i class="iconfont icon-wj-shd"></i>
          <p class="paying">退款售后</p>
        </div>
      </div>
    </div>
    <div class="mineTool">
      <div class="mineTop">
        <h4>我的订单</h4>
        <p @click="toOrderList">查看全部 ></p>
      </div>
      <div class="mineBottom">
        <div class="function">
          <i class="iconfont icon-wodeqianbaoshangjia"></i>
          <p class="paying">我的钱包</p>
        </div>
        <div class="function">
          <i class="iconfont icon-tongyong-lianxikefutubiao"></i>
          <p class="paying">联系客服</p>
        </div>
        <div class="function">
          <i class="iconfont icon-jifenduihuan"></i>
          <p class="paying">积分兑换</p>
        </div>
        <div class="function">
          <i class="iconfont icon-wodeshezhi"></i>
          <p class="paying">我的设置</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toOrderList() {
      this.$router.push('/OrderList')
    },
  },
}
</script>

<style lang="scss" scoped>
.mine {
  position: relative;
  background-color: #ebf7f9;
  height: 100%;
  .header {
    width: 100%;
    img {
      width: 100%;
      height: 250px;
    }
  }
  .mineInformation {
    position: absolute;
    top: 131px;
    left: 32px;
    width: 686px;
    height: 280px;
    background: #ffffff;
    box-shadow: 0px 1px 20px 0px rgba(133, 172, 216, 0.32);
    border-radius: 20px;

    .wrap {
      display: flex;
      .profilePhoto {
        width: 96px;
        height: 96px;
        background: #64e3ff;
        border-radius: 50%;
        margin: 53px 17px 0 45px;
      }
      span {
        margin-top: 84px;
      }
      .goldVip {
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        top: 76px;
        width: 179px;
        height: 42px;
        background: linear-gradient(-17deg, #ffae13, #ffeb0b);
        border-radius: 20px 0 0 20px;
        .vip {
          width: 31px;
          height: 31px;
          background: linear-gradient(-17deg, #4e3b20, #a37b1a);
          border-radius: 100px;
          line-height: 31px;
          text-align: center;
          margin-left: 6px;
        }
        .gold {
          font-size: 24px;
          margin-top: 0;
          margin-left: 14px;
        }
      }
    }
    .data {
      display: flex;
      justify-content: space-between;
      padding: 30px 65px 0 70px;
      .scan {
        display: flex;
        flex-direction: column;
        align-items: center;
        .scanNum {
          margin-bottom: 5px;
          color: #333333;
          font-weight: bold;
          font-size: 42px;
        }
        .scanNume {
          font-size: 24px;
          color: #666666;
        }
      }
    }
  }
  .mineOrder {
    width: 686px;
    height: 280px;
    background: #ffffff;
    box-shadow: 0px 1px 20px 0px rgba(133, 172, 216, 0.32);
    border-radius: 20px;
    margin: 190px 32px 28px 32px;
    .mineTop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      border-bottom: 1px solid #e0e0e0;
      padding: 0 30px 0 31px;
      p {
        font-size: 24px;
        color: #999999;
      }
    }
    .mineBottom {
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .function {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100px;
        height: 100px;
        .iconfont {
          width: 50px;
          height: 50px;
          font-size: 45px;
          color: #64e3ff;
        }
        .paying {
          font-size: 24px;
          color: #666666;
        }
      }
    }
  }
  .mineTool {
    width: 686px;
    height: 280px;
    background: #ffffff;
    box-shadow: 0px 1px 20px 0px rgba(133, 172, 216, 0.32);
    border-radius: 20px;
    margin: 20px 32px 28px 32px;
    .mineTop {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
      border-bottom: 1px solid #e0e0e0;
      padding: 0 30px 0 31px;
      p {
        font-size: 24px;
        color: #999999;
      }
    }
    .mineBottom {
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .function {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100px;
        height: 100px;
        .iconfont {
          width: 50px;
          height: 50px;
          font-size: 45px;
          color: #53ffed;
        }
        .paying {
          font-size: 24px;
          color: #666666;
        }
      }
    }
  }
}
</style>
