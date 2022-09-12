<template>
  <div class="category">
    <div class="header">
      <div class="wrap">
        <span>分类</span>
        <i class="iconfont icon-sousuo"></i>
      </div>
    </div>
    <div class="wrap">
      <div class="sidebar">
        <div
          class="list"
          :class="{ active: current === 'recommend' }"
          @click="current = 'recommend'"
        >
          精选推荐
        </div>
        <div
          class="list"
          :class="{ active: current === 'fruit' }"
          @click="current = 'fruit'"
        >
          新鲜水果
        </div>
        <div
          class="list"
          :class="{ active: current === 'vagetable' }"
          @click="current = 'vagetable'"
        >
          时蔬净菜
        </div>
        <div
          class="list"
          :class="{ active: current === 'egg' }"
          @click="current = 'egg'"
        >
          肉禽蛋品
        </div>
        <div
          class="list"
          :class="{ active: current === 'seafood' }"
          @click="current = 'seafood'"
        >
          海鲜水产
        </div>
        <div
          class="list"
          :class="{ active: current === 'snake' }"
          @click="current = 'snake'"
        >
          休闲零食
        </div>
        <div
          class="list"
          :class="{ active: current === 'liquor' }"
          @click="current = 'liquor'"
        >
          酒水饮料
        </div>
        <div
          class="list"
          :class="{ active: current === 'oil' }"
          @click="current = 'oil'"
        >
          粮油百货
        </div>
        <div
          class="list"
          :class="{ active: current === 'cake' }"
          @click="current = 'cake'"
        >
          蛋糕烘焙
        </div>
        <div
          class="list"
          :class="{ active: current === 'food' }"
          @click="current = 'food'"
        >
          美食
        </div>
        <div
          class="list"
          :class="{ active: current === 'makeup' }"
          @click="current = 'makeup'"
        >
          护肤品
        </div>
      </div>
      <div v-if="current === 'recommend'" class="content">
        <div class="container">
          <div class="rank">
            <p class="one">1</p>
            <p class="name">龙虾</p>
            <!-- <img :src="require('@/assets/images/products/shrimp.png')" alt="" /> -->
            <img src="@/assets/images/products/shrimp.png" alt="" />
          </div>
          <div class="rank">
            <p class="one">2</p>
            <p class="name">鲫鱼</p>
            <!-- <img :src="require('@/assets/images/products/shrimp.png')" alt="" /> -->
            <img src="@/assets/images/products/fish.png" alt="" />
          </div>
          <div class="rank">
            <p class="one">3</p>
            <p class="name">大米</p>
            <!-- <img :src="require('@/assets/images/products/shrimp.png')" alt="" /> -->
            <img src="@/assets/images/products/rice.png" alt="" />
          </div>
        </div>
        <div class="liquor">
          <div class="title">
            <p class="word">百年酿</p>
            <p class="read">bainianniang</p>
          </div>
          <img src="@/assets/images/products/pro1.png" alt="" />
        </div>
        <div class="liquor">
          <img src="@/assets/images/products/bread.png" alt="" />
          <div class="title">
            <p class="word">手工包</p>
            <p class="read">shougongbao</p>
          </div>
        </div>
        <div class="liquor">
          <div class="title">
            <p class="word">特价橙</p>
            <p class="read">tejiacehng</p>
          </div>
          <img src="@/assets/images/products/orange.png" alt="" />
        </div>
        <div class="liquor">
          <img src="@/assets/images/products/vagetable.png" alt="" />
          <div class="title">
            <p class="word">绿色蔬菜</p>
            <p class="read">lvseshucai</p>
          </div>
        </div>
      </div>
      <div v-else class="content-foods">
        <div class="choose" @click="toProductDetail">
          <img src="@/assets/images/products/orange.png" alt="" />
          <div class="pName">
            <p>橙子</p>
            <div class="pPrice">
              <div class="price">
                <span>￥</span>
                <span class="num">20</span>
                /斤
              </div>
              <div class="add">+</div>
            </div>
          </div>
        </div>
        <div class="choose">
          <img src="@/assets/images/products/pro2.png" alt="" />
          <div class="pName">
            <p>猕猴桃</p>
            <div class="pPrice">
              <div class="price">
                <span>￥</span>
                <span class="num">20</span>
                /斤
              </div>
              <div class="add">+</div>
            </div>
          </div>
        </div>
        <div class="choose">
          <img src="@/assets/images/products/pro3.png" alt="" />
          <div class="pName">
            <p>芒果</p>
            <div class="pPrice">
              <div class="price">
                <span>￥</span>
                <span class="num">20</span>
                /斤
              </div>
              <div class="add">+</div>
            </div>
          </div>
        </div>
        <div class="choose">
          <img src="@/assets/images/products/pro4.png" alt="" />
          <div class="pName">
            <p>草莓</p>
            <div class="pPrice">
              <div class="price">
                <span>￥</span>
                <span class="num">20</span>
                /斤
              </div>
              <div class="add">+</div>
            </div>
          </div>
        </div>
        <div class="choose">
          <img src="@/assets/images/products/pro5.png" alt="" />
          <div class="pName">
            <p>大青枣</p>
            <div class="pPrice">
              <div class="price">
                <span>￥</span>
                <span class="num">20</span>
                /斤
              </div>
              <div class="add">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 'recommend',
    }
  },
  methods: {
    toProductDetail() {
      this.$router.push('/productDetail')
    },
  },
}
</script>

