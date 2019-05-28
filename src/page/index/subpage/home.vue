<template>
    <div class="home">
        {{page}}
        <vuextest/>
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
    };
  },
  mounted (){
    getFetchTest();
    this.$store.dispatch("user/setUserName","jdjf");
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
