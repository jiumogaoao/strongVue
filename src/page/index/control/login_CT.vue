<template>
    <div class="login">
        {{page}}
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
