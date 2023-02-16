<!-- eslint-disable no-unused-vars -->
<script setup>
import appLayout from "@/layout/appLayout.vue";
</script>

<template>
  <appLayout>
    <router-view />
  </appLayout>
</template>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/css/index.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
