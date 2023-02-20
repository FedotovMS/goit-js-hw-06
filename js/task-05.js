const textInput = document.querySelector("#name-input");
const spanOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const name = event.currentTarget.value;
  if (name === "") {
    spanOutput.textContent = "Anonymous";
  } else {
    spanOutput.textContent = name;
  }
});
