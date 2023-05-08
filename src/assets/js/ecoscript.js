function createNewPage(sectionNumber) {
  var pageTitle, pageContent;
  if (sectionNumber == 1) {
    pageTitle = "텀블러 사용하기!";
    pageContent = "일회용 컵으로 인해 수많은 쓰레기가 지구에 쌓이고 있어요!\p일회용 컵 사용을 줄여보세요 !\n지구를지키고 미래를 위해, 텀블러 사용해요!\n일회용 컵 대신 지구 친화적인 선택을 해보세요!";
  } else if (sectionNumber == 2) {
    pageTitle = "천연수세미 사용";
    pageContent = "인공세제를 사용하면, 물과 자연환경을 오염시킬 수 있어요! 물과 자원을 아껴주는 천연수세미 사용해 봅시다! 지구를 우리 함께 지켜봅시다! ";
  } else if (sectionNumber == 3) {
    pageTitle = "PET 라벨 떼기";
    pageContent = "This is section 3.";
  } else if (sectionNumber == 4) {
    pageTitle = "장바구니";
    pageContent = "This is section 4.";
  } else if (sectionNumber == 5) {
    pageTitle = "박스는 깨끗하게 분리수거";
    pageContent = "This is section 5.";
  } else if (sectionNumber == 6) {
    pageTitle = "에어컨 & 난방 온도 조절하기";
    pageContent = "This is section 6.";
  } else if (sectionNumber == 7) {
    pageTitle = "Section 3 Page";
    pageContent = "This is section 7.";
  } else if (sectionNumber == 8) {
    pageTitle = "Section 3 Page";
    pageContent = "This is section 8.";
  }

  var newPage = window.open('newpage.html', '_blank', 'width=390,height=844');
  newPage.document.write('<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>' + pageTitle + '</title></head><body>' + pageContent + '</body></html>');
}
