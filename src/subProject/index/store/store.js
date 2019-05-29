import Vue from "vue";
import Vuex from "vuex";
import userST from "./user_ST";
//let mutations = {};
//Object.assign(mutations, user.mutations);
Vue.use(Vuex);
export let store = new Vuex.Store({
  state: {
    count: 0,
  },
  modules: {
    userST,
  },
});
