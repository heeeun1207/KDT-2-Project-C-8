const thumbImages = document.querySelectorAll(".thumb-image");
thumbImages.forEach((image) => {
  image.addEventListener("click", (e) => {
    const altValue = e.target.getAttribute("alt");
    window.location.href = "~~~url~~~";
  });
});
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
  window.location.href = "/";
});