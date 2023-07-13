const accordions = document.getElementsByClassName("FAQ__title");

function toggleAccordion() {
  const icon = this.querySelector("i");
  const content = this.nextElementSibling;

  icon.classList.toggle("fa-plus");
  icon.classList.toggle("fa-times");

  content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
}

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", toggleAccordion);
}
