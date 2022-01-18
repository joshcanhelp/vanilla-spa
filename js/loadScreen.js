const appScreen = document.getElementById("app-screen");
const pageTitle = document.getElementsByTagName("title")[0];
""
export const loadScreen = async (screenName = "") => {
  appScreen.innerHTML = "";

  // Set the screen to home if path is empty
  screenName = screenName.slice(1) || "home";

  // Set the page title or a default
  pageTitle.text = (screenTitles[screenName] ? `${screenTitles[screenName]} | ` : "") + "AppName";

  // Get the view we want to display
  const response = await fetch(`../views/${screenName}.html`);
  appScreen.innerHTML = await response.text();
};

const screenTitles = {
  "home": "Home",
  "posts": "Your Posts",
  "create": "Create a Post",
};