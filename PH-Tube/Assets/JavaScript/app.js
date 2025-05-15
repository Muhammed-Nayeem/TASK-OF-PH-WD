//time formation: hour-minute-second
function getTimeString(times) {
  let hour = parseInt(times / 3600);
  let remaining = parseInt(times % 3600);
  let min = parseInt(remaining / 60);
  let sec = parseInt(remaining % 60);
  return `${hour}hrs ${min}min ${sec}sec ago`;
}

//active class remove:
function removeActiveClass() {
  let buttons = document.getElementsByClassName("active");
  for (let button of buttons) {
    button.classList.remove("active");
  }
}

//load and sort by views:
async function sortByViews() {
  try {
    let res = await fetch("https://openapi.programming-hero.com/api/phero-tube/videos");
    let data = await res.json();
    let sortedVideos = data.videos.sort((a, b) => {
      if (parseFloat(a?.others?.views.split("K")[0]) > parseFloat(b?.others?.views.split("K")[0])) {
        return -1;
      } else if (parseFloat(a?.others?.views.split("K")[0]) < parseFloat(b?.others?.views.split("K")[0])) {
        return 1;
      } else {
        return 0;
      }
    });
    displayAllVideos(sortedVideos);
  } catch(e) {
    console.log(e);
  }
}


//load categories buttons:
async function loadCategories() {
  try {
    let response = await fetch("https://openapi.programming-hero.com/api/phero-tube/categories");
    let data = await response.json();
    displayCategories(data.categories);
  } catch(e) {
    console.log(e);
  }
}

//load all videos:
async function loadAllVideos(search_txt = "") {
  try {
    let res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${search_txt}`);
    let data = await res.json();
    removeActiveClass();
    document.getElementById("btn-all").classList.add("active");
    displayAllVideos(data.videos);
  } catch(e) {
    console.log(e);
  }
}

//load categories videos:
async function loadCategoriesVideos(cat_id) {
  try {
    let res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${cat_id}`);
    let data = await res.json();
    removeActiveClass();
    let clickedBtn = document.getElementById(`btn-${cat_id}`);
    clickedBtn.classList.add("active");
    displayAllVideos(data.category);
  } catch(e) {
    console.log(e);
  }
}

//load video details:
async function loadVideoDetails(vid_id) {
  try {
    let res = await fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${vid_id}`);
    let data = await res.json();
    displayVideoDetails(data.video);
  } catch(e) {
    console.log(e);
  }
}

//display video details:
function displayVideoDetails(video) {
  document.getElementById("video-details").showModal();
  let detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
  <div class="card bg-base-100">
    <figure class="relative">
      <img class="w-full h-[180px] object-cover rounded" src="${video?.thumbnail}" alt="Shoes" />
      <div class="absolute bottom-3 right-3">
        <p class="${video?.others?.posted_date !== "" ? "bg-black text-gray-200 py-1 px-2 text-sm rounded":""}">
        ${video?.others?.posted_date !== "" ? getTimeString(video?.others?.posted_date):""}
        </p>
      </div>
    </figure>
    <div class="card-body px-2">
      <div class="flex items-start gap-4">
        <div>
          <figure>
            <img class="w-[40px] h-[40px] object-cover rounded-full" src="${video?.authors[0]?.profile_picture}" alt="Profile-Picture" />
          </figure>
        </div>
        <div>
          <h3 class="text-lg text-black font-semibold">${video?.title}</h3>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-base text-gray-500">${video?.authors[0]?.profile_name}</h3>
              ${video?.authors[0]?.verified === true ? '<figure><img class="w-[16px] h-[16px]" src="./Assets/Images/verify.png" /></figure>':""}
            </div>
            <p class="text-gray-500 mt-1">${video?.others?.views} views</p>
            <p class="text-gray-500 mt-1">Video Id: ${video?.video_id}</p>
          </div>
        </div>
      </div>
      <p class="text-gray-500 mt-1">${video?.description}</p>
    </div>
  </div>
  `;
}

//display categories buttons:
function displayCategories(categories) {
  let categoryContainer = document.getElementById("category-container");
  categories.forEach((category) => {
    let catDiv = document.createElement("div");
    catDiv.innerHTML = `
    <button id="btn-${category?.category_id}" onclick="loadCategoriesVideos(${category?.category_id})" class="btn btn-sm">${category?.category}</button>
    `;
    categoryContainer.append(catDiv);
  });
}

//display all videos:
function displayAllVideos(videos) {
  let videosContainer = document.getElementById("videos-container");
  videosContainer.innerHTML = "";

  if (videos.length === 0) {
    videosContainer.classList.remove("grid");
    videosContainer.innerHTML = `
    <div class="flex justify-center">
      <div class="w-1/2 text-center">
        <img class="w-[120px] mx-auto" src="./Assets/Images/Error.png" alt="">
        <h2 class="text-xl text-black font-bold mt-4">Oops!!! Sorry, There is no content here!</h2>
      </div>
    </div>
    `;
  } else {
    videosContainer.classList.add("grid");
  }

  videos.forEach((video) => {
    let videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100">
      <figure class="relative">
        <img class="w-full h-[180px] object-cover rounded" src="${video?.thumbnail}" alt="Shoes" />
        <div class="absolute bottom-3 right-3">
          <p class="${video?.others?.posted_date !== "" ? "bg-black text-gray-200 py-1 px-2 text-sm rounded":""}">
          ${video?.others?.posted_date !== "" ? getTimeString(video?.others?.posted_date):""}
          </p>
        </div>
      </figure>
      <div class="card-body px-2">
        <div class="flex items-start gap-4">
          <div>
            <figure>
              <img class="w-[40px] h-[40px] object-cover rounded-full" src="${video?.authors[0]?.profile_picture}" alt="Profile-Picture" />
            </figure>
          </div>
          <div>
            <h3 class="text-lg text-black font-semibold">${video?.title}</h3>
            <div>
              <div class="flex items-center gap-2">
                <h3 class="text-base text-gray-500">${video?.authors[0]?.profile_name}</h3>
                ${video?.authors[0]?.verified === true ? '<figure><img class="w-[16px] h-[16px]" src="./Assets/Images/verify.png" /></figure>':""}
              </div>
              <div class="flex items-center gap-4">
                <p class="text-gray-500 mt-1">${video?.others?.views} views</p>
                <button onclick="loadVideoDetails('${video?.video_id}')" class="text-sm border border-gray-200 text-gray-500 px-2 rounded mt-2 cursor-pointer hover:bg-gray-100">Show Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    videosContainer.append(videoCard);
  });
}

//call load categories:
loadCategories();

//call load all videos:
loadAllVideos();

//search input integration:
document.getElementById("search-input").addEventListener("keyup", function(e) {
  let inputValue = e.target.value;
  loadAllVideos(inputValue);
});
