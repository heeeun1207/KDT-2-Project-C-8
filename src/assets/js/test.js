const answers = ["음식물 쓰레기","음식물 쓰레기","일반 쓰레기","음식물 쓰레기","일반 쓰레기","음식물 쓰레기", "일반 쓰레기", "위험성 폐기물","대형가전제품","일반 쓰레기"];

function checkAnswers() {
  let total = 0;
  const questions = document.querySelectorAll('.question');
  questions.forEach((question, index) => {
    const answer = question.querySelector('input[type="radio"]:checked').value;
    if (answer === answers[index]) {
      total++;
    }
  });

  document.getElementById('total').textContent = `정답: ${total}개`;

  let praise;
  if (total === 10) { 
    praise = "당신을 환경 지킴이로 인정합니다!";
  } else if (total >= 7) {
    praise = "대단해요! 모든 문제를 거의 다 맞추셨네요!";
  } else if (total >= 5) {
    praise = "좋아요! 잘 하셨습니다!";
  } else if (total >= 2) {
    praise = "조금 더 분발하세요!";
  } else {
    praise = "아쉽게도 많이 틀리셨네요. 다시 도전해보세요!";
  }
  alert(praise);
}

const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
  const inputs = question.querySelectorAll('input[type="radio"]');
  inputs.forEach((input) => {
    input.addEventListener('click', checkAnswers);
  });
});
