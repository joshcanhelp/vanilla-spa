import { registerRouter } from "./router.js";

const app = async () => {
  console.log("App loading ...");
  registerRouter();
};

document.addEventListener("DOMContentLoaded", app);
