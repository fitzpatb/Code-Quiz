var timeEl = document.getElementById("timer");
var titQuesEl = document.getElementById("title-question");
var quizEl = document.getElementById("quiz");
var questEl = document.getElementById("quest")

var questions = [ {
  question:"How you doing?", one:"Good", two:"Bad", three:"meh", four:"help", answer:"Bad"
}, {
  question:"Will Tomorrow be better?", one:"unlikely", two:"why bother", three:"no chance", four:"give up now", answer:"unlikely"
}
]
var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");
var correct = document.createElement("p");
var wrong = document.createElement("p");

correct.innerHTML = "CORRECT";
wrong.innerHTML = "WRONG";

var i = 0;


var time = 100;

timeEl.textContent = "Time: " + time;



quizEl.addEventListener("click", function() {
  var timerInterval = setInterval(function() {
    time--;
    timeEl.textContent = "Time: " + time;

    if (time === 0) {
      titQuesEl.textContent = "Finished!";
      clearInterval(timerInterval);
    }
  }, 1000);

  quizEl.setAttribute("style", "display:none");
  titQuesEl.textContent = questions[i].question;
  ans1.innerHTML = questions[i].one;
  ans2.innerHTML = questions[i].two;
  ans3.innerHTML = questions[i].three;
  ans4.innerHTML = questions[i].four;
  questEl.appendChild(ans1);
  questEl.appendChild(ans2);
  questEl.appendChild(ans3);
  questEl.appendChild(ans4);

  ans1.addEventListener("click", function() {
    if (ans1.innerHTML === questions[i].answer) {
      i++;
      questEl.appendChild(correct);
      if (i === questions.length) {
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
      }
    } else if (ans1.innerHTML !== questions[i].answer) {
      i++;
      time = time - 5;
      questEl.appendChild(wrong);
      if (i === questions.length) {
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
      }
    }
    titQuesEl.textContent = questions[i].question;
    ans1.innerHTML = questions[i].one;
    ans2.innerHTML = questions[i].two;
    ans3.innerHTML = questions[i].three;
    ans4.innerHTML = questions[i].four;

  })

  ans2.addEventListener("click", function() {
    if (ans2.innerHTML === questions[i].answer) {
      i++;
      questEl.appendChild(correct);
      if (i === questions.length) {
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
      }
    } else if (ans2.innerHTML !== questions[i].answer) {
      i++;
      time = time - 5;
      questEl.appendChild(wrong);
      if (i === questions.length) {
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
      }
    }
    titQuesEl.textContent = questions[i].question;
    ans1.innerHTML = questions[i].one;
    ans2.innerHTML = questions[i].two;
    ans3.innerHTML = questions[i].three;
    ans4.innerHTML = questions[i].four;

  })

  ans3.addEventListener("click", function() {
    if (ans3.innerHTML === questions[i].answer) {
      i++;
      questEl.appendChild(correct);
      if (i === questions.length) {
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
      }
    } else if (ans3.innerHTML !== questions[i].answer) {
      i++;
      time = time - 5;
      questEl.appendChild(wrong);
      if (i === questions.length) {
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
      }
    }
    titQuesEl.textContent = questions[i].question;
    ans1.innerHTML = questions[i].one;
    ans2.innerHTML = questions[i].two;
    ans3.innerHTML = questions[i].three;
    ans4.innerHTML = questions[i].four;

  })

  ans4.addEventListener("click", function() {
    if (ans4.innerHTML === questions[i].answer) {
      i++;
      questEl.appendChild(correct);
      if (i === questions.length) {
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
      }
    } else if (ans4.innerHTML !== questions[i].answer) {
      i++;
      time = time - 5;
      questEl.appendChild(wrong);
      if (i === questions.length) {
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
      }
    }
    titQuesEl.textContent = questions[i].question;
    ans1.innerHTML = questions[i].one;
    ans2.innerHTML = questions[i].two;
    ans3.innerHTML = questions[i].three;
    ans4.innerHTML = questions[i].four;

  })
});
//in a container have a button called start quiz

//upon clicking button timer starts to count down and first question is displayed

//if the correct answer is chosen display next question

//if the wrong answer is chosen -5 from the timer

//once all questions have been answered the time left on the timer is the score and display a finished page that has a text input for Initials

//the initials then get attached to the score and save in the local storage

//then moves to the highscore page which lists the highscores of all the players with their initials.