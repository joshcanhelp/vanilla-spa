export const registerRouter = () => {
  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (event) => {
      if (event.target.hostname !== window.location.hostname) {
        return;
      }

      event.preventDefault();
    });
  });
};  
