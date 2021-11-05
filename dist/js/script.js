///// MODAL JS
const modal = document.getElementsByClassName("modal")[0];

// open button

const signupBtn = document.getElementById("signupBtn");

//close button

const closeBtn = document.getElementById("closeBtn");

//listen for click
signupBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

//////SUBSCRIPTION JS

const subscriptionForm = document.getElementById("subscription-form");

subscriptionForm.addEventListener("submit", postEmailData);

function postEmailData(e) {
  e.preventDefault();

  const url = "https://html-css-test-task.arkenstone.agency/feedback";
  const data = { email: document.getElementById("email-input").value };
  fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => console.log("Success:", JSON.stringify(response)))
    .catch((error) => console.error("Error:", error));
}

//////// SIGN UP JS

const signupForm = document.getElementById("signup-form");
const signupSuccess = document.getElementById("success-container");
const signupContainer = document.getElementById("signup-container");

signupForm.addEventListener("submit", postSignUpForm);

function postSignUpForm(e) {
  e.preventDefault();

  const url = "https://html-css-test-task.arkenstone.agency/registration";
  const data = {
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    password: document.getElementById("password").value,
    password_confirmation: document.getElementById("password_confirmation")
      .value,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("Success:", JSON.stringify(response));
      if (response.status === "success") {
        signupContainer.style.display = "none";
        signupSuccess.style.display = "block";
      } 
    })
    .catch((error) => console.error("Error:", error));
  console.log(data);
}

//////// VALIDATORS


