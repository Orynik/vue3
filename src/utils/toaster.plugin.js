import showMessage from "@/helpers/toaster";
export default {
  install: (app) => {
    app.provide("toaster", {
      show: (text, type) => {
        showMessage(text, type);
      },
    });
  },
};
