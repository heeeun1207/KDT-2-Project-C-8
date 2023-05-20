
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
            modalText = 
            `일회용 컵으로 인해 수많은 쓰레기가 지구에 쌓이고 있어요!
            <br> <br>
            일회용 컵 사용을 줄여보세요 !
            <br> <br>
            지구를 지키고 미래를 위해, 텀블러 사용해요!
            <br> <br>
            일회용 컵 대신 지구 친화적인 선택을 해보세요!`;
            break;
          case 'section2':
            modalText = 
            `인공세제를 사용하면, 물과 자연환경을 오염시킬 수 있어요!
            <br> <br>
            물과 자원을 아껴주는 천연수세미 사용해 봅시다! 
            <br> <br>
            우리 함께 지구를 지켜봅시다! `;
            break;
          case 'section3':
            modalText = 
            `라벨을 제거하지 않았다면, 
            <br>
            재활용이 불가능하게 될 수 있어요 아셨나요? 
            <br> <br>
            작은 실처럼 시작해 더 나은 지구를 만들어요! 
            <br> <br>
            PET 라벨을 떼고 분리수거 해봅시다.`;
            break;
          case 'section4':
            modalText = 
            `작은 노력이 모여 큰 변화를 만들어요! 
            <br> <br> <br>
            장바구니 사용으로 일회용 
            <br>
            비닐봉지를 줄여봅시다!`
            break;
          case 'section5':
            modalText =
            `박스의 스티커는 깨끗하게 정리해주세요 ! 
            <br> <br>
            폐기물 처리가 어렵습니다 !     
            <br> <br>       
            박스를 깨끗하게 분리수거를 해서 새로운 가치를 만들어봅시다!`;
            break;
          case 'section6':
            modalText = 
            `계속 작동시키고 있는 당신!  에너지 낭비와 환경오염에 기여하고 있답니다.
            <br> <br>
            온도를 적절하게 조절해 모두 함께 에너지를 아껴보세요!
            <br> <br>             
            작은 노력으로 지구 환경을 보호해봅시다!`;
            
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
