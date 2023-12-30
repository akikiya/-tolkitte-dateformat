import formatDate from "./../lib/main";

const app = document.getElementById("app");

setInterval(() => {
  if (app) app.innerText = formatDate(new Date(), "datetime");
}, 1000);
