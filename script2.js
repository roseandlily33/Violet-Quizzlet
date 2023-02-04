let startBtn = document.getElementById('start-btn');
let questionCont = document.getElementById('main-questions');
let beginningEl = document.getElementById('intro');
let questionEl = document.getElementById('question');
let buttonCont = document.getElementById('answer-buttons');
let timerEl = document.getElementById('timer');
let finalEl = document.getElementById('final');
let scorePage = document.getElementById('score-page');
let submitBtn = document.getElementById('submitInit');
let scoresCont = document.getElementById('scores');

const questions = [
    {
        question: 'What direction does align-items align on if your aligning on the horizontal axis?',
        choices: [ 'vertical', 'horiztonal', 'center', 'z-index'],
        correct: 'vertical'
    },
    {
        question: 'In this array how would you access apple: let fruit = [banana, mango, peach, apple, plum]',
        choices: ['[0]', '[1]', ['2'], ['3'], ],
        correct: '[3]'
    },
    { question: 'Which of these operators means absolutley not?',
    choices: [ '==', '!=', '&&', '!=='],
    correct: '!=='

    },
    {
        question: 'What can arrays store in JavaScript?',
        choices: [ 'Numbers', 'Booleans', 'Strings', 'All of the above'],
        correct: 'All of the above'
    }
];

let currentQuestionIndex = 0;

let finalQuestion = questions.length;
let seconds = 75;
let highScores = JSON.parse(localStorage.getItem('score')) || [];
let initials = document.querySelector('#inputInit');

var timerInterval;

startBtn.addEventListener('click', startGame);

function startGame() {
    startBtn.classList.add('hide');
    beginningEl.classList.add('hide');
    questionCont.classList.remove('hide');
    timer();
    nextQuestion();
}
function timer() {
     timerInterval = setInterval(function () {
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
    if(currentQuestionIndex == finalQuestion){
        finalScore();
        return;
    } else if(seconds == 0){
        finalScore();
    } else{
    }
    buttonCont.innerHTML = " ";
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    //for (let i = 0; i < questions.length; i++) {
    //currentQuestionIndex.textContent = currentQuestion.question;}

    currentQuestion.choices.forEach(answer =>{
    let button = document.createElement('button');
    button.textContent = answer;
    buttonCont.appendChild(button);
    
    button.addEventListener('click',function(){
        if(answer === currentQuestion.correct){
            this.style.backgroundColor = 'green';
        } else {
            this.style.backgroundColor = 'red';
            seconds -= 10;
        }
        currentQuestionIndex++;
     nextQuestion();
    })})
    
   }

   function finalScore(){
    questionCont.classList.add('hide');
    finalEl.classList.remove('hide');
    clearInterval(timerInterval);
  
   }

   function scores(){
    finalEl.classList.add('hide');
    scorePage.classList.remove('hide');
    scoresCont.innerHtml = highScores;



    var returnedScore = JSON.parse(localStorage.getItem('score'));
    if(returnedScore !== null){
        document.getElementById.innerHTML = returnedScore.score;
    } else { return;}
   } 
   submitBtn.addEventListener('click', function(e){
    e.preventDefault();
   console.log(initials.value);
    var data = {
        initials: initials.value,
        score: seconds
    }
    highScores.push(data);
    localStorage.setItem('score',JSON.stringify(highScores));
    scores();
})