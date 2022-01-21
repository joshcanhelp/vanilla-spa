import { fetchView } from "../handlerUtilities.js";
import { apiUrl } from "../constants.js";

export const getTitle = () => "Create Post";
export const getView = async () => await fetchView("create");
export const postRender = async () => {
  const form = document.getElementById("create-form");
  const formErrors = document.getElementById("create-form-errors");
  const formSuccess = document.getElementById("create-form-success");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    formErrors.textContent = "";

    const formData = {
      title: document.getElementById("title").value,
      content: document.getElementById("content").value,
      author: document.getElementById("author").value,
    };

    let response;
    try {
      response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      formErrors.textContent = error.message;
      return;
    }

    const responseBody = await response.json();

    if (!response.ok) {
      formErrors.textContent = `${response.statusText}: ${responseBody.error}`;
      return;
    }

    form.style.display = "none";
    formSuccess.textContent = `"${formData.title}" published!`;
  });
};
