const contact = document.getElementById("contact-button");
contact.addEventListener("click", toggleContact);

function toggleContact() {
  const contactForm = document.getElementById("container");
  contactForm.style.display = "block";
}
