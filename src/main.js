import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import toaster from '@/utils/toaster.plugin';
import 'materialize-css/dist/js/materialize.min.js';
import { initializeApp } from 'firebase/app';
import vLoader from '@/components/loader';

import createPinia from './store/createPinia';
import { firebaseConfig } from '@/fbconfig';

// import { getAnalytics } from 'firebase/analytics';

// Initialize Firebase
initializeApp(firebaseConfig);

const vueInst = createApp(App);

// Registation module
vueInst.use(createPinia);
vueInst.use(router);
vueInst.component('vLoader', vLoader);

// Registation plugins
vueInst.use(toaster);

vueInst.mount('#app');
