let counter = 0;
let clicked = false;
function incrementCounter() {
  if (!clicked) { 
    counter++; 
    document.getElementById("counter").innerText = counter; 
  }};
  const imageInput = document.querySelector('#image-input');
const imagePreview = document.querySelector('#image-preview');

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const image = new Image();
    image.src = reader.result;

    image.onload = () => {
      const imageWidth = image.width;
      const imageHeight = image.height;
      const aspectRatio = imageWidth / imageHeight;
      const maxWidth = window.innerWidth * 0.4;
      const maxHeight = window.innerHeight * 0.4;
      let width = maxWidth;
      let height = maxHeight / aspectRatio;

      if (height > maxHeight) {
        height = maxHeight;
        width = height * aspectRatio;
      }
      imagePreview.innerHTML = '';
      imagePreview.appendChild(image);
      // image.style.width = `${width}px`;
      // image.style.height = `${height}px`;
      image.style.width = `300px`;
      image.style.height = `300px`;
      image.style.display = 'block';
      image.style.margin = 'auto';
    };
  };
  reader.readAsDataURL(file);
});
