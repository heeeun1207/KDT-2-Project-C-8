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
}

const questions = document.querySelectorAll('.question');
questions.forEach((question) => {
  const inputs = question.querySelectorAll('input[type="radio"]');
  inputs.forEach((input) => {
    input.addEventListener('click', checkAnswers);
  });
});
