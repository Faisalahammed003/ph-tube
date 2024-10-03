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

//!Create DisplayCatagories

//display button--------->

const display = (categories) => {
  const categoriesContainer = document.getElementById("categories");
  categories.forEach((item) => {
    console.log(item);

    //<--Creat button-->
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    categoriesContainer.append(button);
  });
};

//Display Videos
const displayVideo = (videos) => {
  const videoContainer = document.getElementById("video");
  videos.forEach((video) => {
    console.log(video);

    // creat Video-------->
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `  <figure class="h-[200px]">
    <img class="h-full w-full object-cover"
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>`;
    videoContainer.append(card);
  });
};

//!call Funcation

load();
videoLoad();
