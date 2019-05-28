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
      name:"vuextest_CP",
    };
  },
  props: ["value","callback"],
  mounted (){
    this.$store.dispatch("userST/setUserName","jdjf");
  },
  methods:{
    cl(){
      alert(this.value);
      this.callback();
    },
  },
  computed:{
    userName(){
      return this.$store.state.userST.userName;
    },
  },
};
</script>
<style lang="scss">
@import "./style"
</style>
