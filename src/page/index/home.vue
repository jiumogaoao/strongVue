<template>
    <div class="home">
        {{page}}
    </div>
</template>

<script>
import {getFetchTest} from "@model/index.js";
export default {
  name: "home.vue",
  data () {
    //m();
    return {
      page: "Home Page!",
    };
  },
  mounted (){
    getFetchTest();
  },
};
</script>

<style scoped>
    .home {
        color: green;
        background: yellow;
    }
</style>
