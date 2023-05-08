
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
            modalText = "일회용 컵으로 인해 수많은 쓰레기가 지구에 쌓이고 있어요! 일회용 컵 사용을 줄여보세요 !지구를 지키고 미래를 위해, 텀블러 사용해요! 일회용 컵 대신 지구 친화적인 선택을 해보세요!";
            break;
          case 'section2':
            modalText = '천연수세미 사용 설명입니다.';
            break;
          case 'section3':
            modalText = 'PET 라벨 떼기 방법입니다.';
            break;
          case 'section4':
            modalText = '장바구니 사용 방법입니다.';
            break;
          case 'section5':
            modalText = '박스 사용 방법입니다.';
            break;
          case 'section6':
            modalText = '온도 조절 방법입니다.';
            break;
          default:
            modalText = '모달 내용이 없습니다.';
        }
        
        modalContent.innerHTML = modalText;
        modal.style.display = 'block';
      });
    });
    
    modal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  });
