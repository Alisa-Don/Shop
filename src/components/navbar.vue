<template>
  <div class="navBar">
    <div class="footer">
      <div
        class="f-nav"
        :class="{ active: current === 'index' }"
        @click="navChange('index')"
      >
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </div>
      <div
        class="f-nav"
        :class="{ active: current === 'category' }"
        @click="navChange('category')"
      >
        <i class="iconfont icon-fenlei"></i>
        <span>分类</span>
      </div>
      <div
        class="f-nav"
        :class="{ active: current === 'cart' }"
        @click="navChange('cart')"
      >
        <i class="iconfont icon-gouwuche"></i>
        <span>购物车</span>
      </div>
      <div
        class="f-nav"
        :class="{ active: current === 'mine' }"
        @click="navChange('mine')"
      >
        <i class="iconfont icon-31wode"></i>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 'index',
    }
  },
  methods: {
    navChange(navName) {
      this.current = navName
      if (navName === 'index') {
        this.$router.push('/')
      } else {
        this.$router.push(`/${navName}`)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.navBar {
  $color: #46e1ff;
  .footer {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 110px;
    background-color: #fff;
    box-shadow: 0px -2px 6px 0px rgba(87, 87, 87, 0.28);
    padding: 16px 91px;
    .active {
      color: $color !important;
    }
    .f-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100px;
      height: 100px;
      color: #b3b3b3;

      i {
        font-size: 45px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
