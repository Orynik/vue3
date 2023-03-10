<template>
  <div class="apploader">
    <div class="preloader-wrapper active">
      <div class="spinner-layer" :class="currentColor">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

let colors = ['spinner-red-only', 'spinner-blue-only', 'spinner-green-only'];

let currentColor = computed(() => colors[Math.round(Math.random() * 3)]);
</script>

<script>
export default {
  name: 'v-loader',
};
</script>

<style lang="scss" scoped></style>
