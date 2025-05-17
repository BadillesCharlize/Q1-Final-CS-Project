// 1. Quiz data module
const quizData = [
  {
    question: "Who published a book that explains the causes of the Earth's ice ages?",
    answers: [
      "Milutin Milankovitch",
      "Svante Arrhenius",
      "Rio de Janero",
      "Charles David"
    ],
    correct: 0
  },
  {
    question: "What does (GHG) mean?",
    answers: [
      "Gold haggling genius",
      "Gradual Hormone Generator",
      "Greenhouse gas",
      "Grand Housing Grant"
    ],
    correct: 2
  },
  {
    question: "CO2 concentration in 1980?",
    answers: [
      "360 ppm",
      "376 ppm",
      "367 ppm",
      "267 ppm"
    ],
    correct: 2
  },
{
    question: "Which country becomes the larges greenhous gas emitter?",
    answers: [
      "Russia",
      "China",
      "US",
      "Britain"
    ],
    correct: 1
  },
{
    question: "When did the first Oil Shock occur?",
    answers: [
      "1992",
      "2006",
      "1930's",
      "1973"
    ],
    correct: 3
  }

];

// 2. Modular functions to handle quiz logic
let currentQuestion = 0;
let score = 0;

function showQuestion(index) {
  const q = quizData[index];
  document.getElementById('question').innerText = q.question;
  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';
  q.answers.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.innerText = ans;
    btn.onclick = () => selectAnswer(i);
    answersDiv.appendChild(btn);
  });
}

function selectAnswer(selected) {
  // Remove previous selections
  document.querySelectorAll('.answer-btn').forEach(btn => btn.classList.remove('selected'));

  // Highlight selected answer
  const btns = document.querySelectorAll('.answer-btn');
  btns[selected].classList.add('selected');

  // Check answer
  if (selected === quizData[currentQuestion].correct) {
    score++;
  }
  // Show next button
  document.getElementById('next-btn').style.display = 'inline-block';
  // Disable all buttons after answer
  btns.forEach(btn => btn.disabled = true);
}

function showResult() {
  document.getElementById('quiz-container').innerHTML = `
    <h1>Quiz Complete!</h1>
    <div id="result">Your score: ${score} / ${quizData.length}</div>
    <button onclick="location.reload()">Restart Quiz</button>
  `;
}

// 3. Event handler for next button
document.getElementById('next-btn').addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion(currentQuestion);
    document.getElementById('next-btn').style.display = 'none';
  } else {
    showResult();
  }
});

// 4. Initialize quiz
showQuestion(currentQuestion);