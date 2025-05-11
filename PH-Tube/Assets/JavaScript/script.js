//Time Formation: hour-min-sec
function getTimeString(times) {
  let hour = parseInt(times / 3600);
  let remainingTimes = parseInt(times % 3600);
  let mins = parseInt(remainingTimes / 60);
  let sec = parseInt(remainingTimes % 60);
  return `${hour}hrs ${mins}mins ${sec}sec ago`;
}

//Active Button Remove:
function removeActiveClass() {
  let buttons = document.getElementsByClassName("active");
  for (let button of buttons) {
    button.classList.remove("active");
  }
}

//Load Categories buttons:
function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((e) => console.log(e));
}

//Load All Videos:
function loadAllVideos(search_text = "") {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${search_text}`)
    .then((res) => res.json())
    .then((data) => {
      removeActiveClass();
      document.getElementById("btn-all").classList.add("active");
      displayVideos(data.videos);
    })
    .catch((e) => console.log(e));
}

//Load Category Videos:
function loadCategoryVideos(category_id) {
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${category_id}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      removeActiveClass();
      let clickedButton = document.getElementById(`btn-${category_id}`);
      clickedButton.classList.add("active");
      displayVideos(data.category);
    })
    .catch(error => console.log(error));
}

//Load Video Details:
function loadVideoDetails(video_id) {
  let url = `https://openapi.programming-hero.com/api/phero-tube/video/${video_id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayVideoDetails(data.video))
    .catch(e => console.log(e));
}

//Display Video Details:
function displayVideoDetails(video) {
  let detailsContainer = document.getElementById("details-container");
  document.getElementById("video-details").showModal();
  detailsContainer.innerHTML = `
  <div class="card bg-base-100">
    <figure class="relative">
      <img class="w-full h-[180px] object-cover rounded" src="${video?.thumbnail}" alt="Shoes" />
      <div class="absolute bottom-3 right-3">
        <p class="${video?.others?.posted_date !== "" ? "bg-black text-gray-200 py-1 px-2 text-sm rounded":""}">
          ${video?.others?.posted_date !== "" ? getTimeString(video.others.posted_date):""}
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

//Display Categories:
function displayCategories(categories) {
  let categoryContainer = document.getElementById("category-container");

  categories.forEach((category) => {
    let categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button id="btn-${category.category_id}" onclick="loadCategoryVideos(${category.category_id})" class="btn btn-sm">${category.category}</button>
    `;
    categoryContainer.append(categoryDiv);
  });
}

//Display All Videos:
function displayVideos(videos) {
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
    let {profile_name, profile_picture, verified} = video.authors[0];
    let {title, thumbnail, others:{posted_date, views},} = video;
    let videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100">
      <figure class="relative">
        <img class="w-full h-[180px] object-cover rounded" src="${thumbnail}" alt="Shoes" />
        <div class="absolute bottom-3 right-3">
          <p class="${posted_date !== "" ? "bg-black text-gray-200 py-1 px-2 text-sm rounded":""}">
          ${posted_date !== "" ? getTimeString(posted_date):""}
          </p>
        </div>
      </figure>
      <div class="card-body px-2">
        <div class="flex items-start gap-4">
          <div>
            <figure>
              <img class="w-[40px] h-[40px] object-cover rounded-full" src="${profile_picture}" alt="Profile-Picture" />
            </figure>
          </div>
          <div>
            <h3 class="text-lg text-black font-semibold">${title}</h3>
            <div class="">
              <div class="flex items-center gap-2">
                <h3 class="text-base text-gray-500">${profile_name}</h3>
                ${verified === true ? '<figure><img class="w-[16px] h-[16px]" src="./Assets/Images/verify.png" /></figure>':""}
              </div>
              <div class="flex items-center gap-4">
                <p class="text-gray-500 mt-1">${views} views</p>
                <button onclick="loadVideoDetails('${video.video_id}')" class="text-sm border border-gray-200 text-gray-500 px-2 rounded mt-2 cursor-pointer hover:bg-gray-100">Show Details</button>
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

//Call Load Categories:
loadCategories();

//Call Load All Videos:
loadAllVideos();

//Search functionality integration:
document.getElementById("search-input").addEventListener("keyup", function(e) {
  let inputValue = e.target.value;
  loadAllVideos(inputValue);
});
