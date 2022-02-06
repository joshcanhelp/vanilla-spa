import { registerRouter } from "./router.js";
import { loadDynamicInterface } from "./dynamicInterface.js";

const app = async () => {
  console.log("App loading ...");
  await registerRouter();
  await loadDynamicInterface();
};

document.addEventListener("DOMContentLoaded", app);