<style lang="scss" scoped>
.category {
  .header {
    width: 750px;
    height: 128px;
    background: #5ad4ea;
    margin-bottom: 37px;
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
  .wrap {
    display: flex;
    .sidebar {
      width: 200px;
      height: 1334px;
      padding: 0 14px 0 26px;
      font-size: 28px;
      border-right: 1px solid #dcdcdc;
      display: inline-block;

      .active {
        background-color: #5ad4ea;
        border-radius: 5px;
        color: #fff;
        font-weight: 600;
      }
      .list {
        width: 160px;
        height: 56px;
        margin-bottom: 60px;
        text-align: center;
        line-height: 56px;
        margin-bottom: 40px;
      }
    }
    .content {
      width: 500px;
      margin: 0 30px;
      .container {
        display: flex;
        .rank:last-child {
          margin-right: 0;
        }
        .rank {
          display: inline-block;
          width: 146px;
          height: 166px;
          border-radius: 8px;
          position: relative;
          border: 1px solid #e9f2f4;
          margin-right: 25px;

          p {
            z-index: 1;
            position: absolute;
            margin-left: 10px;
          }
          .one {
            color: #ff4646;
            font-size: 36px;
            font-style: italic;
            font-family: SourceHanSansCN;
            font-weight: bold;
          }
          .name {
            width: 15px;
            top: 60px;
            font-size: 26px;
            font-family: SourceHanSansCN;
            font-weight: bold;
            color: #454646;
          }
          img {
            position: absolute;
            top: 0;
            z-index: 0;
            width: 142px;
            height: 160px;
          }
        }
      }
      div.liquor {
        display: flex;
        width: 485px;
        height: 160px;
        background: #e9f2f4;
        border-radius: 8px;
        margin-top: 30px;
        .title {
          margin-left: 85px;
          .word {
            font-size: 32px;
            font-family: SourceHanSansCN;
            font-weight: bold;
            color: #333333;
          }
          .read {
            font-size: 20px;
            color: #999999;
          }
        }
        img {
          margin-left: 100px;
          margin-top: 10px;
          width: 97px;
          height: 141px;
          border-radius: 20px;
        }
      }
    }
    .content-foods {
      width: 500px;
      margin: 0 25px;
      .choose {
        display: flex;
        width: 500px;
        height: 200px;
        margin-bottom: 30px;
        img {
          width: 180px;
          height: 180px;
        }
        .pName {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 20px;
          .pPrice {
            width: 300px;
            display: flex;
            justify-content: space-between;
            .price {
              display: flex;
              align-items: center;
              font-size: 12px;
              color: #999999;
              span {
                color: #333333;
              }
              .num {
                font-size: 30px;
              }
            }
            .add {
              width: 50px;
              height: 50px;
              background-color: #ff4646;
              border-radius: 100px;
              color: #fff;
              text-align: center;
              line-height: 50px;
            }
          }
        }
      }
    }
  }
}
</style>
