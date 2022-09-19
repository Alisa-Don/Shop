import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showNavBar: true,
    cartData: [],
  },
  getters: {
    orderData(state, getters) {
      return {
        location: '小明大排档(软件园店)',
        tableNumber: 32,
        comment: 'aaa',
        cartData: state.cartData,
        totalFoodsPrice: getters.allFoodsPrice,
        allFoodsNumber: getters.allFoodsNum,
      }
    },
    allFoodsNum(state) {
      let num = 0
      state.cartData.forEach((i) => {
        num = num + i.number
      })
      return num
    },
    allFoodsPrice(state) {
      let allPrice = 0
      state.cartData.forEach((i) => {
        allPrice = allPrice + i.totalPrice
      })
      return allPrice
    },
  },
  mutations: {
    SET_SHOWNAVBAR(state, bool) {
      state.showNavBar = bool
    },
    ADD_FOOD(state, item) {
      let exist = state.cartData.find((i) => i.name === item.name)
      if (!exist) {
        state.cartData.push({
          name: item.name,
          totalPrice: 1 * item.price,
          number: 1,
          price: item.price,
          image: item.image,
        })
      } else {
        exist.number += 1
        exist.totalPrice = exist.number * item.price
      }
    },
    MINUS_FOOD(state, item) {
      let res = state.cartData.find((i) => {
        return i.name === item.name
      })
      res.number = res.number - 1
      res.totalPrice = res.number * item.price
      state.cartData = state.cartData.filter((i) => i.number > 0)
    },
  },
})

export default store
