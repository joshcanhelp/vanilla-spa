import { fetchView } from "../handlerUtilities.js";

export const getTitle = () => "Create Post";
export const getView = async () => await fetchView("create");
export const postRender = async () => {
  const form = document.getElementById("create-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
    }
    console.log(formData);
  });
};
