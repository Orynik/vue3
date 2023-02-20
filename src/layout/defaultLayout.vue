<script setup>
import navbar from "@/components/navbar";
import sidebar from "@/components/sidebar";

import { ref } from "vue";

let isOpenSidebar = ref(true);
</script>

<template>
  <div class="app-main-layout">
    <navbar
      @on-toggle-sidebar="
        (isOpen) => {
          isOpenSidebar = isOpen;
        }
      "
    />
    <sidebar :isOpenSidebar="isOpenSidebar" />

    <main class="app-content" :class="{ full: !isOpenSidebar }">
      <RouterView />
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>
