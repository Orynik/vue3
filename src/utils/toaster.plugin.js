import messages from "@/utils/message.js";

export default {
  install: (app) => {
    app.provide("toaster", {
      show: (text) => {
        if (!messages[text]) return;
        const message = messages[text];
        // eslint-disable-next-line no-undef
        M.toast({ html: message });
      },
      showError: (errorText) => {
        if (!messages[errorText]) return;
        const message = messages[errorText];
        // eslint-disable-next-line no-undef
        M.toast({ html: `[Ошибка] ${message}` });
      },
    });
  },
};
