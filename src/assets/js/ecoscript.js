
  // 모달 요소 가져오기
  const modal = document.getElementById("modal");

  // 각 섹션 요소 가져오기
  const section1 = document.getElementById("section1");
  const section2 = document.getElementById("section2");
  const section3 = document.getElementById("section3");
  const section4 = document.getElementById("section4");
  const section5 = document.getElementById("section5");
  const section6 = document.getElementById("section6");

  // 각 섹션 요소를 클릭하면 모달을 띄우는 함수
  section1.addEventListener("click", () => {
    modal.style.display = "block";
  });
  section2.addEventListener("click", () => {
    modal.style.display = "block";
  });
  section3.addEventListener("click", () => {
    modal.style.display = "block";
  });
  section4.addEventListener("click", () => {
    modal.style.display = "block";
  });
  section5.addEventListener("click", () => {
    modal.style.display = "block";
  });
  section6.addEventListener("click", () => {
    modal.style.display = "block";
  });

  // 모달 외부를 클릭하면 모달을 닫는 함수
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }



    