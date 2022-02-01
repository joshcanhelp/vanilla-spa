import { isAuthenticated } from "./helpers.js";

const appScreen = document.getElementById("app-screen");
const pageTitle = document.getElementsByTagName("title")[0];

export const loadScreen = async (pathname = "") => {
  appScreen.classList.add("loading");

  // Clear out existing screen content
  appScreen.innerHTML = "";

  // Set navigation menu active
  document.querySelectorAll("nav a").forEach((el) => {
    el.classList.remove("active");
    if (el.getAttribute("href") === pathname) {
      el.classList.add("active");
    }
  });

  const { 
    metaTitle, 
    getView, 
    postRender,
    requiresAuth
  } = await import(`./handlers/${pathname.slice(1) || "home"}.js`);

  // Set the page title or a default
  pageTitle.text = metaTitle + " | AppName";

  // Check if the page requires authentication
  if (requiresAuth && !isAuthenticated()) {
    localStorage.setItem("returnTo", pathname);
    window.location.href = "/login";
    return;
  }

  // Get the view we want to display
  appScreen.innerHTML = await getView();
  
  appScreen.classList.remove("loading");

  if (typeof postRender === "function") {
    await postRender();
  }
};