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

let currentQ = 0;
let score = 0;
let chosenQuestions = [];
let selectedAnswer = null;

// Nastavení textu na úvodní obrazovce
if (typeof allQuestions !== 'undefined') {
    totalEl.textContent = "30"; 
} else {
    console.error("Chyba: Soubor questions.js nebyl načten!");
}

startBtn.addEventListener('click', startTest);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartTest);

function startTest() {
  if (typeof allQuestions === 'undefined') return;

  // Náhodný výběr 30 otázek
  chosenQuestions = [...allQuestions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 30);

  currentQ = 0;
  score = 0;
  startScreen.classList.add('hidden');
  testScreen.classList.remove('hidden');
  resultScreen.classList.add('hidden'); // Pro jistotu při restartu
  showQuestion();
}

function showQuestion() {
  const q = chosenQuestions[currentQ];
  selectedAnswer = null;
  nextBtn.disabled = true;
  
  questionNumber.textContent = `Otázka ${currentQ + 1} z ${chosenQuestions.length}`;
  questionText.textContent = q.otazka;
  answersDiv.innerHTML = '';

  // Zamícháme možnosti, aby nebyla správná vždy první/poslední
  const shuffeledOptions = [...q.moznosti].sort(() => Math.random() - 0.5);

  shuffeledOptions.forEach(moznost => {
    const btn = document.createElement('button');
    btn.classList.add('answer-btn');
    btn.textContent = moznost;
    btn.onclick = () => {
      document.querySelectorAll('.answer-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedAnswer = moznost;
      nextBtn.disabled = false;
    };
    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  const q = chosenQuestions[currentQ];
  q.selected = selectedAnswer;

  if (selectedAnswer === q.odpoved) {
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
  percentageText.textContent = `Úspěšnost: ${perc}%`;
  
  passfailText.textContent = perc >= 75 ? "PROŠEL ✅" : "NEPROŠEL ❌";
  passfailText.style.color = perc >= 75 ? "green" : "red";

  reviewDiv.innerHTML = "<h3>Přehled chyb:</h3>";

  let hasErrors = false;
  chosenQuestions.forEach((q, idx) => {
    if (q.selected !== q.odpoved) {
      hasErrors = true;
      const div = document.createElement("div");
      div.className = "review-item"; // Doporučuji přidat do CSS
      div.style.marginBottom = "15px";
      div.style.padding = "10px";
      div.style.borderLeft = "4px solid red";
      div.style.background = "#fff5f5";
      div.innerHTML = `
        <strong>Otázka ${idx + 1}:</strong> ${q.otazka}<br>
        <span style="color: #c00">Vaše odpověď: ${q.selected || 'Nezvoleno'}</span><br>
        <span style="color: green">Správná odpověď: ${q.odpoved}</span><br>
        <small><em>Vysvětlení: ${q.vysvetleni}</em></small>
      `;
      reviewDiv.appendChild(div);
    }
  });

  if (!hasErrors) {
      reviewDiv.innerHTML += "<p>Gratulujeme, nemáte žádnou chybu!</p>";
  }
}

function restartTest() {
  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
  // Resetujeme globální proměnné
  currentQ = 0;
  score = 0;
  chosenQuestions = [];
}
