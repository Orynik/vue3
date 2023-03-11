<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

import generalBill from '@/pages/general/_components/generalBill.vue';
import generalCurrency from '@/pages/general/_components/generalCurrency.vue';

let isLoading = ref(false);
let objCurrency = ref({
  date: '2023-03-11',
  rates: { EUR: 0.938304, RUB: 76.20369, USD: 1 },
});

onMounted(() => {
  fetchData();
});

async function fetchData() {
  if (!isLoading.value) isLoading.value = true;

  let res = await axios({
    method: 'get',
    url: 'https://api.apilayer.com/fixer/latest?symbols=RUB%2CEUR%2CUSD&base=USD',
    headers: {
      apikey: process.env.VUE_APP_FIXER,
    },
  });
  objCurrency.value = res.data;
  isLoading.value = false;
}
</script>

<script>
export default {
  name: 'general',
};
</script>

<template>
  <main class="app-content">
    <div class="app-page">
      <div class="page-title">
        <h3>Счет</h3>

        <button
          class="btn waves-effect waves-light btn-small"
          @click="fetchData"
        >
          <i class="material-icons">refresh</i>
        </button>
      </div>

      <v-loader v-if="isLoading" />
      <div v-else class="row">
        <general-bill :objCurrency="objCurrency.rates"></general-bill>
        <general-currency
          :date="objCurrency.date"
          :objCurrency="objCurrency.rates"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
