// Perguntas e respostas do jogo

const questions = [
    {
        question: "Qual e a capital de Mocambique?",
        answers:['Maputo','Beira','Nampula','Pemba'],
        correct: 'Maputo'
    },
    {
        question: "Qual e a linguagem de programacao principal para desenvolvimento web?",
        answers:['Python','JavaScript','C++','Java'],
        correct: 'JavaScript'
    },
    {
        question: "Quantos planetas existem no sistema solar?",
        answers:['7','8','9','10'],
        correct: '8'
    },
    {
        question: "Quantos continentes existem no mundo?",
        answers:['5','6','7','8'],
        correct: '7'
    }
]

let currentQuestionIndex = 0;
let score = 0;

// elementos do DOM
const questionElement = document.getElementById("question");
const answerElements = document.querySelectorAll(".answer");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("nextQuestion");
const inputAnswer = document.getElementById("answre");

// Exibe a pergunta a atual

function loadQuestion(){
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerElements.forEach((el, index)=>{
        el.textContent = currentQuestion.answers[index];
        el.onclick = ()=> checkAnswer(currentQuestion.answers[index]);
    })
    inputAnswer.value = ''; // limpa a entrada do texto
}

// Verfica a resposta selecionada pelo usuário
function checkAnswer(answer){
    const correctAnswer = questions[currentQuestionIndex].correct;
    if(answer == correctAnswer){
        score++;
        scoreElement.textContent = `Pontuação: ${score}`;
        alert('Correto!')
    }else{
        alert(`Errado! A resposta correta é: ${correctAnswer}`);
    }
}


// Vai para a proxima pergunta
function nextQuestion(){
    if(currentQuestionIndex < questions.length -1){
        currentQuestionIndex++;
        loadQuestion();
    }else{
        alert("Fim do jogo! Pontuação final: "+ score);
        currentQuestionIndex = 0;
        score = 0;
        scoreElement.textContent = `Pontuação: ${score}`;
        loadQuestion();
    }
    
}

// Verficar a resposta do campo de texto
function checkTextAnswer(){
    const answer = inputAnswer.value.trim();
    if(answer){
        checkAnswer(answer)
    }
}

// Eventos 
nextButton.addEventListener("click", nextQuestion);
inputAnswer.addEventListener("keypress",(evt)=>{
    if(evt.key == "Enter"){
        checkTextAnswer();
    }
})

// Inicializa o jogo;
loadQuestion();