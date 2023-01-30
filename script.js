//Selecting the elements needs from the HTML doc
let startBtn = document.getElementById('start-btn');
let questionCont = document.getElementsByClassName('main-questions');
let beginning = document.getElementsByClassName('intro');

//Questions for the quiz
const questions = [
    {
        question: 'What direction does align-items align on?',
        answers: [
            {answer1: 'vertical', correct: true},
         { answer2: 'horizontal', correct: false},
         { answer3: 'center', correct: false},
         { answer4: 'z-index', correct: false}
        ]
    },
    { question:  'In this array how would you access apple: let fruit = [banana, mango, peach, apple, plum]',
      answers: [
        {answer1: '[2]', correct: false },
        {answer2: '[3]', correct: true},
        {answer3: '[0]', correct: false},
        {answer4: '[4]', correct: false}
      ]

    },
    {
        question: 'Which one of these means absolutley not?' ,
        answers: [
            {answer1: '!=', correct: false},
            {answer2: '>=', correct: false},
            {answer3: '!==', correct: true},
            {answer4: '===', correct: false}
        ]
    },
    {
        question: 'What can arrays store in JavaScript?',
        answers: [
            {answer1: 'Number', correct: false},
            {answer2: 'String', correct: false},
            {answer3: 'Other Arrays', correct: false},
            {answer4: 'All of the above', correct: true}
        ]
    },
    {
        question: 'What should you always end a line of JavaScript with?',
        answers: [
            {answer1: '.JS', correct: false},
            {answer2: '.Js', correct: false},
            {answer3: '.js', correct: true},
            {answer4: '.jS', correct: false}
        ]
    },
    {
        question: 'What should you always end a line of JavaScript with?' ,
        answers: [
            {answer1: ',', correct: false},
            {answer2: ';', correct: true},
            {answer3: ':', correct: false},
            {answer4: '/', correct: false}
        ]
    }
]
//Starts the game
startBtn.addEventListener('click', startGame());

function startGame(){
    //putting display: none; on the start button
    startBtn.classList.add("hide");
    //putting display: none; on the main welcome section
    beginning.classList.add("hide");
    //removing display: none; on the question container
    questionCont.classList.remove("hide");
}
function nextQuestion(){
    let random = Math.floor(Math.random()* questions.length);
    for(let i = 0; i < random; i++){
        console.log([i]);
    }

}
function selectAnswer(){

}