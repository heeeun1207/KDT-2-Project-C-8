const sidoElement = document.getElementById('sido');
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
      image.style.width = `295px`;
      image.style.height = `300px`;
      image.style.display = 'block';
      image.style.margin = 'auto';
    };
  };
  reader.readAsDataURL(file);
});



const gugunList = {
  '서울특별시': [],
  '경기도': [],
  '인천광역시': [],
  '강원도': [],
  '충청북도': [],
  '충청남도': [],
  '대전광역시': [],
  '경상북도': [],
  '경상남도': [],
  '전라북도': [],
  '전라남도': [],
  '대구광역시': [],
  '부산광역시': [],
  '울산광역시': [],
  '광주광역시': [],
  '제주특별자치도': []
};

function changeSido() {
  const selectedSido = sidoElement.value;
  const gugunElement = document.getElementById('gugun');
  gugunElement.innerHTML = '<option value="">시,도를 선택하세요</option>';
  if (selectedSido) {
    const guguns = gugunList[selectedSido];
    for (let i = 0; i < guguns.length; i++) {
      const gugun = guguns[i];
      gugunElement.innerHTML += `<option value="${gugun}">${gugun}</option>`;

// 최종적으로 구/군 콤보박스를 화면에 표시
document.querySelector('#gugun').appendChild(gugunElement);
    }}};