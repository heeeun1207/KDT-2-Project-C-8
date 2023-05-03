let images = ['us.png', 'homegreen.png', 'profile.png'];
let currentImgIndex = 0;
let asideImg = document.querySelector('.us-image');

function changeAsideImg() {
  currentImgIndex++;
  if (currentImgIndex > images.length - 1) {
    currentImgIndex = 0;
  }
  asideImg.src = images[currentImgIndex];
}
setInterval(changeAsideImg, 3000);