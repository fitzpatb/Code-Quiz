//variables
var timeEl = document.getElementById("timer");
var titQuesEl = document.getElementById("title-question");
var questEl = document.getElementById("quest");
var viewEl = document.getElementById("view");

var questions = [ {
  question:"'hello' is an example of which data type?", one:"string", two:"array", three:"object", four:"boolean", answer:"string"
}, {
  question:"What language is responsible for style associated with a web page?", one:"JavaScrpt", two:"Bootstrap", three:"CSS", four:"HTML", answer:"CSS"
}, {
  question:"A true or false value is what data type?", one:"string", two:"array", three:"object", four:"boolean", answer:"boolean"
}, {
  question:"Which of the following is not a coding language?", one:"Javascript", two:"Bootstrap", three:"CSS", four:"HTML", answer:"Bootstrap"
}, {
  question:"Which language is responsible for the framework of a web page?", one:"Javascript", two:"Bootstrap", three:"CSS", four:"HTML", answer:"HTML"
}
]

var quiz = document.createElement("button");
quiz.textContent = "Start Quiz";
questEl.appendChild(quiz);
quiz.classList.add("btn")
quiz.classList.add("btn-primary");

var ans1 = document.createElement("button");
ans1.classList.add("btn")
ans1.classList.add("btn-primary");
var ans2 = document.createElement("button");
ans2.classList.add("btn")
ans2.classList.add("btn-primary");
var ans3 = document.createElement("button");
ans3.classList.add("btn")
ans3.classList.add("btn-primary");
var ans4 = document.createElement("button");
ans4.classList.add("btn")
ans4.classList.add("btn-primary");

var submit = document.createElement("button");
submit.textContent = "submit highscore";
submit.classList.add("btn");
submit.classList.add("btn-primary");

var restart = document.createElement("button");
restart.textContent = "Take quiz again";
restart.classList.add("btn");
restart.classList.add("btn-primary");

var showScore = document.createElement("div");
showScore.classList.add("show");

var res = document.createElement("div");
res.classList.add("res");

var initials = document.createElement("input");
initials.classList.add("initials");
initials.setAttribute("type", "text");
initials.setAttribute("placeholder", "Initials");
initials.textContent = "Initials";

var highScores = document.createElement("div");
highScores.classList.add("high");



var score = 0;
var time = 50;

timeEl.textContent = "Time: " + time;


