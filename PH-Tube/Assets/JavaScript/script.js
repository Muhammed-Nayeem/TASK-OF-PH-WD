//Time Formation: hour-min-sec
function getTimeString(times) {
  let hour = parseInt(times / 3600);
  let remainingTimes = parseInt(times % 3600);
  let mins = parseInt(remainingTimes / 60);
  let sec = parseInt(remainingTimes % 60);
  return `${hour}hrs ${mins}mins ${sec}sec ago`;
}

//Load Categories buttons:
function loadCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((e) => console.log(e));
}

//Load All Videos:
function loadAllVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayAllVideos(data.videos))
    .catch((e) => console.log(e));
}

//Display Categories:
function displayCategories(categories) {
  let categoryContainer = document.getElementById("category-container");

  categories.forEach((category) => {
    let categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm">${category.category}</button>
    `;
    categoryContainer.append(categoryDiv);
  });
}

//Display All Videos:
function displayAllVideos(videos) {
  let videosContainer = document.getElementById("videos-container");
  videosContainer.innerHTML = "";

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
              <p class="text-gray-500 mt-1">${views} views</p>
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
