import { fetchView } from "../handlerUtilities.js";
import { apiUrl } from "../constants.js";

export const metaTitle = "Your Posts";
export const getView = async () => await fetchView("posts");
export const postRender = async () => {
  const postsList = document.getElementById("posts-list");

  let response;
  try {
    response = await fetch(apiUrl);
  } catch (error) {
    postsList.classList.remove("loading");
    postsList.innerHTML = `❌ Error fetching posts: ${error.message}`;
    return;
  }

  if (!response.ok) {
    postsList.classList.remove("loading");
    postsList.innerHTML = `❌ Error fetching posts: ${response.statusText}`;
    return;
  }

  const responseBody = await response.json();

  postsList.classList.remove("loading");
  postsList.innerHTML =
    "<ul>" +
    responseBody.posts.reduce((acc, el) => {
      return `<li><strong>${el.title}</strong> - ${el.published}</li>${acc}`;
    }, "") +
    "</ul>";
};
