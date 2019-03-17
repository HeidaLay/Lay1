import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count1:0,
    count2:10
  },
  mutations: {
    add(state,num){
      state.count1+=num
    },
    sub(state,num){
      state.count2-=num
    }
  },
  actions: {
      subAction({commit},num){
          commit('sub',num)
      }
  }
})
