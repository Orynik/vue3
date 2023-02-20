<script setup>
import { ref, defineProps } from "vue";

let props = defineProps({
  isOpenSidebar: Boolean,
});

let arrLinks = ref([
  { name: "details", title: "Счет" },
  { name: "history", title: "История" },
  { name: "planning", title: "Планирование" },
  { name: "record", title: "Новая запись" },
  { name: "categories", title: "Категории" },
]);
</script>

<script>
export default {
  name: "sidebar",
};
</script>

<template>
  <div>
    <ul class="sidenav app-sidenav" :class="{ open: props.isOpenSidebar }">
      <router-link
        v-for="route in arrLinks"
        :key="route.name"
        active-class="active"
        :to="{ name: route.name }"
        v-slot="{ isActive }"
      >
        <li :class="{ active: isActive }">
          {{ route.title }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
