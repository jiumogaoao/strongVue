<template>
    <div class="home">
        <div>{{page}}</div>
        <vuextestCP :value="userName" :callback="callback"/>
        <div>{{count}}</div>
    </div>
</template>

<script>
import vuextestCP from "@component/vuextest_CP/vuextest_CP.vue";
import {getFetch} from "@util/request_UT.js";

let getFetchTest = async () => {
  const res = await getFetch("/fxapi/services/system/ctmall/homepage@getAllCitys.japi");
  console.log(res);
  return res;
};

export default {
  name: "home_CT",
  components: {
    "vuextestCP": vuextestCP,
  },
  data () {
    return {
      page: "Home Page!",
      count:0,
    };
  },
  mounted (){
    getFetchTest();
    this.$store.dispatch("userST/setUserName","jdjf");
  },
  methods:{
    callback(){
      this.count++;
    },
  },
  computed:{
    userName(){
      return this.$store.state.userST.userName;
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
