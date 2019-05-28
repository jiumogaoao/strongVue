<template>
    <div class="home">
        <div>{{page}}</div>
        <vuextest :value="userName" :callback="callback"/>
        <div>{{count}}</div>
    </div>
</template>

<script>
import vuextest from "@component/vuextest/vuextest.vue";
import {getFetch} from "@util/request.js";

let getFetchTest = async () => {
  const res = await getFetch("/fxapi/services/system/ctmall/homepage@getAllCitys.japi");
  console.log(res);
  return res;
};

export default {
  name: "home.vue",
  components: {
    "vuextest": vuextest,
  },
  data () {
    return {
      page: "Home Page!",
      count:0,
    };
  },
  mounted (){
    getFetchTest();
    this.$store.dispatch("user/setUserName","jdjf");
  },
  methods:{
    callback(){
      this.count++;
    },
  },
  computed:{
    userName(){
      return this.$store.state.user.userName;
    },
  },
};
</script>

<style scoped>
    .home {
        color: green;
        background: yellow;
    }
</style>
