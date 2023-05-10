function register(event) {
  event.preventDefault(); // 기본 동작 막기
  window.location.href = "Submypage.png"; // 페이지 이동

  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  

  // 입력값 유효성 검사
  if (id === "" || name === "" || password === "") {
    alert("모든 항목을 입력해주세요.");
    return;
  }

  // 회원가입 완료 메시지와 함께 페이지 이동
  alert("회원가입이 완료되었습니다.");
  window.location.href = "Submypage.html";
}

