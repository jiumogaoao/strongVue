<template>
  <div>userName = {{userName}}</div>
</template>
<script>
export default {
  data(){
    return{
      name:"Test",
    };
  },
  mounted (){
    this.$store.dispatch("user/setUserName","jdjf");
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
