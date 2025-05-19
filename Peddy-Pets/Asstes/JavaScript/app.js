//Remove Active Class:
const removeActiveClass = () => {
  let buttons = document.getElementsByClassName("active");
  for (let button of buttons) {
    button.classList.remove("active");
  }
};

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

//Load All Pets:
const loadAllPets = async() => {
  try {
    let response = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
    let data = await response.json();
    displayPets(data.pets);
  } catch(e) {
    console.log(e);
  }
};

//Load Pets By Category Name:
const loadByCategoryName = async(category_name) => {
  try {
    let response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${category_name}`);
    let data = await response.json();
    removeActiveClass();
    let clickedBtn = document.getElementById(`btn-${category_name}`);
    clickedBtn.classList.add("active");
    displayPets(data.data);
  } catch(e) {
    console.log(e);
  }
};

//Load Pets Details By Id:
const loadByPetId = async(pet_id) => {
  try {
    let response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${pet_id}`);
    let data = await response.json();
    displayPetDetails(data.petData);
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
      <button class="flex justify-center items-center gap-4 border px-12 border-gray-300 py-3 rounded cursor-pointer transition-all" id="btn-${category.category}" onclick="loadByCategoryName('${category.category}')">
        <img class="w-[35px]" src="${category.category_icon}" alt="${category.category}" />
        <span class="text-black font-bold">${category.category}</span>
      </button>
    `
    categoriesContainer.append(categoryDiv);
  });
};

//Display Pets:
const displayPets = (pets) => {
  let petsContainer = document.getElementById("pets-container");
  petsContainer.innerHTML = "";

  if (pets.length === 0) {
    petsContainer.classList.remove("grid");
    let errorDiv = document.createElement("div");
    errorDiv.classList.add("bg-gray-100", "px-8", "py-12", "flex", "flex-col", "text-center");
    errorDiv.innerHTML = `
    <figure class="mx-auto">
      <img src="./Asstes/Images/error.webp" alt="No-Data-Found" />
    </figure>
    <div class="text-center">
      <h3 class="text-2xl font-extrabold my-4">No Information Available</h3>
      <p class="text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at<br/>its layout. The point of using Lorem Ipsum is that it has a.</p>
    </div>
    `;
    petsContainer.append(errorDiv);
  } else {
    petsContainer.classList.add("grid");
    pets.map((pet) => {
    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card", "border", "border-gray-200", "rounded-md", "p-3");
    cardDiv.innerHTML = `
    <figure>
      <img src="${pet?.image}" alt="${pet?.pet_name || "pet"}" class="rounded-md w-full h-[180px] object-cover" />
    </figure>
    <div class="mt-2">
      <h4 class="text-lg font-extrabold text-black">${pet?.pet_name || "N/A"}</h4>
      <ul class="mt-2 mb-3">
        <li class="text-gray-600 flex items-center gap-1 mb-1 text-base">
          <i class="fa-regular fa-snowflake"></i>
          <span>Breed: ${pet?.breed || "N/A"}</span>
        </li>
        <li class="text-gray-600 flex items-center gap-1 mb-1 text-base">
          <i class="fa-regular fa-calendar"></i>
          <span>Birth: ${pet?.date_of_birth || "N/A"}</span>
        </li>
        <li class="text-gray-600 flex items-center gap-1 mb-1 text-base">
          <i class="fa-solid fa-mercury"></i>
          <span>Gender: ${pet?.gender || "N/A"}</span>
        </li>
        <li class="text-gray-600 flex items-center gap-1 mb-1 text-base">
          <i class="fa-solid fa-dollar-sign"></i>
          <span>Price: ${pet?.price ? `${pet.price}$` : "N/A"}</span>
        </li>
      </ul>
      <div class="flex justify-between items-center border-t border-gray-200">
        <button class="mt-4 px-4 py-1 rounded-md cursor-pointer border border-gray-200 text-teal-700 hover:bg-teal-700 hover:text-white hover:border-teal-700"><i class="fa-regular fa-thumbs-up"></i></button>
        <button class="mt-4 px-4 py-1 rounded-md cursor-pointer border border-gray-200 text-teal-700 hover:bg-teal-700 hover:text-white hover:border-teal-700">Adopt</button>
        <button class="mt-4 px-4 py-1 rounded-md cursor-pointer border border-gray-200 text-teal-700 hover:bg-teal-700 hover:text-white hover:border-teal-700" onclick="loadByPetId(${pet.petId})">Details</button>
      </div>
    </div>
    `;
    petsContainer.append(cardDiv);
    });
  }
};

//Display Pet Details:
const displayPetDetails = (pet) => {
  document.getElementById("showPetDetails").showModal();
  let detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
  <figure>
    <img src="${pet?.image}" alt="${pet?.pet_name || "pet"}" class="rounded-md w-full h-[260px] object-cover" />
  </figure>
  <div class="mt-2">
    <h4 class="text-lg font-extrabold text-black">${pet?.pet_name || "N/A"}</h4>
    <ul class="mt-2 mb-3 grid grid-cols-2">
      <li class="text-gray-600 flex items-center gap-1 mb-1 text-base">
        <i class="fa-regular fa-snowflake"></i>
        <span>Breed: ${pet?.breed || "N/A"}</span>
      </li>
      <li class="text-gray-600 flex items-center gap-1 mb-1 text-base">
        <i class="fa-regular fa-calendar"></i>
        <span>Birth: ${pet?.date_of_birth || "N/A"}</span>
      </li>
      <li class="text-gray-600 flex items-center gap-1 mb-1 text-base">
        <i class="fa-solid fa-mercury"></i>
        <span>Gender: ${pet?.gender || "N/A"}</span>
      </li>
      <li class="text-gray-600 flex items-center gap-1 mb-1 text-base">
        <i class="fa-solid fa-dollar-sign"></i>
        <span>Price: ${pet?.price ? `${pet.price}$` : "N/A"}</span>
      </li>
      <li class="text-gray-600 flex items-center gap-1 mb-1 text-base">
        <i class="fa-solid fa-mercury"></i>
        <span>Vaccinated Status: ${pet?.vaccinated_status || "N/A"}</span>
      </li>
    </ul>
    <div class="my-2 text-left">
      <h4 class="text-lg font-bold mb-2">Details Information</h4>
      <p>${pet?.pet_details || "N/A"}</p>
    </div>
  </div>
  `;
};

//Call loadCategories:
loadCategories();

//Call loadAllPets:
loadAllPets();
