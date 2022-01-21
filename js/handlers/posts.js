import { fetchView } from "../handlerUtilities.js";
import { apiUrl } from "../constants.js";

export const getTitle = () => "Your Posts";
export const getView = async () => await fetchView("posts");
export const postRender = async () => {
  const postsList = document.getElementById("posts-list");

  let postsJson;
  try {
    const posts = await fetch(apiUrl);
    postsJson = (await posts.json()).posts;
  } catch (error) {
    postsList.classList.remove("loading");
    postsList.innerHTML = "❌ Error fetching posts.";
    return;
  }
  
  postsList.classList.remove("loading");
  postsList.innerHTML = "<ul>" + postsJson.reduce((acc, el) => {
    return `<li><strong>${el.title}</strong> - ${el.published}</li>${acc}`;
  }, "") + "</ul>";
}
