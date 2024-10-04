// !Date Funcatuion

function gettingTime(time) {
  const hour = parseInt(time / 3600);
  let remaningSecond = time % 3600;
  const munite = parseInt(time / remaningSecond);
  remaningSecond = remaningSecond % 60;
  return `${hour} Hour ${munite} Minute ${remaningSecond} Second ago`;
}

//!create loadCatagories

//button add--->

const load = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => display(data.categories))
    .catch((error) => console.log(error));
};

//video Add----->

const videoLoad = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideo(data.videos))
    .catch((error) => console.log(error));
};

// categoryLoad

const categoryLoad = (id) => {
  // alert(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => displayVideo(data.category))
    .catch((error) => console.log(error));
};

//!Create DisplayCatagories

//display button--------->

function display(categories) {
  const categoriesContainer = document.getElementById("categories");
  categories.forEach((item) => {
    console.log(item);

    //<--Creat button-->
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `<button id="btn-${item.category_id}" onclick="categoryLoad(${item.category_id})" class="btn category-btn">${item.category}</button>`;

    categoriesContainer.append(buttonContainer);
  });
}

//Display Videos
const displayVideo = (videos) => {
  const videoContainer = document.getElementById("video");
  videoContainer.innerHTML = "";
  if (videos.length == 0) {
    videoContainer.classList.remove("grid");
    videoContainer.innerHTML = `<div class="min-h[300px] flex flex-col justify-center items-center"><img src="./photo/Icon.png" alt="">
        <h2 class="text-center text-xl font-bold">No Content Here in this Category</h2>
    </div>`;
  } else {
    videoContainer.classList.add("grid");
  }
  videos.forEach((video) => {
    console.log(video);

    // creat Video-------->
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `<figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src="${video.thumbnail}"
      alt="Shoes" />
      ${
        video.others.posted_date?.length == 0
          ? ""
          : `<span class="absolute right-2 bottom-2 bg-black text-white text-xs rounded p-1">${gettingTime(
              video.others.posted_date
            )}</span>`
      }
        
  </figure>
  <div class="px-0 py-2 flex gap-2">
      <div><img class="w-10 h-10 rounded-full object-cover" src=${
        video.authors[0].profile_picture
      }></div>
        <div>
            <h2 class="font-bold">${video.title}</h2>
            <div class="flex items-center gap-2">
            <p>${video.authors[0].profile_name}</p>
            ${
              video.authors[0].verified === true
                ? `<img class="w-5" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" alt="">`
                : ""
            }
            <div/>
            <p></p>
        </div>
  </div>`;
    videoContainer.append(card);
  });
};

//!call Funcation

load();
videoLoad();

/* {
  "status": true,
  "message": "successfully fetched all the videos",
  "videos": [
    {
      "category_id": "1001",
      "video_id": "aaaa",
      "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
      "title": "Shape of You",
      "authors": [
        {
          "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
          "profile_name": "Olivia Mitchell",
          "verified": ""
        }
      ],
      "others": {
        "views": "100K",
        "posted_date": "16278"
      },*/
