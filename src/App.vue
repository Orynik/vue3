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

  a.disabled {
    background-color: grey;
    cursor: not-allowed;
  }
}
</style>
