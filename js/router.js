import { loadScreen } from "./loadScreen.js";

export const registerRouter = () => {
  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (event) => {
      if (event.target.hostname === window.location.hostname) {
        event.preventDefault();
        const { pathname } = event.target;
        window.history.pushState({}, '', pathname);
        loadScreen(pathname);
      }
    });
  });
};  
