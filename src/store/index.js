import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import showMessage from "@/helpers/toaster";

import { getDatabase, ref, set } from "firebase/database";

const useAuthStore = defineStore("authStore", {
  state: () => ({
    user: null,
  }),
  actions: {
    async signIn({ email, password }) {
      try {
        const auth = getAuth();
        let user = await signInWithEmailAndPassword(auth, email, password);
        this.user = user.user;
      } catch (e) {
        this.errorMessage(e.code);
        throw e;
      }
    },
    async registerUser({ email, password, name }) {
      try {
        const auth = getAuth();
        let userData = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const db = getDatabase();
        set(ref(db, "users/" + userData.user.uid), {
          username: name,
          email: email,
        });
      } catch (e) {
        this.errorMessage(e.code);
        throw e;
      }
    },
    signOut() {
      try {
        const auth = getAuth();
        signOut(auth);
        showMessage("logout", "info");
      } catch (e) {
        this.errorMessage(e.code);
        throw e;
      }
    },

    getUid() {
      const user = getAuth().currentUser;
      return user ? user.uid : null;
    },

    errorMessage(text) {
      showMessage(text, "error");
    },
  },
});

export { useAuthStore };
