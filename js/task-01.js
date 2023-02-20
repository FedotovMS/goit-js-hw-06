// Display number of categoties
const categoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);
categoriesEl.forEach(function (item, index) {
  console.log(`Category: ${item.firstElementChild.textContent} 
  Elements: ${item.querySelectorAll("li").length}`);
});
