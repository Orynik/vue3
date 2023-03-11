<template>
  <div class="col s12 m6 l8">
    <div class="card orange darken-3 bill-card">
      <div class="card-content white-text">
        <div class="card-header">
          <span class="card-title">Курс валют</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Валюта</th>
              <th>Курс</th>
              <th>Дата</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="(currency, currencyKey) of props.objCurrency"
              :key="currencyKey"
            >
              <td>{{ currencyKey }}</td>
              <td>{{ currency }}</td>
              <td>{{ formatDate(props.date, 'date') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatDate } from '@/helpers/formatDate';
import { defineProps } from 'vue';
const props = defineProps({
  date: String,
  objCurrency: Object,
});
</script>

<script>
export default {
  name: 'generalCurrency',
};
</script>

<style lang="scss" scoped></style>
