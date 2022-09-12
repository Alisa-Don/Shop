<template>
  <div class="cart">
    <div class="header">
      <div class="wrap">
        <span>购物车</span>
        <i class="iconfont">管理</i>
      </div>
    </div>
    <div class="shopLists">
      <div class="shop">
        <van-checkbox
          class="circle"
          v-model="isSlectAll"
          icon-size="15"
          @click="checkAll"
        ></van-checkbox>
        <i class="iconfont icon-dianpu-xianxing"></i>
        <div>左门生鲜旗舰店 ></div>
        <p>领券</p>
      </div>
      <van-checkbox-group v-model="foodsSelected" ref="checkboxGroup">
        <div class="lists">
          <van-checkbox
            @click="select"
            class="circle"
            icon-size="15"
            name="fooda"
          ></van-checkbox>
          <img src="@/assets/images/products/pro1.png" alt="" />
          <div class="wrap">
            <div class="title">百年陈酿酿 囯窖茅台小黑瓶 150ml</div>
            <p class="volume">30ml</p>
            <div class="wRight">
              <span
                >￥128.
                <p>0</p>
              </span>
              <div class="minus">－</div>
              <div class="number">1</div>
              <div class="add">＋</div>
            </div>
          </div>
        </div>
        <div class="lists">
          <van-checkbox
            @click="select"
            class="circle"
            icon-size="15"
            name="foodb"
          ></van-checkbox>
          <img src="@/assets/images/products/pro1.png" alt="" />
          <div class="wrap">
            <div class="title">百年陈酿酿 囯窖茅台小黑瓶 150ml</div>
            <p class="volume">30ml</p>
            <div class="wRight">
              <span
                >￥128.
                <p>0</p>
              </span>
              <div class="minus">－</div>
              <div class="number">1</div>
              <div class="add">＋</div>
            </div>
          </div>
        </div>
      </van-checkbox-group>
    </div>
    <div class="clearing">
      <van-checkbox
        class="circle"
        v-model="isSlectAll"
        icon-size="15"
        @click="checkAll"
      ></van-checkbox>
      <p>全选</p>
      <div class="total">
        <span>
          合计 :
          <span class="pri">￥128.00</span>
        </span>
        <div class="fee">不含运费</div>
      </div>
      <div class="pay">结算(0)</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodsSelected: [],
      isSlectAll: false,
    }
  },
  methods: {
    checkAll() {
      if (this.foodsSelected.length === 2) {
        this.$refs.checkboxGroup.toggleAll()
        this.isSlectAll = false
      } else {
        this.$refs.checkboxGroup.toggleAll(true)
        this.isSlectAll = true
      }
    },
    select() {
      if (this.foodsSelected.length === 2) {
        this.isSlectAll = true
      }
      if (this.foodsSelected.length === 0) {
        this.isSlectAll = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  $color: #f4f4f4;
  height: 100%;
  background-color: $color;
  .header {
    width: 750px;
    height: 128px;
    background: #5ad4ea;
    .wrap {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      span {
        font-size: 36px;
        font-weight: 500;
        color: #fff;
      }
      i {
        color: #fff;
        position: absolute;
        right: 29px;
      }
    }
  }
  .shopLists {
    width: 100%;
    .shop {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100px;
      // margin: 0 30px;
      background-color: #fff;
      border-bottom: 1px solid #f4f4f4;
      .circle {
        width: 30px;
        height: 30px;
        margin: 0 30px;
      }
      .iconfont {
        color: #666666;
        margin-right: 20px;
      }
      p {
        font-size: 24px;
        color: #5ad4ea;
        margin-left: 275px;
      }
    }
    .lists {
      display: flex;
      align-items: center;
      width: 100%;
      height: 240px;
      background-color: #fff;
      border-bottom: 1px solid $color;
      .circle {
        width: 30px;
        height: 30px;
        margin: 0 30px;
      }
      img {
        width: 160px;
        height: 160px;
        border-radius: 20px;
      }
      .wrap {
        margin-left: 21px;
        .title {
          font-size: 30px;
        }
        .volume {
          font-size: 24px;
          color: #999999;
        }
        .wRight {
          display: flex;
          span {
            display: flex;
            align-items: center;
            color: red;
            font-weight: 700;
          }
          p {
            font-size: 12px;
          }
          .minus {
            width: 85px;
            height: 55px;
            background: #92eeff;
            border-radius: 20px 0px 0px 0px;
            color: #fff;
            font-weight: 700;
            text-align: center;
            line-height: 55px;
            margin-left: 100px;
          }
          .number {
            width: 75px;
            height: 55px;
            background: #e7f1f3;
            text-align: center;
            line-height: 55px;
          }
          .add {
            width: 85px;
            height: 55px;
            background: #5ad4ea;
            border-radius: 0px 0px 20px 0px;
            color: #fff;
            font-weight: 700;
            text-align: center;
            line-height: 55px;
          }
        }
      }
    }
  }
  .clearing {
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 114px;
    width: 100%;
    height: 120px;
    background-color: #fff;
    .circle {
      margin: 0 17px 0 30px;
    }
    .total {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 150px;
      .pri {
        color: red;
      }
      .fee {
        font-size: 20px;
        color: #999999;
        margin-top: 20px;
        margin-left: 120px;
      }
    }
    .pay {
      width: 162px;
      height: 72px;
      background: #5ad4ea;
      border-radius: 36px;
      text-align: center;
      line-height: 72px;
      color: #fff;
      margin-left: 50px;
    }
  }
}
</style>
