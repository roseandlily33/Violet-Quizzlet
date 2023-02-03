let startBtn = document.getElementById('start-btn');
let questionCont = document.getElementById('main-questions');
let beginningEl = document.getElementById('intro');
let questionEl = document.getElementById('question');
let buttonCont = document.getElementById('answer-buttons');
let timerEl = document.getElementById('timer');
let finalEl = document.getElementById('final');
let scorePage = document.getElementById('score-page');
let submitBtn = document.getElementById('submitInit');

const questions = [
    {
        question: 'What direction does align-items align on if your aligning on the horizontal axis?',
        answer: 'vertical', 
        answer: 'horizontal', 
        answer: 'center', 
        answer: 'z-index',
        correct: 'vertical'
    },
    {
        question: 'In this array how would you access apple: let fruit = [banana, mango, peach, apple, plum]',
        answer: '[2]', 
        answer: '[0]',
        answer: '[3]', 
        answer: '[4]', 
        correct: '[0]'
    }];

let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];
let finalQuestion = questions.length - 1;
let seconds = 75;


startBtn.addEventListener('click', startGame);

function startGame() {
    startBtn.classList.add('hide');
    beginningEl.classList.add('hide');
    questionCont.classList.remove('hide');
    nextQuestion();
    timer();
}
function timer() {
    var timerInterval = setInterval(function () {
        seconds--;
        timerEl.textContent = 'Time left: ' + seconds;
        if (seconds === 0) {
            clearInterval(timerInterval);
            scorePage();
        }
    }, 1000
    );
};
function nextQuestion() {
    questionEl.textContent = currentQuestion.question;
    //for (let i = 0; i < questions.length; i++) {
    //currentQuestionIndex.textContent = currentQuestion.question;}

    questions.forEach(answer =>{
    let button = document.createElement('button');
    buttonCont.appendChild(button);
    
    button.addEventListener('click',function(){
        if(answer === correct){
            button.style.backgroundColor = 'green';
        } else {
            button.style.backgroundColor = 'red';
            seconds -= 10;
        }
        currentQuestionIndex++;

    })})
    if(currentQuestionIndex == finalQuestion){
        finalScore();
    } else if(seconds == 0){
        finalScore();
    } else{
        finalScore();
    }
   }
   /*function finalScore(){
    questionCont.classList.add('hide');
    finalEl.classList.remove('hide');
    clearInterval(timerInterval);

    localStorage.setItem('score',JSON.stringify(score));
    submitBtn.addEventListener('submit', function(e){
        e.preventDefault();

    })


   }
   function scores(){
    finalEl.classList.add('hide');
    scorePage.classList.remove('hide');

    var returnedScore = JSON.parse(localStorage.getItem('score'));
    if(returnedScore !== null){
        document.getElementById.innerHTML = returnedScore.score;
    } else { return;}
   } */