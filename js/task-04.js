const valueSpanEl = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;
const decrementClick = () => {
  counterValue--;
  valueSpanEl.textContent = counterValue;
};
decrementBtn.addEventListener("click", decrementClick);

const incrementClick = () => {
  counterValue++;
  valueSpanEl.textContent = counterValue;
};
incrementBtn.addEventListener("click", incrementClick);
