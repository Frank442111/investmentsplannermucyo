const checkoutLinks = {
  investment: "",
  budget: "",
};

const checkoutDialog = document.querySelector(".checkout-dialog");

document.querySelectorAll(".checkout-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const checkoutUrl = checkoutLinks[link.dataset.product];
    if (checkoutUrl) {
      window.location.assign(checkoutUrl);
      return;
    }
    checkoutDialog.showModal();
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => checkoutDialog.close());
document.querySelector(".dialog-done").addEventListener("click", () => checkoutDialog.close());
document.querySelector("#current-year").textContent = new Date().getFullYear();