<script setup>
import { ref, defineProps } from "vue";

let props = defineProps({
  isOpenSidebar: Boolean,
});

let arrLinks = ref([
  { name: "details", title: "Счет", disabled: true },
  { name: "history", title: "История", disabled: true },
  { name: "planning", title: "Планирование", disabled: true },
  { name: "record", title: "Новая запись", disabled: true },
  { name: "categories", title: "Категории", disabled: true },
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
      Скоро все будет!
      <router-link
        v-for="route in arrLinks"
        :class="{ disabled: route.disabled }"
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
