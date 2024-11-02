const questions = [
    {
        question: "Qual é a capital de Moçambique?",
        answers: ["Maputo", "Beira", "Nampula", "Pemba"],
        correct: "Maputo"
    },
    {
        question: "Qual é a linguagem de programação principal para desenvolvimento web?",
        answers: ["Python", "JavaScript", "C++", "Java"],
        correct: "JavaScript"
    },
    {
        question: "Quantos planetas existem no sistema solar?",
        answers: ["7", "8", "9", "10"],
        correct: "8"
    },
    // Adicione mais perguntas conforme necessário
];

let currentQuestionIndex = 0;
let score = 0;

// Elementos do DOM
const questionElement = document.getElementById("question");
const answerElements = document.querySelectorAll(".answer");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("nextQuestion");
const inputAnswer = document.getElementById("answer");

// Exibe a pergunta atual
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerElements.forEach((el, index) => {
        el.textContent = currentQuestion.answers[index];
        el.onclick = () => checkAnswer(currentQuestion.answers[index]);
    });
    inputAnswer.value = "";  // Limpa a entrada de texto
}

// Verifica a resposta selecionada pelo usuário
function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    if (answer === correctAnswer) {
        score++;
        scoreElement.textContent = `Pontuação: ${score}`;
        alert("Correto!");
    } else {
        alert(`Errado! A resposta correta é: ${correctAnswer}`);
    }
}

// Vai para a próxima pergunta
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Fim do jogo! Pontuação final: " + score);
        currentQuestionIndex = 0;
        score = 0;
        scoreElement.textContent = `Pontuação: ${score}`;
        loadQuestion();
    }
}

// Verifica a resposta do campo de texto
function checkTextAnswer() {
    const answer = inputAnswer.value.trim();
    if (answer) {
        checkAnswer(answer);
    }
}

// Eventos
nextButton.addEventListener("click", nextQuestion);
inputAnswer.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkTextAnswer();
    }
});

// Inicializa o jogo
loadQuestion();
