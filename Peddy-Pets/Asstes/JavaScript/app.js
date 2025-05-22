//Display Categories:
const displayCategories = (categories) => {
  let categoriesContainer = document.getElementById("categories-container");
  categories.map((category) => {
    let categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
      <button class="flex justify-center items-center gap-4 border px-12 border-gray-300 py-3 rounded cursor-pointer transition-all w-full" id="btn-${category.category}" onclick="loadByCategoryName('${category.category}')">
        <img class="w-[35px] h-[35px]" src="${category.category_icon}" alt="${category.category}" />
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
    <div class="text-center md:w-[700px] mx-auto">
      <h3 class="text-2xl font-extrabold my-4">No Information Available</h3>
      <p class="text-base">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.</p>
    </div>
    `;
    petsContainer.append(errorDiv);
    // hideLoader();
    setTimeout(() => hideLoader(), 1000);
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
          <button class="mt-4 px-4 py-1 rounded-md cursor-pointer border border-gray-200 text-teal-700 hover:bg-teal-700 hover:text-white hover:border-teal-700" onclick="storeLikedPets(${pet.petId})"><i class="fa-regular fa-thumbs-up"></i></button>
          <button class="mt-4 px-4 py-1 rounded-md cursor-pointer border border-gray-200 text-teal-700 hover:bg-teal-700 hover:text-white hover:border-teal-700" id="btn-${pet.petId}" onclick="adoptionHandler(${pet.petId})">Adopt</button>
          <button class="mt-4 px-4 py-1 rounded-md cursor-pointer border border-gray-200 text-teal-700 hover:bg-teal-700 hover:text-white hover:border-teal-700" onclick="loadByPetId(${pet.petId})">Details</button>
        </div>
      </div>
      `;
      petsContainer.append(cardDiv);
    });
    // hideLoader();
    setTimeout(() => hideLoader(), 1000);
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
    <div class="my-4 text-left border-t border-gray-200">
      <h4 class="text-lg font-bold pt-2 mb-2">Details Information</h4>
      <p>${pet?.pet_details || "N/A"}</p>
    </div>
  </div>
  `;
};

//Display Liked Pets:
const displayLikedPets = (pets) => {
  let likedPetsContainer = document.getElementById("liked-pets");
  pets.map((pet) => {
    let likedCard = document.createElement("div");
    likedCard.classList.add("border", "border-gray-100", "rounded-md", "p-1");
    likedCard.innerHTML = `
    <figure>
      <img src="${pet?.image}" alt="${pet?.pet_name || "pet"}" class="rounded-md" />
    </figure>
    `;
    likedPetsContainer.append(likedCard);
  });
};

//Call loadCategories:
loadCategories();

//Call loadAllPets:
loadAllPets();
