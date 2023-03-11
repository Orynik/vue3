<script setup>
import navbar from '@/components/navbar';
import sidebar from '@/components/sidebar';
import { useUserStore } from '@/store/user';

import { ref, onMounted } from 'vue';

let userStore = useUserStore();
let isOpenSidebar = ref(true);
let isLoading = ref(true);

onMounted(() => {
  fetchData();
});

function fetchData() {
  userStore.fetchUserInfo().then(() => {
    isLoading.value = false;
  });
}
</script>

<template>
  <div class="app-main-layout">
    <v-loader v-if="isLoading" />
    <div v-else>
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
        <router-link
          class="btn-floating btn-large blue"
          :to="{ name: 'record' }"
        >
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>
