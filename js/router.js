import { loadScreen } from "./loadScreen.js";

export const registerRouter = async () => {
  await loadScreen();
  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", async (event) => {
      if (event.target.hostname === window.location.hostname) {
        event.preventDefault();
        const { pathname } = event.target;
        window.history.pushState({}, '', pathname);
        await loadScreen(pathname);
      }
    });
  });
};  
