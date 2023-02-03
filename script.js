//Selecting the elements needs from the HTML doc
let startBtn = document.getElementById('start-btn');
let questionCont = document.getElementById('main-questions');
let beginningEl = document.getElementById('intro');
let questionEl = document.getElementById('question');
let buttonCont = document.getElementById('answer-buttons');
let button = document.querySelector('button');
let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');
let button3 = document.getElementById('btn3');
let button4= document.getElementById('btn4');
let timerEl = document.getElementById('timer');
let finalEl = document.getElementById('final');
let scorePage = document.getElementById('score-page');


//Starts the game on click
startBtn.addEventListener('click', startGame);

//Questions for the quiz
const questions = [
    {
        question: 'What direction does align-items align on if your aligning on the horizontal axis?',
        answer1: 'vertical', correct: true,
        answer2: 'horizontal', correct: false,
        answer3: 'center', correct: false,
        answer4: 'z-index', correct: false,

    },
    {
        question: 'In this array how would you access apple: let fruit = [banana, mango, peach, apple, plum]',
        answer1: '[2]', correct: false,
        answer2: '[0]', correct: true,
        answer3: '[3]', correct: false,
        answer4: '[4]', correct: false,

    },
    {
        question: 'Which one of these means absolutley not?',
        answer: '!=', correct: false,
        answer: '>=', correct: false,
        answer: '!==', correct: true,
        answer: '===', correct: false

    },
    {
        question: 'What can arrays store in JavaScript?',

        answer1: 'Number', correct: false,
        answer2: 'String', correct: false,
        answer3: 'Other Arrays', correct: false,
        answer4: 'All of the above', correct: true,


    },
    {
        question: 'What should you always end a line of JavaScript with?',

        answer1: '.JS', correct: false,
        answer2: '.Js', correct: false,
        answer3: '.js', correct: true,
        answer4: '.jS', correct: false

    }
];
let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];
let finalQuestion = questions.length - 1;
let seconds = 75;

//Starts the game 
function startGame() {
    //Hides the first 2 elements on the screen, and shows the question container
    //By doing this my goal was to have it nicely styled with HTML, that way i didn't have to worry about adding style.display too much
    startBtn.classList.add('hide');
    beginningEl.classList.add('hide');
    questionCont.classList.remove('hide');
    //Brings you to the question page
    nextQuestion();
    //starts running the timer
    timer();
}
//Function for the timer
function timer() {
    var timerInterval = setInterval(function () {
        //makes it go down by 1 second
        seconds--;
        //selecting my timer element, inside the html what i want it to say
        timerEl.textContent = 'Time left: ' + seconds;
        //When the game ends 
        if (seconds === 0) {
            clearInterval(timerInterval);
            scorePage();
        }
        //1000ms at a time
    }, 1000
    );
};
//Function for the questions
function nextQuestion() {
    questionEl.innerHTML = " ";
    questionEl.textContent = currentQuestion.question;
    for (let i = 0; i < questions.length; i++) {
    currentQuestionIndex.textContent = currentQuestion.question;
    button1.innerHTML = currentQuestion.answer1;
    button2.innerHTML = currentQuestion.answer2;
    button3.innerHTML = currentQuestion.answer3;
    button4.innerHTML = currentQuestion.answer4;
    }
    //If it is the last question to go to the score page with the score
    button.addEventListener('click', function(){
        if(answer === true){
            button.style.backgroundColor = "green";
           // button.style.backgroundColor = " ";
        } else {
            button.style.backgroundColor = "red";
            //subtract by 10 seconds
            seconds -=10;
           // button.style.backgroundColor = " ";
        }
     currentQuestionIndex++;
    })
    if (currentQuestionIndex === finalQuestion) {
        endGame();

    }
}

function endGame() {
clearInterval(timerInterval);
}


function replayQuiz() {
    seconds = 75;
    currentQuestionIndex = 0;
}
