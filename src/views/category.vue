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
          :class="{ active: current === item }"
          @click="changeCategory(item)"
          v-for="(item, index) in categories"
          :key="index"
        >
          {{ item }}
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
        <div
          class="choose"
          @click="toProductDetail(item)"
          v-for="item in currentFoods"
          :key="item._id"
        >
          <img :src="item.image" alt="" />
          <div class="pName">
            <p>{{ item.name }}</p>
            <div class="pPrice">
              <div class="price">
                <span>￥</span>
                <span class="num">{{ item.price }}</span>
                /斤
              </div>
              <div class="add" @click.stop="addFood(item)">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFoods } from '@/api/foods'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      current: 'recommend',
      allFoods: [],
      categories: [],
      currentFoods: [],
    }
  },
  created() {
    //Promise then catch
    getFoods()
      .then((res) => {
        // console.log('res', res)
        this.allFoods = res.data
        this.categories = res.data.map((i) => {
          return i.category
        })
        this.categories = [...new Set(this.categories)]
        // console.log('this.categories', this.categories)
      })
      .catch((err) => {
        console.log('err', err)
      })
  },
  methods: {
    ...mapMutations(['ADD_FOOD']),
    toProductDetail(item) {
      // console.log('toProductDetail')
      // console.log('item', item)
      let data = JSON.stringify(item)
      // console.log('data', data)
      sessionStorage.setItem('foodDetail', data)
      this.$router.push('/productDetail')
    },
    changeCategory(category) {
      // console.log('category', category)
      this.current = category
      this.currentFoods = this.allFoods.filter((i) => {
        return i.category === this.current
      })
      // console.log('this.currentFoods', this.currentFoods)
    },
    addFood(item) {
      // console.log('addFood')
      // console.log(item)
      this.ADD_FOOD(item)
      console.log('store', this.$store.state.cartData)
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
