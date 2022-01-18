const appScreen = document.getElementById("app-screen");
const pageTitle = document.getElementsByTagName("title")[0];

export const loadScreen = (screenName) => {
  appScreen.innerHTML = "";
  screenName = screenName.slice(1) || "home";
  console.log(screenName);
  pageTitle.text = (screenTitles[screenName] ? `${screenTitles[screenName]} | ` : "") + "AppName";
};

const screenTitles = {
  "home": "Home",
  "posts": "Your Posts",
  "create": "Create a Post",
};