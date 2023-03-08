import messages from "@/utils/message.js";

const types = {
  error: "[Ошибка]",
  info: "",
};

export default function showMessage(messageText, type = "info") {
  const message = `${types[type]} ${
    messages[messageText] || "Возникла ошибка"
  }`;
  // eslint-disable-next-line no-undef
  M.toast({ html: message });
}
