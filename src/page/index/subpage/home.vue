<template>
    <div class="home">
        {{page}}
        <vuextest/>
    </div>
</template>

<script>
import {getFetchTest} from "@model/index.js";
import vuextest from "@component/vuextest/vuextest.vue";
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
