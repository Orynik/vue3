import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import toaster from "@/utils/toaster.plugin";
import "materialize-css/dist/js/materialize.min.js";

const vueInst = createApp(App);

vueInst.use(toaster);
vueInst.use(router);
vueInst.mount("#app");
