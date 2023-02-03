//Selecting the elements needs from the HTML doc
let startBtn = document.getElementById('start-btn');
let questionCont = document.getElementById('main-questions');
let beginningEl = document.getElementById('intro');
let questionEl = document.getElementById('question');
let buttonCont = document.getElementById('answer-buttons');
//let button = document.querySelector('button');
let timerEl = document.getElementById('timer');
let finalEl = document.getElementById('final');
let scorePage = document.getElementById('score-page');


//Starts the game on click
startBtn.addEventListener('click', startGame);

//Questions for the quiz
const questions = [
    {
        question: 'What direction does align-items align on if your aligning on the horizontal axis?',
        answers: [
            { answer1: 'vertical', correct: true },
            { answer2: 'horizontal', correct: false },
            { answer3: 'center', correct: false },
            { answer4: 'z-index', correct: false }
        ]
    },
    {
        question: 'In this array how would you access apple: let fruit = [banana, mango, peach, apple, plum]',
        answers: [
            { answer1: '[2]', correct: false },
            { answer2: '[0]', correct: true },
            { answer3: '[3]', correct: false },
            { answer4: '[4]', correct: false }
        ]
    },
    {
        question: 'Which one of these means absolutley not?', answers: [
            { answer1: '!=', correct: false },
            { answer2: '>=', correct: false },
            { answer3: '!==', correct: true },
            { answer4: '===', correct: false }
        ]
    },
    {
        question: 'What can arrays store in JavaScript?', answers: [

            { answer1: 'Number', correct: false },
            { answer2: 'String', correct: false },
            { answer3: 'Other Arrays', correct: false },
            { answer4: 'All of the above', correct: true }

        ]
    },
    {
        question: 'What should you always end a line of JavaScript with?',
        answers: [
            { answer1: '.JS', correct: false },
            { answer2: '.Js', correct: false },
            { answer3: '.js', correct: true },
            { answer4: '.jS', correct: false }
            // correct: answer3
        ]
    },
    {
        question: 'What should you end a line of JavaScript with?',
        answers: [
            { answer1: ',', correct: false },
            { answer2: ';', correct: true },
            { answer3: ':', correct: false },
            { answer4: '/', correct: false }

        ]
    }
];
let currentQuestionIndex = 0;
let currentQuestion = questions[currentQuestionIndex];
let finalQuestion = questions.length -1;
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
function nextQuestion(){
    questionEl.innerHTML = " ";
    questionEl.textContent = currentQuestion.question;
    for( let i = 0; i < currentQuestion.length; i++){
        

        
    }
    //I want to change the background colour for when it is selected if it's right green, wrong red
   //if(correct === true){
    //button.style.backgroundColor = ".correct";
    //button.style.backgroundColor = " ";
   //}
   //else{
    //button.style.backgroundColor = ".wrong";
    //button.style.backgroundColor = " ";
   //}
   //If it is the last question to go to the score page with the score
   if (currentQuestionIndex === finalQuestion) {
    endGame();

}}

function nexdtQuestion() {
    let i = questions.length;
    do {
        let random = Math.floor(Math.random() * questions.length);
        questionEl.textContent = questions[random].question;
    } while (i < questions.length);
}

function endGame(){
    
}

//clearInterval(timerInterval);





function ddshowQuestion(question) {
    question.textContent = question.question;
    question.answers.forEach(answer => {
        button1.innerText = answer;
    })

}
function replayQuiz() {
    seconds = 75;
    currentQuestionIndex = 0;
}
