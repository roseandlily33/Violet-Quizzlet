//Selecting the elements needs from the HTML doc
let startBtn = document.getElementById('start-btn');
let questionCont = document.getElementById('main-questions');
let beginningEl = document.getElementById('intro');
let questionEl = document.getElementById('question');
let buttonCont = document.getElementById('answer-buttons');
let button1 = document.getElementById('btn-1');
let button2 = document.getElementById('btn-2');
let button3 = document.getElementById('btn-3');
let button4 = document.getElementById('btn-4');
let timerEl = document.getElementById('timer');
let currentQuestion = questions[currentQuestionIndex];
let currentQuestionIndex = 0;
let seconds = 75;

//Starts the game on click
startBtn.addEventListener('click', startGame);

//Questions for the quiz
const questions = [
    {
        question: 'What direction does align-items align on?',
        answer1: 'vertical',
        answer2: 'horizontal',
        answer3: 'center',
        answer4: 'z-index',
        correct: answer1
    },
    {
        question: 'In this array how would you access apple: let fruit = [banana, mango, peach, apple, plum]',
        answer1: '[2]',
        answer2: '[0]',
        answer3: '[3]',
        answer4: '[4]', 
        correct: answer2
    },
    {
        question: 'Which one of these means absolutley not?',
        answer1: '!=',
        answer2: '>=',
        answer3: '!==',
        answer4: '===',
        correct: answer3

    },
    {
        question: 'What can arrays store in JavaScript?',
        answer1: 'Number',
        answer2: 'String',
        answer3: 'Other Arrays',
        answer4: 'All of the above',
        correct: answer4

    },
    {
        question: 'What should you always end a line of JavaScript with?',

        answer1: '.JS',
        answer2: '.Js',
        answer3: '.js',
        answer4: '.jS',
        correct: answer3

    },
    {
        question: 'What should you always end a line of JavaScript with?',
        answer: ',',
        answer: ';',
        answer: ':',
        answer: '/', correct: answer2
    }
];

//Starts the game 
function startGame() {
    //Hides the first 2 elements on the screen, and shows the question container
    //By doing this my goal was to have it nicely styled with HTML, that way i didn't have to worry about adding style.display
    startBtn.classList.add('hide');
    beginning.classList.add('hide');
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
    questionEl.textContent = currentQuestion.question;


}
//Function for the end score page
function scorePage() {
    //Need to make the elements and display them here
    clearInterval(timerInterval);

}




function ddshowQuestion(question) {
    question.textContent = question.question;
    question.answers.forEach(answer => {
        button1.innerText = answer;
    })

}
function ddnextQuestion() {
    for (let i = 0; i < questions.length; i++) {
        let random = Math.floor(Math.random() * questions.length);
        question.textContent = questions[random].question;
    }

}


function selectAnswer() {
    //if(answer.correct){
    //button1.dataset.correct = answer.correct
}
//}
