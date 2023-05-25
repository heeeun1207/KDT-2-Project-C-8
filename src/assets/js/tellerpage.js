let likeCounter = 0;
let dislikeCounter = 0;
let likeClicked = false;
let dislikeClicked = false;

const imageInput = document.querySelector('#image-input');
const imagePreview = document.querySelector('#image-preview');

let slideIndex = 1;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function incrementCounter() {
  if (!likeClicked) {
    likeCounter++;
    document.getElementById("like-counter").textContent = likeCounter;
    likeClicked = true;
  }
}

function incrementCounterMinus() {
  if (!dislikeClicked) {
    dislikeCounter++;
    document.getElementById("dislike-counter").textContent = dislikeCounter;
    dislikeClicked = true;
  }
}

imageInput.addEventListener('change', () => {
  if (!likeClicked && !dislikeClicked) {
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

        
        const slideElement = document.createElement('div');
        slideElement.classList.add('slide');
        slideElement.appendChild(image);
        imagePreview.innerHTML = ''; // Clear previous slides
        imagePreview.appendChild(slideElement);

        //다음버튼 
        const prevButton = document.createElement('button');
        prevButton.textContent = '이전';
        prevButton.addEventListener('click', () => plusSlides(-1));
        const nextButton = document.createElement('button');
        nextButton.textContent = '다음';
        nextButton.addEventListener('click', () => plusSlides(1));

        
        imagePreview.appendChild(prevButton);
        imagePreview.appendChild(nextButton);

        showSlides(slideIndex);

        // 버튼 , 이미지 
        const container = document.createElement('div');
        container.classList.add('image-container');
        container.style.maxWidth = `${maxWidth}px`;
        container.style.margin = 'auto';

        // 버튼 
        const likeButton = document.createElement('button');
        likeButton.textContent = '👍';
        likeButton.addEventListener('click', incrementCounter);
        const dislikeButton = document.createElement('button');
        dislikeButton.textContent = '👎';
        dislikeButton.addEventListener('click', incrementCounterMinus);

        // 추천 비추천
        const likeCounterElement = document.createElement('span');
        likeCounterElement.id = 'like-counter';
        likeCounterElement.textContent = likeCounter;
        const dislikeCounterElement = document.createElement('span');
        dislikeCounterElement.id = 'dislike-counter';
        dislikeCounterElement.textContent = dislikeCounter;

        
        container.appendChild(likeButton);
        container.appendChild(likeCounterElement);
        container.appendChild(dislikeButton);
        container.appendChild(dislikeCounterElement);

        
        imagePreview.appendChild(container);

        // 다운로드하기
        const downloadButton = document.createElement('a');
        downloadButton.href = reader.result;
        downloadButton.download = 'image.png';
        downloadButton.textContent = '사진 다운로드하기';
        downloadButton.classList.add('download-button');
        imagePreview.appendChild(downloadButton);
      };
    };
    reader.readAsDataURL(file);
  }
});


// // 동네 선택하기 
// function changeSido() {
//   var sidoSelect = document.getElementById("sido");
//   var gunguSelect = document.getElementById("gungu");
//   var dongSelect = document.getElementById("dong");

//   gunguSelect.innerHTML = "<option value=''>선택 안 함</option>";
//   dongSelect.innerHTML = "<option value=''>선택 안 함</option>";
//   gunguSelect.disabled = true;
//   dongSelect.disabled = true;

//   if (sidoSelect.value) {
//     gunguSelect.disabled = false;
//     var gunguList = getGunguList(sidoSelect.value);
//     gunguList.forEach(function (gungu) {
//       gunguSelect.innerHTML += "<option value='" + gungu + "'>" + gungu + "</option>";
//     });

//     gunguSelect.addEventListener('change', function() {
//       var dongList = getDongList(sidoSelect.value, gunguSelect.value);
//       dongSelect.innerHTML = "<option value=''>선택 안 함</option>";
//       if (dongList.length > 0) {
//         dongSelect.disabled = false;
//         dongList.forEach(function (dong) {
//           dongSelect.innerHTML += "<option value='" + dong + "'>" + dong + "</option>";
//         });
//       }
//     });
//   }
// }


//   function getGunguList(sido) {
//     let gunguList = [];
  
//     switch (sido) {
//       case '서울특별시':
//         gunguList = ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'];
//         break;
//       case '대전광역시':
//         gunguList =['서구','중구','동구','대덕구']
//       break;
//         default:gunguList=`내용이없습니다`;
// }}

// function getDongList(sido, gungu) {
//   // sido, gungu 값에 따른 dong 목록을 반환하는 코드
// }

