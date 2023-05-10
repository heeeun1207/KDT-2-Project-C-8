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
          `<br>
          플라스틱류 O,
          <br><br>
          일반쓰레기 X
          <br><br>
          ⇒ 플라스틱 용기는 재활용이 가능합니다.
          <br><br> <br>단, 내부에 남아있는 음식물 등이 붙어있으면 재활용이 어렵기 때문에, <br>
          씻어서 플라스틱류로 분리배출하세요 !<br>
          <br>
          예시)<br>
          - 페트병<br>
          - 물병<br>
          - 우유용기`;
          break;
        
        
        case 'section2':
          modalText = 
          `일반쓰레기 X, 유리병류 X ,
          <br><br>
          대형폐기물 O 
          <br><br><br>
          ⇒ 유리창문은 유리병류와 다른 처리 과정을 거칩니다.
          <br>
          그러므로 대형 폐기물로 분리배출해야 합니다. `;
          break;
        case 'section3':
          modalText = 
          `일반쓰레기 X, 종이류 X,
          <br><br>
          소각가능 쓰레기 O
          <br><br>
          ⇒ 식품용 종이에는 기름이 묻어있을 수 있기 때문에 종이류로 분리배출하면 재활용이 어렵습니다. 
          이 경우에는 소각가능 쓰레기로 분리배출해야 합니다.`;
          break;
        case 'section4':
          modalText = 
          `일반쓰레기 X, 유해 폐기물 O
          <br><br>
          ⇒ 페인트통은 폐기물 처리 시 특별한 처리가 필요한 유해 폐기물에 해당합니다.
          따라서, 유해 폐기물로 분리배출해야 합니다.!`
          break;
        case 'section5':
          modalText =
          `일반쓰레기 X, 재활용 폐기물 O
          <br><br>
          ⇒ 배터리는 재활용이 가능한 폐기물입니다. 따라서,
          재활용 폐기물로 분리배출해야 합니다.`;
          break;
        case 'section6':
          modalText = 
          `일반쓰레기 X, 플라스틱 용기류 O
          <br><br>
          ⇒ 플라스틱 물병 뚜껑은 재활용이 가능한 플라스틱 용기입니다. 
          따라서, 플라스틱 용기류로 분리배출해야 합니다.`;
          case 'section7':
          modalText = 
          `일반쓰레기 X, 음식물쓰레기 O
          <br><br>
          ⇒ 새우 껍데기는 음식물쓰레기로 분리배출해야 합니다. 
          그러나, 일부 지자체에서는 새우 껍데기를 개별적으로 수거하고, 
          음식물쓰레기와 분리해서 처리하는 경우도 있으니 해당 지역의 분리배출 규칙을 확인해보세요.`;
          break;
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
