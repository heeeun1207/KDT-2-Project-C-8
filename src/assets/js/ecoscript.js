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
          <p style="color: black; font-size: 50px;">
          천연 수세미 사용하기
          </p>
          <br>
          <img src="sponge.jpeg" style="width: 800px; height: 500px;">
          <p style="color: black; font-size: 50px;">
          아크릴 수세미의 진실 아시나요?
          </p>
          <br>
          <p style="color: black; font-size: 30px;">
          설거지 과정 중 마찰을 통해 아주 작은 미세플라스틱이 발생해요.
          </p>
          <br>
          <p style="color: black; font-size: 48px;">
          한번의  설거지에 약 1900여개의
          <br>
          미세 플라스틱 발생!
          </p>
          <br>
          <p style="color: black; font-size: 30px;">
          (출처 : 한국분석과학연구소)
          <br>
          <br>
          이제는 천연 수세미로 설거지해요!
          </p>`;
          break;

        case 'section3':
          modalText = `
          <p style="color: black; font-size: 50px;">
          텀블러 사용하기
          </p>
          <br>
          <img src="nolabel.jpeg" style="width: 800px; height: 500px;">
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

          case 'section4':
            modalText = `
            <p style="color: black; font-size: 50px;">
            텀블러 사용하기
            </p>
            <br>
            <img src="plasticbag.jpeg" style="width: 800px; height: 500px;">
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

            case 'section5':
              modalText = `
              <p style="color: black; font-size: 50px;">
              텀블러 사용하기
              </p>
              <br>
              <img src="dirtybox.jpeg" style="width: 800px; height: 500px;">
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

              case 'section6':
                modalText = `
                <p style="color: black; font-size: 50px;">
                텀블러 사용하기
                </p>
                <br>
                <img src="bear.jpeg" style="width: 800px; height: 500px;">
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
