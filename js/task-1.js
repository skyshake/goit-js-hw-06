const categoriesElements = document.querySelectorAll("#categories li.item");
// const categoriesElements = document.querySelectorAll('.item');
console.log("Number of categories:", categoriesElements.length);

categoriesElements.forEach((element) => {
  const categoryName = element.firstElementChild.textContent;
  console.log("Category:", categoryName);

  const categoryTypesList = element.lastElementChild;
  const categoryTypesLength = categoryTypesList.children.length;
  console.log("Elements:", categoryTypesLength);
});
