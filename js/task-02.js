const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = ingredients.forEach(function (item, index) {
  const newEl = document.createElement("li");
  newEl.textContent = item;
  newEl.classList.add("item");
  document.querySelector("#ingredients").append(newEl);
});
