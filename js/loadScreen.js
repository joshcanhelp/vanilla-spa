const appScreen = document.getElementById("app-screen");
const pageTitle = document.getElementsByTagName("title")[0];

export const loadScreen = async (screenName = "") => {
  // Clear out existing screen content
  appScreen.innerHTML = "";

  // Set the screen to home if path is empty
  screenName = screenName.slice(1) || "home";

  const handler = await import(`./handlers/${screenName}.js`);

  // Set the page title or a default
  pageTitle.text = handler.getTitle() + " | AppName";

  // Get the view we want to display
  appScreen.innerHTML = await handler.getView();
};