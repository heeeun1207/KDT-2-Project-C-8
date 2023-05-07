const answers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
function checkAnswers() {
  let total = 0;
  const questions = document.querySelectorAll('.question');
  questions.forEach((question, index) => {
    const answer = parseInt(question.querySelector('input[type="radio"]:checked').value);
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