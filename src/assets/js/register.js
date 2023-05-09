function register() {
  var id = document.getElementById("id").value;
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;

  // 입력값 유효성 검사
  if (id === "" || name === "" || password === "") {
    alert("모든 항목을 입력해주세요.");
    return;
  }

  //코드 작성 필요 
  alert("회원가입이 완료되었습니다.");
}
