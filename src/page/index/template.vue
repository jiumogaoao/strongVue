<template>
    <div id="app">
        <p>App</p>
        <router-link to="/home">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "app.vue",
  methods: {
    resize: function () {
      let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      let s = w / 720;
      document.getElementsByTagName("body")[0].style.transform = `scale(${s} , ${s} )`;
      document.getElementsByTagName("body")[0].style["transform-origin"]= "top left";
    },
  },
  created: function () {
    this.resize();
    window.onresize = () => {
      this.resize();
    };
  },
};
</script>

<style scoped>
@import './style.scss'
</style>
