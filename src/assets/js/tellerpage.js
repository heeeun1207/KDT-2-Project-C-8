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
      image.style.width = `250px`;
      image.style.height = `260px`;
      image.style.display = 'block';
      image.style.margin = 'auto';
    };
  };
  reader.readAsDataURL(file);
});





function changeSido() {
  var sidoSelect = document.getElementById("sido");
  var gunguSelect = document.getElementById("gungu");
  var dongSelect = document.getElementById("dong");

  gunguSelect.innerHTML = "<option value=''>선택 안 함</option>";
  dongSelect.innerHTML = "<option value=''>선택 안 함</option>";
  gunguSelect.disabled = true;
  dongSelect.disabled = true;

  if (sidoSelect.value) {
    gunguSelect.disabled = false;

 
    var gunguList = getGunguList(sidoSelect.value);
    gunguList.forEach(function (gungu) {
      gunguSelect.innerHTML += "<option value='" + gungu + "'>" + gungu + "</option>";
    });
  }
}

