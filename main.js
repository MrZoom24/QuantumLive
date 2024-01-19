// Change navbar style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// Show or hide FAQ paragraph
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // Change icon
    const icon = faq.querySelector(".faq__icon ion-icon");
    if (icon.getAttribute("name") === "add-circle-outline") {
      icon.setAttribute("name", "remove-circle-outline");
    } else {
      icon.setAttribute("name", "add-circle-outline");
    }
  });
});
