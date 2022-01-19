const appScreen = document.getElementById("app-screen");
const pageTitle = document.getElementsByTagName("title")[0];

export const loadScreen = async (pathname = "") => {
  appScreen.classList.add("loading");

  // Clear out existing screen content
  appScreen.innerHTML = "";

  // Set the screen to home if path is empty
  const screenName = pathname.slice(1) || "home";

  const { getTitle, getView, postRender } = await import(`./handlers/${screenName}.js`);

  // Set the page title or a default
  pageTitle.text = getTitle() + " | AppName";

  // Get the view we want to display
  appScreen.innerHTML = await getView();
  
  appScreen.classList.remove("loading");

  if (typeof postRender === "function") {
    await postRender();
  }

  document.querySelectorAll("nav a").forEach((el) => {
    if (el.getAttribute("href") === pathname) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
};