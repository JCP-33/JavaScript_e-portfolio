// EmailJS template ID: template_jam1sx9
// EmailJS sevice ID: service_pl8gzrl
// EmailJS public Key: fqnaOoQNF3xQk09Hy

// CONTACT FORM MESSAGE SUBMISSION FUNCTION
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_pl8gzrl",
      "template_jam1sx9",
      event.target,
      "fqnaOoQNF3xQk09Hy",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        'The email service is currently unavailable. Please contact me at joshuacody12@gmail.com'
      )
    })
}

function openModal() {
  document.body.classList.remove("modal--close");
  document.body.classList += " modal--open";
}

function closeModal() {
  document.body.classList.remove("modal--open");
  document.body.classList += " modal--close";
}
