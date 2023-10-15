//API fetching: loads all the data
const loadPhones = async (searchText="13", isShowAll) => {
  try {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
  } catch(e) {
    alert(e.message);
    return;
  }
};

//shows UI: show the data on UI
const displayPhones = (phones, isShowAll) => {
  let phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";

  //show all button: hidden or show
  const showAllBtnContainer = document.getElementById("show-all-btn-container");
  if (phones.length >= 8 && !isShowAll) {
    showAllBtnContainer.classList.remove("hidden");
  } else {
    showAllBtnContainer.classList.add("hidden");
  }

  //slicing:
  if (!isShowAll) {
    phones = phones.slice(0, 8);
  }

  phones.forEach((phone) => {
    // console.log(phone);
    let phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-base-100 p-4 border rounded`;
    phoneCard.innerHTML = `
    <figure class="bg-cyan-50 py-8 rounded">
      <img src="${phone.image}" alt="${phone.phone_name}" />
    </figure>
    <div class="card-body text-center p-0 pt-4">
      <h2 class="text-center text-xl font-bold text-black">${phone.phone_name}</h2>
      <p>There are many variations of passages of available, but the majority have suffered</p>
      <p class="text-xl font-bold text-black">$<span>${phone.slug.split("-")[1]}</span></p>
      <div class="card-actions justify-center pt-2">
        <button class="btn btn-primary" onclick="showDetails('${phone.slug}')">Show Details</button>
      </div>
    </div>
    `;
    phonesContainer.appendChild(phoneCard);
  });
  toggleLoadingSpinner(false);
};

//show details modal handler:
const showDetails = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  const phone = data.data;
  showPhoneDetails(phone);
};

//show phone details:
const showPhoneDetails = (phone) => {
  const detailsContainer = document.getElementById("show-details-container");
  detailsContainer.innerHTML = `
  <figure class="bg-cyan-50 flex justify-center items-center py-8 mb-4 rounded">
    <img src="${phone.image}" alt="${phone.name}" />
  </figure>
  <h3 class="font-bold text-xl mb-3">${phone.name}</h3>
  <p class="text-base text-gray-700 mb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
  <h4 class="text-lg text-black font-bold">Storage: <span class="text-gray-700 font-normal text-base">${phone.mainFeatures?.storage}</span></h4>
  <h4 class="text-lg text-black font-bold">Display Size: <span class="text-gray-700 font-normal text-base">${phone.mainFeatures?.displaySize}</span></h4>
  <h4 class="text-lg text-black font-bold">Chipset: <span class="text-gray-700 font-normal text-base">${phone.mainFeatures?.chipSet}</span></h4>
  <h4 class="text-lg text-black font-bold">Memory: <span class="text-gray-700 font-normal text-base">${phone.mainFeatures?.memory}</span></h4>
  <h4 class="text-lg text-black font-bold">Slug: <span class="text-gray-700 font-normal text-base">${phone.slug}</span></h4>
  <h4 class="text-lg text-black font-bold">Release Date: <span class="text-gray-700 font-normal text-base">${phone.releaseDate}</span></h4>
  <h4 class="text-lg text-black font-bold">Brand: <span class="text-gray-700 font-normal text-base">${phone.brand}</span></h4>
  <h4 class="text-lg text-black font-bold">GPS: <span class="text-gray-700 font-normal text-base">${phone.others?.GPS || "No GPS Support"}</span></h4>
  `;

  //show the modal:
  phone_modal.showModal();
};

//search handler: search the data
const searchHandler = (isShowAll) => {
  let searchElement = document.getElementById("search-field");
  let searchText = searchElement.value;
  // console.log(searchText);
  loadPhones(searchText, isShowAll);
};

//loader:
const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

//show all handler:
const showAllHandler = () => {
  searchHandler(true);
};

loadPhones();
