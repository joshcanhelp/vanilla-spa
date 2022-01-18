import { loadScreen } from "./loadScreen.js";

export const registerRouter = async () => {
  await loadScreen();
  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", async (event) => {
      // Allow external links
      if (event.target.hostname !== window.location.hostname) {
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
