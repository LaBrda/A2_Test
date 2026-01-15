const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const startScreen = document.getElementById('start-screen');
const testScreen = document.getElementById('test-screen');
const resultScreen = document.getElementById('result-screen');
const totalEl = document.getElementById('total');

const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');
const scoreText = document.getElementById('score');
const percentageText = document.getElementById('percentage');
const passfailText = document.getElementById('passfail');
const reviewDiv = document.getElementById('review');

let selected;
let currentQ = 0;
let score = 0;
let chosenQuestions = [];

totalEl.textContent = 30;

startBtn.addEventListener('click', startTest);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartTest);

function startTest() {
  // shuffle a vezmi prvních 30
  chosenQuestions = allQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, 30);
  startScreen.classList.add('hidden');
  testScreen.classList.remove('hidden');
  currentQ = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = chosenQuestions[currentQ];
  questionNumber.textContent = `Otázka ${currentQ + 1} / ${chosenQuestions.length}`;
  questionText.textContent = q.question;
  answersDiv.innerHTML = '';
  q.answers.forEach((txt, i) => {
    const btn = document.createElement('button');
    btn.textContent = txt;
    btn.classList.add('answer-btn');
    btn.addEventListener('click', () => selectAnswer(i, btn));
    answersDiv.appendChild(btn);
  });
  selected = null;
}

function selectAnswer(i, btn) {
  selected = i;
  document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function nextQuestion() {
  if (selected === null) {
    alert("Vyber odpověď!");
    return;
  }
  if (selected === chosenQuestions[currentQ].correct) {
    score++;
  }
  currentQ++;
  if (currentQ < chosenQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  testScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  scoreText.textContent = `Správně: ${score} z ${chosenQuestions.length}`;
  const perc = Math.round((score / chosenQuestions.length) * 100);
  percentageText.textContent = `Procenta: ${perc}%`;
  passfailText.textContent = perc >= 75 ? "PROŠEL ✅" : "NEPROŠEL ❌";

  reviewDiv.innerHTML = "<h3>Přehled chyb:</h3>";
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const startScreen = document.getElementById('start-screen');
const testScreen = document.getElementById('test-screen');
const resultScreen = document.getElementById('result-screen');
const totalEl = document.getElementById('total');

const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const answersDiv = document.getElementById('answers');
const scoreText = document.getElementById('score');
const percentageText = document.getElementById('percentage');
const passfailText = document.getElementById('passfail');
const reviewDiv = document.getElementById('review');

let selected;
let currentQ = 0;
let score = 0;
let chosenQuestions = [];

totalEl.textContent = 30;

startBtn.addEventListener('click', startTest);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartTest);

function startTest() {
  // shuffle a vezmi prvních 30
  chosenQuestions = allQuestions
    .sort(() => Math.random() - 0.5)
    .slice(0, 30);
  startScreen.classList.add('hidden');
  testScreen.classList.remove('hidden');
  currentQ = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = chosenQuestions[currentQ];
  questionNumber.textContent = `Otázka ${currentQ + 1} / ${chosenQuestions.length}`;
  questionText.textContent = q.question;
  answersDiv.innerHTML = '';
  q.answers.forEach((txt, i) => {
    const btn = document.createElement('button');
    btn.textContent = txt;
    btn.classList.add('answer-btn');
    btn.addEventListener('click', () => selectAnswer(i, btn));
    answersDiv.appendChild(btn);
  });
  selected = null;
}

function selectAnswer(i, btn) {
  selected = i;
  document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function nextQuestion() {
  if (selected === null) {
    alert("Vyber odpověď!");
    return;
  }
  if (selected === chosenQuestions[currentQ].correct) {
    score++;
  }
  currentQ++;
  if (currentQ < chosenQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  testScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  scoreText.textContent = `Správně: ${score} z ${chosenQuestions.length}`;
  const perc = Math.round((score / chosenQuestions.length) * 100);
  percentageText.textContent = `Procenta: ${perc}%`;
  passfailText.textContent = perc >= 75 ? "PROŠEL ✅" : "NEPROŠEL ❌";

  reviewDiv.innerHTML = "<h3>Přehled chyb:</h3>";

  chosenQuestions.forEach((q, idx) => {
    if (!q) return;
    if (q.correct !== undefined && q.answers[q.correct] && q.explanation) {
      if (q.selected !== q.correct) {
        const div = document.createElement("div");
        div.innerHTML = `<strong>Otázka ${idx+1}:</strong> ${q.question}<br>
        <strong>Správně:</strong> ${q.answers[q.correct]}<br>
        <em>${q.explanation}</em>`;
        reviewDiv.appendChild(div);
      }
    }
  });
}

function restartTest() {
  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
}

  chosenQuestions.forEach((q, idx) => {
    if (!q) return;
    if (q.correct !== undefined && q.answers[q.correct] && q.explanation) {
      if (q.selected !== q.correct) {
        const div = document.createElement("div");
        div.innerHTML = `<strong>Otázka ${idx+1}:</strong> ${q.question}<br>
        <strong>Správně:</strong> ${q.answers[q.correct]}<br>
        <em>${q.explanation}</em>`;
        reviewDiv.appendChild(div);
      }
    }
  });
}

function restartTest() {
  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
}
