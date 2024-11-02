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
const answerElement = document.querySelectorAll(".answer");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("nextQuestion");
const inputAnswer = document.getElementById("answre");