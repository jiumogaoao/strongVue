<template>
    <div class="login">
        <div>{{page}}</div>
        <img src="@assets/images/flow.png"/>
    </div>
</template>

<script>
export default {
  name: "login_CT",
  data () {
    return {
      page: "Login Page!",
    };
  },
};
</script>

<style scoped>
    .login {
        padding: 50px;
        background: crimson;
    }
</style>
