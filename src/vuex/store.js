import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: { //用来存储数据
    commitsum: {},
    isLogin: false, //判断用户是否登录
    currentUser: null //显示当前用户
  },
  getters: { //获得数据状态
    getIsLogin: state => state.isLogin,
    getCurrentUser: state => state.currentUser
  },
  mutations: { //用来更改数据状态
    setcommit(state, data) {
      state.commitsum = data
    },
    remove(state, data) {
      state.commitsum.forEach((item, index) => {
        if(item == data){
          state.commitsum.splice(index, 1)
        }
      })
    }
  }
})