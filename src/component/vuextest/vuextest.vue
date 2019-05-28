<template>
  <div>
    <div>userName = {{userName}}</div>
    <div @click="cl">click me</div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name:"Test",
    };
  },
  props: ["value","callback"],
  mounted (){
    this.$store.dispatch("user/setUserName","jdjf");
  },
  methods:{
    cl(){
      alert(this.value);
      this.callback();
    },
  },
  computed:{
    userName(){
      return this.$store.state.user.userName;
    },
  },
};
</script>
<style lang="scss">
@import "./style"
</style>
