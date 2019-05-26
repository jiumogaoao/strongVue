<template>
    <div class="home">
        {{page}}
    </div>
</template>

<script>
export default {
  name: "home.vue",
  data () {
    return {
      page: "Home Page!",
    };
  },
};
</script>

<style scoped>
    .home {
        color: green;
        background: yellow;
    }
</style>
