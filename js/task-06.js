// solution count spaces

// const inputEl = document.querySelector("#validation-input");
// const validLength = inputEl.dataset.length;

// inputEl.addEventListener("blur", (event) => {
//   const inputValue = event.currentTarget.value;
//   const inputLength = inputValue.length;

//   if (inputLength === parseInt(validLength)) {
//     inputEl.classList.add("valid");
//     inputEl.classList.remove("invalid");
//   } else {
//     inputEl.classList.add("invalid");
//     inputEl.classList.remove("valid");
//   }
// });

// solution count only symbols, without spaces
const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  const {
    value,
    dataset: { length: validLength },
  } = inputEl;
  const inputLength = value.trim().length;

  inputEl.classList.toggle("valid", inputLength === Number(validLength));
  inputEl.classList.toggle("invalid", inputLength !== Number(validLength));
});
