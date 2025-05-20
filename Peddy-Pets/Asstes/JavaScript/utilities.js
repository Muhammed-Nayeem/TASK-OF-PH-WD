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
