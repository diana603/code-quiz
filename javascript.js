var counter = 15;
var timer;

var startbtn = document.querySelector(".start-button");
var welcomeContainerElm = document.querySelector(".welcome-container");
var questionContainerElm = document.querySelector(".question-container");
var resultsContainerElm = document.querySelector(".results-container");
var timerElm = document.querySelector(".timer");


var questionsObj = [
    {
        question: 'Whats the longest running tv show? ',
        answers: ['Friends', 'New Girl', 'The Simpsons'],
        correctAnswer: 2
    },
    {
        question: 'Whats wonder women non superhero name?  ',
        answers: ['Daniel', 'Diana', 'Dianne'],
        correctAnswer: 1
    },
    {
        question: 'How many licks does it take to get to the center of a lolipop? ',
        answers: ['1', 'New 3', 'The the value does not existe'],
        correctAnswer: 2
    },
    {
        question: 'Who was the president in 2013? ',
        answers: ['Barack', 'Obama', 'Barack Obama'],
        correctAnswer: 2
    },
]

startbtn.addEventListener("click", function (event) {
    console.log("user clicked button")
    startTimer();
    questionsRenders();
})

function startTimer() {
    timer = setInterval(() => {
        console.log(counter--)
        timerElm.textContent = "Time left: " + counter;
        if (counter <= 0) {
            stopTimer();
        }
    }, 1000);

}

function stopTimer() {
    clearInterval(timer);
}

function questionsRenders() {

    questionsObj.forEach(function (q, index) {
        console.log(q.question);

        quizQuestionElm = document.createElement('h1');
        quizQuestionElm.setAttribute('class', "quiz-question");
        quizQuestionElm.textContent = q.question;

        var answersChoicesElm = document.createElement('div');
        answersChoicesElm.setAttribute('class', 'answers-choices');

        q.answers.forEach(function (ans, index) {
            var answerElm = document.createElement("button");
            answerElm.setAttribute("data-index", index);
            answerElm.textContent = ans;
            answersChoicesElm.append(answerElm);
        });

        var statusElm = document.createElement("h2");
        statusElm.setAttribute("data-index", index);

        questionContainerElm.append(quizQuestionElm, answersChoicesElm, statusElm);

    })
}


// clear interval to stop it. w3 schools
//Steps i need to do for this hw.

//1) When the user first accesses the page, they are shown an intro message
    // in html have a div with the introduction 


//2) Users can click the start button, which will start the game timer
    // when the users click on start hide intro div
    // creat setInterval of 75000 ms. the inerval needs to count down 
    // variable to store the current count set to 0 by default
    // every time the interval runs, need to decrement the count by 1, re-render the current count
    // render the first questions 
    // vairable to store the index of the current quesions being answered 
    // variabel to store the array of quesitons 
    // total time should be 75 seconds and time will be deducted per wrong answers 



//3) once the game has started, display the timer questions with buttons for the answers 

//4) when a user clicks on the one of those questions, determine if it is correct or incorrect, display the next quesiton, and display the status of their answer correct/incorrect, for a short periofe of time

//5) end condition 
//6) user answers all of the questions or time runs out
//7) when the game ends, allow the user to enter their initials, and store their score
// redirect the user to the highscores page, wich will display all of the stored high scores. 