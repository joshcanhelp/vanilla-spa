import { isAuthenticated } from "./helpers.js";

export const loadDynamicInterface = async () => {
  const appScreen = document.getElementById("account-links");

  if (isAuthenticated()) {
    const logoutLink = document.createElement("a");
    logoutLink.textContent = "Logout";
    logoutLink.setAttribute("href", "/logout");
    appScreen.prepend(
      `You're logged in as ${localStorage.getItem("name")} - `,
      logoutLink
    );
  }
};
