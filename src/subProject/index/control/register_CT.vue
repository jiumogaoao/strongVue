<template>
    <div class="register">
        <div>{{page}}</div>
        <span class="icon iconfont">&#xe65d;</span>
    </div>
</template>

<script>
export default {
  name: "register_CT",
  data () {
    return {
      page: "Register Page!",
    };
  },
};
</script>

<style scoped>
    .register {
        color: red;
        font-size: 24px;
        background: deepskyblue;
    }
    .icon{
      font-size: 300px;
      line-height: 10px;
    }
</style>
