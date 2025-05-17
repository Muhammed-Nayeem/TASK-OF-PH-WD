//Load Categories:
const loadCategories = async() => {
  try {
    let response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    let data = await response.json();
    displayCategories(data.categories);
  } catch(e) {
    console.log(e);
  }
};

//Display Categories:
const displayCategories = (categories) => {
  let categoriesContainer = document.getElementById("categories-container");
  categories.map((category) => {
    let categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
      <button class="flex justify-center items-center gap-4 border px-12 border-gray-300 py-3 rounded cursor-pointer" id="btn-${category.id}">
        <img class="w-[35px]" src="${category.category_icon}" alt="${category.category}" />
        <span class="text-black font-bold">${category.category}</span>
      </button>
    `;
    categoriesContainer.append(categoryDiv);
  });
};

//Call loadCategories:
loadCategories();
