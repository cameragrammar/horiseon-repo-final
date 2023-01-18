var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var time = 60;
var interval;
localStorage.setItem("scores", "");

function start (){
    score = 0;
    time = 60;
    currentQuestion = 0;
    interval = setInterval(updateTime, 1000);
    container.style.display="block";
    document.querySelector(".quiz-intro").style.display = "none";
    document.querySelector(".result").style.display = "none";
    nextButton.textContent = 'Next Question';
    loadQuestion(0);
}

function updateTime(){
    time -- ;
    document.getElementById("timer").innerHTML="Timer: " + time;
    if(time == 0){
        clearInterval(interval);

    }
}



function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked')
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        document.getElementById("result").innerHTML='Correct!';
        score += 10;
    }
    else{
        document.getElementById("result").innerHTML='Incorrect!';
        time -= 5;
    }

    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuestions){
        clearInterval(interval);
        document.querySelector(".quiz-finish-screen").style.display="block";
        container.style.display = 'none';
        resultCont.style.display = '';
        document.getElementById("score").textContent = 'Your Score: ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}


function submit () {
    var initials = document.getElementById("initials").value;
    var scoreboard = localStorage.getItem("scores");
    scoreboard += "<br>" + initials + " " + score;
    localStorage.setItem("scores", scoreboard);
    document.getElementById("scoreboard").innerHTML=scoreboard;
    document.querySelector(".quiz-finish-screen").style.display="none";
    document.querySelector(".highscore-screen").style.display="block";
    document.getElementById("initials").value="";
}

function back (){
    document.querySelector(".highscore-screen").style.display="none";
    document.querySelector(".quiz-intro").style.display="block";
}

function clearscores (){
    console.log("clearscores");
    localStorage.setItem("scores", "");
    document.getElementById("scoreboard").innerHTML="";
}

function viewhigh () {
    document.querySelector(".highscore-screen").style.display="block";
    document.querySelector(".quiz-intro").style.display="none";
    document.querySelector(".quiz-finish-screen").style.display="none";
    document.querySelector(".result").style.display = "none";
    document.querySelector("#quizContainer").style.display = "none";
    clearInterval(interval);
    time = 0;
    document.getElementById("timer").innerHTML="Timer: " + time;
}