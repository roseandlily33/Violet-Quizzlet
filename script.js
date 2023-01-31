//Selecting the elements needs from the HTML doc
let startBtn = document.getElementById('start-btn');
let questionCont = document.getElementById('main-questions');
let beginning = document.getElementById('intro');
let question = document.getElementById('question');
let button1 = document.getElementById('btn-1');
let button2 = document.getElementById('btn-2');
let button3 = document.getElementById('btn-3');
let button4 = document.getElementById('btn-4');
let currentCard = 0;

//Starts the game on click
startBtn.addEventListener('click', startGame);

//Questions for the quiz
const questions = [
    {
        question: 'What direction does align-items align on?',
        answers: [
         { answer1: 'vertical', correct: true},
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
];


function startGame(){
   startBtn.classList.add('hide');
   beginning.classList.add('hide');
   questionCont.classList.remove('hide');
   
   nextQuestion();
   
}
function nextQuestion(){
    let random = Math.floor(Math.random()*questions.length);
    //For loop?
    question.innerText = questions[random].question;
    //for(let i = 0; i < questions.length; i++){
      //  let random = Math.floor(Math.random()* questions.length);
       // question.textContent = questions[random].question;
   // }

        button1.textContent = questions.answers.answer1;
        button2.textContent = questions.answers.answer2;
        button3.textContent = questions.answers.answer3;
        button4.textContent = questions.answers.answer4;
    
        
   }
   
   
function selectAnswer(){
//if(answer.correct){
    //button1.dataset.correct = answer.correct
}
//}
