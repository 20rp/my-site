const contact = document.getElementById("contact-button");
contact.addEventListener("click", toggleContact);

function toggleContact() {
  const contactForm = document.getElementById("container");
  contactForm.style.display = "block";
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
