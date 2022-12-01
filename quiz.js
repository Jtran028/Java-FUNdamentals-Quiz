// Reference DOM Elements using querySelector over getElementbyID for versatility
var startButton = document.getElementById('start-btn')
var homePage = document.getElementById('home-page')
var quizContainerEl = document.getElementById('quiz-container')
var timerEl = document.getElementById('timer')
var questionEl = document.getElementById('question-prompt');
var choicesEl = document.getElementById('choices')
var scoreEl = document.getAnimations('final-score')
// Array containing questions and their values
var questions = [
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["<The <head> section>", "<Both the <head> section and the <body> section are correct>", "<The <body> section>"],
        answer: "<Both the <head> section and the <body> section are correct>"  
    },
    {
        question: "<How does a FOR loop start?>",
        choices: ["<for (i = 0; i <= 5; i++)>","<for (i <= 5; i++)>","<for i = 1 to 5>","<for (i = 0; i <= 5)>"],
        answer:  "<for (i = 0; i <= 5; i++)>" 
    },
    {
        question:"Which event occurs when the user clicks on an HTML element?",
        choices:["<onmouseclick>","<onclick>","<onmouseover>","<onchange>"],
        answer: "<onclick>"
    },
    {
        question:"What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?",
        choices:["<Clone>","<Debugger>","<Repeater>","<Loop>"],
        answer: "<Loop>"
    },
    {
        question:"What is the format called that is used for storing and transporting data?",
        choices:["<JSON>","<Syntax>","<HTML>","<Font>"],
        answer: "<JSON>"   
    },

];

// Starts Quiz when Start button is "clicked"
startButton.addEventListener('click', startQuiz)

var currentQuestionIndex = 0;
var quizScore = 0;

// hides the home page elements
function startQuiz() {
    homePage.classList.add('hide')
    quizContainerEl.classList.remove('hide')
    promptQuestion();
}

// function to update elements with quiz values
function promptQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
//  console.log(currentQuestion)
//  console.log(currentQuestionIndex)
    questionEl.textContent = currentQuestion.question;

    choicesEl.innerHTML = "";

// loop to create choices and add value attribute

currentQuestion.choices.forEach(function(choice) {
    // create new button for each choice
    var answerBtn = document.createElement("button");
    answerBtn.classList.add('btn', 'choice');
    answerBtn.setAttribute("value", choice);

    answerBtn.textContent = choice;

    choicesEl.appendChild(answerBtn);

    answerBtn.addEventListener('click', checkAnswer)
  });
}

// function to check if answers are correct
function checkAnswer() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        alert ('Wrong!')
    } else {
        alert ('Correct!')
        currentQuestionindex++ ; 
    }
        
  

}    

    

    

   




    



//Timer Variables
// var startingTime = 1;
// let time = startingTime * 60;

// function timerStart () {
//     var minutes = Math.floor(time / 60);
//     let seconds = time % 60;

//     timerEl.innerHTML = `${minutes}: ${seconds}`;
//     time--;
    
    
// }








function selectAnswer() {

}


