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
            modalText = "추천이 적합하지 않을 수 있습니다. 책임감을 가지고 추천을 눌러주세요! ";
            break;
          case 'section2':
            modalText = '이벤트 진행 도중에 예상치 못한 상황이 발생할 수 있으며, 그로 인해 일정이 변동될 수 있습니다. 이 경우, 사전에 공지를 하고 최대한 빠르게 조치를 취할 예정입니다.';
            break;
          case 'section3':
            modalText = "환경 지킴이의 내용은 일반적인 분리수거 방법에 따른 지침이며, 지역별로 분리수거 규정이 상이할 수 있습니다. 따라서, 지역의 분리수거 규정을 확인하여 지침을 따르는 것이 좋습니다. 분리배출 정보와 마크가 일치하는지 확인하여 올바르게 분리배출하는 것이 중요합니다. 이를 통해 재활용품의 품질을 유지하고, 환경을 보호할 수 있습니다.";
            break;
          case 'section4':
            modalText = "일회용품 대신 재사용 가능한 용기를 사용하여 환경을 보호하고, 지속 가능한 생활을 지향하는 것이 좋습니다. 우리 모두가 함께 노력하여 지구를 더욱 건강하게 지키도록 합시다.";
            break;
          case 'section5':
            modalText = "분리배출이란 재활용 가능한 물품, 음식물, 그리고 일반 쓰레기를 각각 따로 분리하여 배출하는 것을 말합니다. 이를 통해 재활용률을 높이고, 환경을 보호할 수 있습니다";
            break;
          case 'section6':
            modalText = '내용이 없습니다.';
            break;
          default:
            modalText = '내용이 없습니다.';
        }
        
        modalContent.innerHTML = modalText;
        modal.style.display = 'block';
      });
    });
    
    modal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  });


