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

    // 선택된 시/도에 해당하는 군/구 정보를 가져와서 콤보박스에 추가
    // 예시 데이터: {"서울특별시": ["강남구", "서초구", ...], "경기도": ["수원시", "용인시", ...], ...}
    var gunguList = getGunguList(sidoSelect.value);
    gunguList.forEach(function (gungu) {
      gunguSelect.innerHTML += "<option value='" + gungu + "'>" + gungu + "</option>";
    });
  }
}

function changeGungu() {
  var sidoSelect = document.getElementById("sido");
  var gunguSelect = document.getElementById("gungu");
  var dongSelect = document.getElementById("dong");

  dongSelect.innerHTML = "<option value=''>선택 안 함</option>";
  dongSelect.disabled = true;

  if (gunguSelect.value) {
    dongSelect.disabled = false;

    // 선택된 군/구에 해당하는 동 정보를 가져와서 콤보박스에 추가
    // 예시 데이터: {"강남구": ["개포동", "논현동", ...], "서초구": ["반포동", "양재동", ...], ...}
    var dongList = getDongList(sidoSelect.value, gunguSelect.value);
    dongList.forEach(function (dong) {
      dongSelect.innerHTML += "<option value='" + dong + "'>" + dong + "</option>";
    });
  }
}


