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

    gunguSelect.addEventListener('change', function() {
      var dongList = getDongList(sidoSelect.value, gunguSelect.value);
      dongSelect.innerHTML = "<option value=''>선택 안 함</option>";
      if (dongList.length > 0) {
        dongSelect.disabled = false;
        dongList.forEach(function (dong) {
          dongSelect.innerHTML += "<option value='" + dong + "'>" + dong + "</option>";
        });
      }
    });
  }
}


  function getGunguList(sido) {
    let gunguList = [];
  
    switch (sido) {
      case '서울특별시':
        gunguList = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];
        break;
      case '대전광역시':
        gunguList =['서구','중구','동구','대덕구']
      break;
        default:gunguList=`내용이없습니다`;
}}

function getDongList(sido, gungu) {
  // sido, gungu 값에 따른 dong 목록을 반환하는 코드
}

