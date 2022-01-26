import { loadScreen } from "./loadScreen.js";

export const registerRouter = async () => {
  await loadScreen(window.location.pathname);
  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", async (event) => {
      // Allow external links
      if (event.target.origin !== window.location.origin) {
        return;
      }

      // Handle in-app
      event.preventDefault();
      const { pathname } = event.target;

      // Change the URL
      window.history.pushState({}, '', pathname);

      // Load the UI
      await loadScreen(pathname);
    });
  });
};  
