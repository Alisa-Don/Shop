<template>
  <div class="login">
    <div class="header">
      <img src="@/assets/images/login/login.png" alt="" />
    </div>
    <div class="login-box">
      <div
        class="register"
        :class="{ active: current === 'reg' }"
        @click="current = 'reg'"
      >
        注册
      </div>
      <div
        class="log"
        :class="{ active: current === 'login' }"
        @click="current = 'login'"
      >
        登录
      </div>
    </div>
    <div class="input">
      <span><i class="iconfont icon-guanbi"></i></span>
      <input type="number" placeholder="请输入手机号码" v-model="phoneNum" />
    </div>
    <div class="input-2">
      <span><i class="iconfont icon-mima"></i></span>
      <div>
        <input
          :type="passwordType"
          placeholder="请输入密码"
          v-model="password"
        />
        <span
          ><i class="iconfont icon-yanjing_xianshi_o" @click="showPw"></i
        ></span>
      </div>
    </div>
    <div class="button" @click="toIndex">{{ buttonText }}</div>
  </div>
</template>

<script>
import { userRegist, userLogin } from '@/api/user'

export default {
  data() {
    return {
      current: 'login',
      passwordType: 'password',
      phoneNum: '',
      password: '',
    }
  },
  computed: {
    buttonText() {
      if (this.current === 'login') {
        return '登录'
      } else {
        return '注册'
      }
    },
  },
  methods: {
    toIndex() {
      // console.log(this.phoneNum)
      // console.log(this.password)
      if (this.phoneNum === '') {
        this.$toast('手机号不能为空')
        return
      }
      if (this.password === '') {
        this.$toast('密码不能为空')
        return
      }
      if (this.current === 'reg') {
        // 注册
        // console.log('注册')
        let data = {
          account: this.phoneNum,
          password: this.password,
        }
        userRegist(data)
          .then((res) => {
            console.log('res', res)
            if (res.data.status === true) {
              this.$toast(res.data.message)
              this.current = 'login'
            } else {
              this.$toast(res.data.message)
            }
          })
          .catch((err) => {
            console.log('err', err)
          })
      } else {
        // 登录
        let data = {
          account: this.phoneNum,
          password: this.password,
        }
        userLogin(data)
          .then((res) => {
            console.log('res', res)
            if (res.data.status === true) {
              this.$router.push('/')
            } else {
              this.$toast(res.data.message)
            }
          })
          .catch((err) => {
            console.log('err', err)
          })
      }
    },
    showPw() {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  $m-color: rgb(220, 48, 119);
  overflow: hidden;
  .header {
    width: 750px;
    height: 444px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .login-box {
    display: flex;
    margin: 100px 98px 20px 98px;
    color: #cacaca;
    .active {
      color: $m-color;
      border-bottom: 1px solid $m-color !important;
    }
    .register {
      width: 273px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      border-bottom: 1px solid #cacaca;
    }
    .log {
      width: 273px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      border-bottom: 1px solid #cacaca;
    }
  }
  .input {
    width: 746px;
    margin: 50px 98px 10px 98px;
    span {
      width: 50px;
      height: 50px;
      .iconfont {
        color: $m-color;
        font-size: 40px;
        margin-right: 10px;
        text-align: center;
        line-height: 50px;
      }
    }

    input {
      width: 485px;
      height: 60px;
      border: none;
      outline: none;
      border-bottom: 1px solid #cacaca;
    }
  }
  .input-2 {
    display: flex;
    width: 746px;
    margin: 50px 98px 10px 98px;
    span {
      width: 50px;
      height: 50px;
      .iconfont {
        color: $m-color;
        font-size: 50px;
        margin-right: 10px;
        text-align: center;
        line-height: 50px;
      }
    }

    div {
      border-bottom: 1px solid #cacaca;
      display: flex;
      justify-content: space-between;
      input {
        width: 425px;
        height: 60px;
        border: none;
        outline: none;
        margin-right: 10px;
      }
    }
  }
  .button {
    margin: 100px 153px;
    width: 450px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    color: #fff;
    background-color: $m-color;
    border-radius: 50px;
  }
}
</style>
