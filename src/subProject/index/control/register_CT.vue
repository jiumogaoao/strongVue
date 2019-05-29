<template>
    <div class="register">
        {{page}}
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
</style>
