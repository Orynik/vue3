<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>

        <p
          v-for="(currency, currencyKey) of props.objCurrency"
          :key="currencyKey"
          class="currency-line"
        >
          <span>{{ getCurrency(currency) }} {{ currencyKey }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/user';
import { defineProps, computed } from 'vue';

const props = defineProps({ objCurrency: Object });
const userStore = useUserStore();

let baseCurrency = computed(() => {
  return (
    userStore.getUserBill /
    (props.objCurrency['RUB'] / props.objCurrency['USD'])
  );
});

function getCurrency(currencyValue) {
  return Math.floor(baseCurrency.value * currencyValue);
}
</script>

<script>
export default {
  name: 'generalBill',
};
</script>

<style lang="scss" scoped></style>
