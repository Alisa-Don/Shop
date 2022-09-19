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
        <div class="lists" v-for="item in cartData" :key="item.name">
          <van-checkbox
            @click="select"
            class="circle"
            icon-size="15"
            name="fooda"
          ></van-checkbox>
          <img :src="item.image" alt="" />
          <div class="wrap">
            <div class="title">{{ item.name }}</div>
            <p class="volume">30ml</p>
            <div class="wRight">
              <span
                >￥{{ item.price }}
                <p>.0</p>
              </span>
              <div class="minus" @click="minusNum(item)">－</div>
              <div class="number">{{ item.number }}</div>
              <div class="add" @click="addNum(item)">＋</div>
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
          <span class="pri">￥{{ allFoodsPrice }}</span>
        </span>
        <div class="fee">不含运费</div>
      </div>
      <div class="pay" @click="toPay">结算({{ allFoodsPrice }})</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import { submitOrder } from '@/api/order'
export default {
  data() {
    return {
      foodsSelected: [],
      isSlectAll: false,
    }
  },
  computed: {
    ...mapState(['cartData']),
    ...mapGetters(['allFoodsPrice', 'orderData']),
  },
  created() {
    console.log('cartData', this.cartData)
    console.log('allFoodsPrice', this.allFoodsPrice)
  },
  methods: {
    ...mapMutations(['MINUS_FOOD', 'ADD_FOOD']),
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
    toPay() {
      console.log('orderData', this.orderData)
      submitOrder(this.orderData)
        .then((res) => {
          console.log('res', res)
          this.$router.push('/OrderList')
        })
        .catch((err) => {
          console.log('err', err)
        })

      // this.$router.push()
    },
    minusNum(item) {
      this.MINUS_FOOD(item)
    },
    addNum(item) {
      this.ADD_FOOD(item)
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
