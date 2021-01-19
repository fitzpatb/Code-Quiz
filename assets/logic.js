var timeEL = document.getElementById("timer");
var titQuesEL = document.getElementById("title-question");
var quizEl = document.getElementById("quiz");


var time = 5;

timeEL.textContent = "Time: " + time;



quizEl.addEventListener("click", function() {
  var timerInterval = setInterval(function() {
    time--;
    timeEL.textContent = "Time: " + time;
    quizEl.setAttribute("style", "display:none")
    if (time === 0) {
      titQuesEL.textContent = "Finished";
      clearInterval(timerInterval);
    }
  }, 1000);
});
//in a container have a button called start quiz

//upon clicking button timer starts to count down and first question is displayed

//if the correct answer is chosen display next question

//if the wrong answer is chosen -5 from the timer

//once all questions have been answered the time left on the timer is the score and display a finished page that has a text input for Initials

//the initials then get attached to the score and save in the local storage

//then moves to the highscore page which lists the highscores of all the players with their initials.