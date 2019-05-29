export default {
  namespaced:true,
  state: {
    userName: "cccc",
  },
  mutations: {
    showUserName (state) {
      alert(state.userName);
    },
    setUserName (state, val) {
      state.userName = val;
    },
  },
  actions:{
    showUserName (context){
      context.commit("showUserName");
    },
    setUserName (context,val){
      context.commit("setUserName",val);
    },
  },
};
