import Vue from 'vue'
import Vuex from 'vuex'
import supply from './supply'
Vue.use(Vuex)
const state = {}
const mutations = {}
const actions = {}
const getters = {}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
    supply
  }
})