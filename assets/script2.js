//My API Selectors:
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
let startOver = document.getElementById('back');
let clearScores = document.getElementById('clear');
let container = document.getElementById('container');
let finalScore = document.getElementById('finalScore')

//My Questions: 
const questions = [
    {
        question: 'What tag is used to attatch JavaScript to Html',
        choices: ['<script>', '<JavaScript>', '<JScript', '<java>'],
        correct: '<script>'
    },
    {
        question: 'In this array how would you access apple: let fruit = [banana, mango, peach, apple, plum]',
        choices: ['[0]', '[1]', '[2]', '[3]'],
        correct: '[3]'
    },
    {
        question: 'Which of these operators means absolutley not?',
        choices: ['==', '!=', '&&', '!=='],
        correct: '!=='

    },
    {
        question: 'Which one of these is not a math method?',
        choices: ['.substr()', '.round()', '.floor()', '.random()'],
        correct: '.substr()'

    },
    {
        question: 'What can arrays store in JavaScript?',
        choices: ['Numbers', 'Booleans', 'Strings', 'All of the above'],
        correct: 'All of the above'
    },
    {
        question: 'Which method takes the first one off of an array?',
        choices: ['.shift()', '.unshift()', '.pop()', '.push()'],
        correct: '.shift()'
    },
    {
        question: 'Which method joins 2 arrays together?',
        choices: ['.join()', '.push()', '.substr()', '.concat()'],
        correct: '.concat()'
    }
];

//Variables:
let currentQuestionIndex = 0;

let finalQuestion = questions.length;
let seconds = 75;
let highScores = JSON.parse(localStorage.getItem('score')) || [];
let initials = document.querySelector('#inputInit');
let score = 0;
var timerInterval;

//Click to start the game:
startBtn.addEventListener('click', startGame);

//Start Game function:
function startGame() {
    startBtn.classList.add('hide');
    beginningEl.classList.add('hide');
    questionCont.classList.remove('hide');
    timer();
    nextQuestion();
}
//Timer function:
function timer() {
    timerInterval = setInterval(function () {
        seconds--;
        timerEl.textContent = 'Time left: ' + seconds;
        if (seconds === 0) {
            clearInterval(timerInterval);
            finalScore();
            return seconds;
        }
    }, 1000
    );
};

//Goes through the questions:
function nextQuestion() {
    if (currentQuestionIndex === finalQuestion) {
        finalScore();
        return;
    } else if (seconds === 0) {
        clearInterval(timerInterval);
        finalScore();
    }
    else {
        buttonCont.innerHTML = "";
        let currentQuestion = questions[currentQuestionIndex];
        questionEl.textContent = currentQuestion.question;
        currentQuestion.choices.forEach(answer => {
            let button = document.createElement('button');
            button.textContent = answer;
            button.setAttribute('value', answer)
            buttonCont.appendChild(button);
            button.addEventListener('click', function (e) {
                if (e.target.value == questions[currentQuestionIndex].correct) {
                    button.setAttribute('style', 'background-color: green');
                    button.textContent = 'correct'
                    seconds;
                } else {
                    console.log('incorrect');
                    button.setAttribute('style', 'background-color: red');
                    button.textContent = 'incorrect';
                    seconds -= 10;
                }
                currentQuestionIndex++;
                setTimeout(function(){
                    console.log('delaying');
                    nextQuestion();
                }, 1500);
                
            })
        });
    }
}

//Shows the final score and stops the timer:
function finalScore() {
    questionCont.classList.add('hide');
    finalEl.classList.remove('hide');
    clearInterval(timerInterval);

}
//JSON parses back through to show the scores on the leaderboard:
function scores() {
    finalEl.classList.add('hide');
    scorePage.classList.remove('hide');
    finalScore.textContent = score;
    var returnedScore = JSON.parse(localStorage.getItem('score'));
    if (returnedScore !== null) {
        returnedScore.forEach(person => {
            let name = document.createElement('h4');
            name.textContent = person.initials + '  -  ' + person.score;
            scoresCont.appendChild(name);
        })
    } else { return; }
}

//Submits the score to local storage with name:
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    //console.log(initials.value);
    var data = {
        initials: initials.value,
        score: seconds
    }
    //Pushes data to local storage:
    highScores.push(data);
    localStorage.setItem('score', JSON.stringify(highScores));
    scores();
})
//Starts the quiz over:
startOver.addEventListener('click', function () {
    window.location.href = "index.html";

});

//Clears the scores when pressed:
clearScores.addEventListener('click', function () {
    //highScores = [];
    localStorage.clear('returnedScore');
    scoresCont.innerHTML = "";
})
