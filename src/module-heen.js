const module_heen_1 = "module_heen_1";
let currentImgIndex = 0;
const images = ["plogging.png", "earthday.png", "storereduce.png"];
const asideImg = document.getElementById("aside-image");

function changeAsideImg() {
  currentImgIndex++;
  if (currentImgIndex > images.length - 1) {
    currentImgIndex = 0;
  }
  asideImg.src = images[currentImgIndex];
}

export { module_heen_1 };


