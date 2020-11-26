const details = document.querySelector("details");
const dialog = document.querySelector("dialog");

details.addEventListener("toggle", event => {
  if (!dialog.open && details.open) {
    dialog.showModal();
  }
});

document.addEventListener("submit", event => {
  if (event.target.method === "dialog") {
    details.open = false;
  }
});