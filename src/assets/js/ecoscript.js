document.addEventListener('DOMContentLoaded', function() {
  var sections = document.querySelectorAll('section');
  var modal = document.querySelector('.modal');
  var modalContent = document.querySelector('.modal-content');

  sections.forEach(function(section) {
    section.addEventListener('click', function() {
      var modalText;
      var sectionId = section.getAttribute('id');
      switch (sectionId) {
        case 'section1':
          modalText = `
            <img src="home.png" style="width: 200px; height: 200px;">
            <p style="color: blue; font-size: 18px;">
              일회용 컵으로 인해 수많은 쓰레기가 지구에 쌓이고 있어요!
            </p>
            <br>
            <p style="color: green; font-size: 16px;">
              일회용 컵 사용을 줄여보세요!
            </p>
            <br>
            <p style="color: black; font-size: 14px;">
              지구를 지키고 미래를 위해, 텀블러 사용해요!
            </p>
            <br>
            <p style="color: purple; font-size: 14px;">
              일회용 컵 대신 지구 친화적인 선택을 해보세요!
            </p>`;
          break;

        case 'section2':
          modalText = `
            <p style="color: black; font-size: 16px;">
              인공세제를 사용하면, 물과 자연환경을 오염시킬 수 있어요!
            </p>
            <br>
            <p style="color: green; font-size: 14px;">
              물과 자원을 아껴주는 천연수세미 사용해 봅시다!
            </p>
            <br>
            <p style="color: purple; font-size: 14px;">
              우리 함께 지구를 지켜봅시다!
            </p>`;
          break;

        case 'section3':
          modalText = `
            <p style="color: black; font-size: 16px;">
              라벨을 제거하지 않았다면, 재활용이 불가능하게 될 수 있어요 아셨나요?
            </p>
            <br>
            <p style="color: green; font-size: 14px;">
              작은 실처럼 시작해 더 나은 지구를 만들어요!
            </p>
            <br>
            <p style="color: purple; font-size: 14px;">
              PET 라벨을 떼고 분리수거 해봅시다.
            </p>`;
          break;

        default:
          modalText = '내용이 곧 업데이트될 예정입니다 :)';
      }

      modalContent.innerHTML = modalText;
      modal.style.display = 'block';
    });
  });

  modal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
});
