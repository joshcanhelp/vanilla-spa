import { fetchView } from "../handlerUtilities.js";
import { apiUrl } from "../constants.js";


export const metaTitle = "Create Post";
export const getView = async () => await fetchView("create");
export const postRender = async () => {
  const form = document.getElementById("create-form");
  const formSubmit = document.getElementById("create-form-submit");
  const formErrors = document.getElementById("create-form-errors");
  const formSuccess = document.getElementById("create-form-success");

  const resetForm = () => {
    formSubmit.disabled = false;
    form.style.opacity = 1;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log("Form submitting ...");
    formErrors.textContent = "";
    formSubmit.disabled = true;
    form.style.opacity = 0.3;

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
      resetForm();
      formErrors.textContent = error.message;
      return;
    }

    if (!response.ok) {
      resetForm();
      formErrors.textContent = `${response.statusText}`;
      return;
    }

    resetForm();
    form.style.display = "none";
    formSuccess.textContent = `"${formData.title}" published!`;
  });
};
