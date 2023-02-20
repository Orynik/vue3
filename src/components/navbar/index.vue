<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["onToggleSidebar"]);
let isOpenSidebar = ref(true);
function toggleSidebar() {
  isOpenSidebar.value = !isOpenSidebar.value;
  emit("onToggleSidebar", isOpenSidebar.value);
}
</script>

<script>
export default {
  name: "navbar",
};
</script>
<template>
  <div>
    <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#" @click.prevent="toggleSidebar">
            <i class="material-icons black-text">dehaze</i>
          </a>
          <span class="black-text">12.12.12</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
            >
              USER NAME
              <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul id="dropdown" class="dropdown-content">
              <li>
                <a href="#" class="black-text">
                  <i class="material-icons">account_circle</i>Профиль
                </a>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a href="#" class="black-text">
                  <i class="material-icons">assignment_return</i>Выйти
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped></style>
<style lang="scss" scoped></style>
