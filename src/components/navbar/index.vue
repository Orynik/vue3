<script setup>
import { ref, defineEmits, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { formatDate } from "@/helpers/formatDate";
import { useAuthStore } from "@/store";

let authStore = useAuthStore();

let router = useRouter();
let navbarDropdown = ref(null);
let dateString = ref(null);
let dateInterval = ref(0);

let dropdown = null;

onMounted(() => {
  // eslint-disable-next-line no-undef
  dropdown = M.Dropdown.init(navbarDropdown.value, {
    constrainWidth: false,
  });

  dateInterval.value = setInterval(() => {
    dateString.value = formatDate(new Date(), "datetime");
  });
});

onBeforeUnmount(() => {
  clearInterval(dateInterval);
  dropdown.destroy();
});

//logOut
// УЗнать, почему у меня не работают params
function logout() {
  authStore.signOut();
  router.push({
    name: "login",
    query: { msg: "logout" },
  });
}

//Toggle Sidebar
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
          <span class="black-text">{{ dateString }}</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <a
              ref="navbarDropdown"
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
            >
              USER NAME
              <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul id="dropdown" class="dropdown-content">
              <li>
                <router-link class="black-text" :to="{ name: 'profile' }">
                  <i class="material-icons">account_circle</i>Профиль
                </router-link>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a href="#" class="black-text" @click.prevent="logout()">
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
