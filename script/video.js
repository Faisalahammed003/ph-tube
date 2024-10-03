//!create loadCatagories

const load = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => display(data.categories))
    .catch((error) => console.log(error));
};

//!Create DisplayCatagories

const display = (categories) => {
  const categoriesContainer = document.getElementById("categories");
  categories.forEach((item) => {
    console.log(item);

    //<--Creat button-->
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    categoriesContainer.append(button);
  });
};
load();