//first button to start quiz
quiz.addEventListener("click", function() {
  var timerInterval = setInterval(function() {
    time--;
    timeEl.textContent = "Time: " + time;

    if (time === 0) {
      titQuesEl.textContent = "Finished!";
      clearInterval(timerInterval);
      ans1.remove();
      ans2.remove();
      ans3.remove();
      ans4.remove();
      res.remove();
      if (score === 0) {
        score = 0;
      } else {
        var bonus = time;
        score = score + bonus;
      }
      showScore.textContent = "Score: " + score;
      localStorage.setItem("score", score);
      questEl.appendChild(showScore);
      questEl.appendChild(initials);
      questEl.appendChild(submit);
      questEl.appendChild(res);
    }
  }, 1000);
  var i = 0;

  quiz.setAttribute("style", "display:none");
  titQuesEl.textContent = questions[i].question;
  ans1.textContent = questions[i].one;
  ans2.textContent = questions[i].two;
  ans3.textContent = questions[i].three;
  ans4.textContent = questions[i].four;
  questEl.appendChild(ans1);
  questEl.appendChild(ans2);
  questEl.appendChild(ans3);
  questEl.appendChild(ans4);
  questEl.appendChild(res);

  //answer buttons to run quiz and loop through questions
  ans1.addEventListener("click", function() {
    i = i + 1;
    if (i === questions.length) {
      clearInterval(timerInterval);
      titQuesEl.textContent = "Finished!"
      ans1.remove();
      ans2.remove();
      ans3.remove();
      ans4.remove();
      if (score === 0) {
        score = 0;
      } else {
        var bonus = time;
        score = score + bonus;
      }
      showScore.textContent = "Score: " + score;
      localStorage.setItem("score", score);
      questEl.appendChild(showScore);
      questEl.appendChild(initials);
      questEl.appendChild(submit);
    }else if (ans1.textContent === questions[i - 1].answer) {
      score++;
      res.textContent = "CORRECT";
      res.style.color = "green";
      titQuesEl.textContent = questions[i].question;
      ans1.textContent = questions[i].one;
      ans2.textContent = questions[i].two;
      ans3.textContent = questions[i].three;
      ans4.textContent = questions[i].four;
    } else {
      time = time - 5;
      res.textContent = "WRONG";
      res.style.color = "red";
      titQuesEl.textContent = questions[i].question;
      ans1.textContent = questions[i].one;
      ans2.textContent = questions[i].two;
      ans3.textContent = questions[i].three;
      ans4.textContent = questions[i].four;
    }

  });

  ans2.addEventListener("click", function() {
    i = i + 1;
    if (i === questions.length) {
      clearInterval(timerInterval);
      titQuesEl.textContent = "Finished!"
      ans1.remove();
      ans2.remove();
      ans3.remove();
      ans4.remove();
      if (score === 0) {
        score = 0;
      } else {
        var bonus = time;
        score = score + bonus;
      }
      showScore.textContent = "Score: " + score;
      localStorage.setItem("score", score);
      questEl.appendChild(showScore);
      questEl.appendChild(initials);
      questEl.appendChild(submit);
    }else if (ans2.textContent === questions[i - 1].answer) {
      score++;
      res.textContent = "CORRECT";
      res.style.color = "green";
      titQuesEl.textContent = questions[i].question;
      ans1.textContent = questions[i].one;
      ans2.textContent = questions[i].two;
      ans3.textContent = questions[i].three;
      ans4.textContent = questions[i].four;
    } else {
      time = time - 5;
      res.textContent = "WRONG";
      res.style.color = "red";
      titQuesEl.textContent = questions[i].question;
      ans1.textContent = questions[i].one;
      ans2.textContent = questions[i].two;
      ans3.textContent = questions[i].three;
      ans4.textContent = questions[i].four;
    }

  });

  ans3.addEventListener("click", function() {
    i = i + 1;
    if (i === questions.length) {
      clearInterval(timerInterval);
      titQuesEl.textContent = "Finished!"
      ans1.remove();
      ans2.remove();
      ans3.remove();
      ans4.remove();
      if (score === 0) {
        score = 0;
      } else {
        var bonus = time;
        score = score + bonus;
      }
      showScore.textContent = "Score: " + score;
      localStorage.setItem("score", score);
      questEl.appendChild(showScore);
      questEl.appendChild(initials);
      questEl.appendChild(submit);
    }else if (ans3.textContent === questions[i - 1].answer) {
      score++;
      res.textContent = "CORRECT";
      res.style.color = "green";
      titQuesEl.textContent = questions[i].question;
      ans1.textContent = questions[i].one;
      ans2.textContent = questions[i].two;
      ans3.textContent = questions[i].three;
      ans4.textContent = questions[i].four;
    } else {
      time = time - 5;
      res.textContent = "WRONG";
      res.style.color = "red";
      titQuesEl.textContent = questions[i].question;
      ans1.textContent = questions[i].one;
      ans2.textContent = questions[i].two;
      ans3.textContent = questions[i].three;
      ans4.textContent = questions[i].four;
    }

  });

  ans4.addEventListener("click", function() {
    i = i + 1;
    if (i === questions.length) {
      clearInterval(timerInterval);
      titQuesEl.textContent = "Finished!"
      ans1.remove();
      ans2.remove();
      ans3.remove();
      ans4.remove();
      if (score === 0) {
        score = 0;
      } else {
        var bonus = time;
        score = score + bonus;
      }
      showScore.textContent = "Score: " + score;
      localStorage.setItem("score", score);
      questEl.appendChild(showScore);
      questEl.appendChild(initials);
      questEl.appendChild(submit);
    }else if (ans4.textContent === questions[i - 1].answer) {
      score++;
      res.textContent = "CORRECT";
      res.style.color = "green";
      titQuesEl.textContent = questions[i].question;
      ans1.textContent = questions[i].one;
      ans2.textContent = questions[i].two;
      ans3.textContent = questions[i].three;
      ans4.textContent = questions[i].four;
    } else {
      time = time - 5;
      res.textContent = "WRONG";
      res.style.color = "red";
      titQuesEl.textContent = questions[i].question;
      ans1.textContent = questions[i].one;
      ans2.textContent = questions[i].two;
      ans3.textContent = questions[i].three;
      ans4.textContent = questions[i].four;
    }

  });
});

submit.addEventListener("click", function() {
  var allScores = [];
  var highScore = {
    initials: initials.value,
    score: localStorage.getItem("score")
  }
  localStorage.setItem("highScore", JSON.stringify(highScore));
  questEl.appendChild(highScores);
  allScores.push(highScore);
  localStorage.setItem("allScores", allScores);
  console.log(allScores);
  for (var j = 0; j < allScores.length; j++) {
    highScores.textContent += allScores[j].initials + ": " + allScores[j].score + " ";
  }
  titQuesEl.textContent = "High scores";
  res.remove();
  showScore.remove();
  initials.remove();
  submit.remove();

  questEl.appendChild(restart);
  //save initials and score to local storage
  //view list of highscores
  //change finished to HighScores
  //show list of highscores
  //make a start quiz again button appear
  //make a button that clears the highscores
});

restart.addEventListener("click", function() {
  score = 0;
  time = 50;
  i = 0;
  highScores.remove();
  restart.remove();
  timeEl.textContent = "Time: " + time;
  titQuesEl.textContent = "Coding Quiz Challange";
  quiz.setAttribute("style", "display:block");
  console.log(score);

})

viewEl.addEventListener("click", function() {
  titQuesEl.textContent = "High scores";
  res.remove();
  initials.remove();
  submit.remove();
  ans1.remove();
  ans2.remove();
  ans3.remove();
  ans4.remove();
  showScore.remove();
  quiz.setAttribute("style", "display:none");
  questEl.appendChild(highScores);
  questEl.appendChild(restart);
})
//in a container have a button called start quiz

//upon clicking button timer starts to count down and first question is displayed

//if the CORRECT answer is chosen display next question

//if the WRONG answer is chosen -5 from the timer

//once all questions have been answered the time left on the timer is the score and display a finished page that has a text input for Initials

//the initials then get attached to the score and save in the local storage

//then moves to the highscore page which lists the highscores of all the players with their initials.