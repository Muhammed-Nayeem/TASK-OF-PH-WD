//Adoption Button Event-Handler:
const adoptionHandler = (pad_id) => {
  document.getElementById("timer-modal").showModal();
  let btn = document.getElementById(`btn-${pad_id}`);
  let counter = document.querySelector(".counter");
  counter.textContent = 3;
  let count = 3;
  
  //time will be counted 3 - 1:
  setInterval(() => {
    if (count > 1) {
      count--;
      counter.textContent = count;
      btn.textContent = "Adopted";
      btn.disabled = true;
      btn.classList.remove("cursor-pointer");
      btn.classList.add("cursor-not-allowed", "opacity-40");
    }
  }, 1000);

  //timer modal close after 3 seconds when the counter value is 1:
  setTimeout(() => {
    document.getElementById("timer-modal").close();
  },  3000);
};

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

//Store Liked Pets:
const storeLikedPets = async(pet_id) => {
  try {
    let response = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
    let data = await response.json();
    let pets = data.pets.filter((pet) => pet.petId === pet_id);
    displayLikedPets(pets);
  } catch(e) {
    console.log(e);
  }
};
