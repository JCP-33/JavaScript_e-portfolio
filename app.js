let darkMode = false;


// shape function for the shapes I hate
// const scaleFactor = 1 / 20;

// function moveShapes(event) {
//   const shapes = document.querySelectorAll(".shape");
//   const x = event.clientX * scaleFactor;
//   const y = event.clientY * scaleFactor;

//   for (let i = 0; i < shapes.length; i++) {
//     const isOdd = i % 2 !==0
//     const boolInt = isOdd ? -1 : 1;
//     shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
//   }
// }

function toggleDarkMode() {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList += " dark-mode";
  }
  else {
    document.body.classList.remove("dark-mode");
  }
}

function openModal() {
  document.body.classList.remove("modal--close");
  document.body.classList += " modal--open";
}

function closeModal() {
  document.body.classList.remove("modal--open");
  document.body.classList += " modal--close";
}

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




