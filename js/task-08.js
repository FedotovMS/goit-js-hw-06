const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const formObject = Object.fromEntries(formData.entries());

  if (!formObject.email || !formObject.password) {
    alert("Please fill in all fields");
    return;
  }

  console.log(formObject);

  form.reset();
}
