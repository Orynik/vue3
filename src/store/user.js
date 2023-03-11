import showMessage from '@/helpers/toaster';
import { get, getDatabase, ref } from 'firebase/database';
import { defineStore } from 'pinia';
import { useAuthStore } from './auth';

const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: {},
    };
  },
  actions: {
    async fetchUserInfo() {
      try {
        const uid = useAuthStore().getUid();

        if (!uid) {
          throw {
            pointThrow: 'fetchUserInfo',
          };
        }

        const refDB = getDatabase();
        this.userInfo = (await get(ref(refDB, `/users/${uid}`))).val();
      } catch (e) {
        showMessage(e.code, 'error');
        throw e;
      }
    },
    clearInfo() {
      this.userInfo = {};
    },
  },
  getters: {
    getUserName() {
      return this.userInfo?.username || '...';
    },
    getUserBill() {
      return this.userInfo?.bill || 10000;
    },
  },
});

export { useUserStore };
