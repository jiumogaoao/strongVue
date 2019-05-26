<template>
    <div>
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
};
</script>

<style scoped>
@import './style.scss'
</style>
