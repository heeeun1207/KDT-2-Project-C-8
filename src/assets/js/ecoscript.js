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
            <p style="color: black; font-size: 50px;">
            텀블러 사용하기
            </p>
            <br>
            <img src="plasticcup.png" style="width: 800px; height: 500px;">
            <p style="color: black; font-size: 50px;">
            다 쓴 일회용 컵은 어디로 갈까요?
            </p>
            <br>
            <p style="color: black; font-size: 30px;">
            소각하거나 매립 시 심각한 토양 오염의 요인이 돼요.
            </p>
            <br>
            <p style="color: black; font-size: 48px;">
            그렇다면 재활용률은 얼마나 될까요?
            </p>
            <br>
            <p style="color: black; font-size: 30px;">
            일회용 플라스틱 컵의 재활용률은 약 5%, 
            <br>
            일회용 종이 컵의 재활용률은 약 1%에 불과해요.
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
