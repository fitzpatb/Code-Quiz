var timeEl = document.getElementById("timer");
var titQuesEl = document.getElementById("title-question");
var questEl = document.getElementById("quest")

var questions = [ {
  question:"'hello' is an example of which data type?", one:"string", two:"array", three:"object", four:"boolean", answer:"string"
}, {
  question:"What language is responsible for style associated with a web page?", one:"JavaScrpt", two:"Bootstrap", three:"CSS", four:"HTML", answer:"CSS"
}, {
  question:"A true or false value is what data type?", one:"string", two:"array", three:"object", four:"boolean", answer:"boolean"
}, {
  question:"Which of the following is not a coding language?", one:"Javascript", two:"Bootstrap", three:"CSS", four:"HTML", answer:"Bootstrap"
}
]

var quiz = document.createElement("button");
quiz.innerHTML = "Start Quiz";
questEl.appendChild(quiz);

var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");

var submit = document.createElement("button");
submit.innerHTML = "submit highscore";

var restart = document.createElement("button");
restart.innerHTML = "Take quiz again";

var res5 = document.createElement("div");

var initials = document.createElement("input");
initials.setAttribute("type", "text");
initials.setAttribute("placeholder", "initials");
var highScores = document.createElement("div");

var i = 0;

var score = 0;
var time = 100;

timeEl.textContent = "Time: " + time;



quiz.addEventListener("click", function() {
  var timerInterval = setInterval(function() {
    time--;
    timeEl.textContent = "Time: " + time;

    if (time === 0) {
      titQuesEl.textContent = "Finished!";
      clearInterval(timerInterval);
    }
  }, 1000);
  i = 0;

  quiz.setAttribute("style", "display:none");
  titQuesEl.textContent = questions[i].question;
  ans1.innerHTML = questions[i].one;
  ans2.innerHTML = questions[i].two;
  ans3.innerHTML = questions[i].three;
  ans4.innerHTML = questions[i].four;
  status.innerHTML = "correct";
  questEl.appendChild(ans1);
  questEl.appendChild(ans2);
  questEl.appendChild(ans3);
  questEl.appendChild(ans4);
  questEl.appendChild(res5);


  ans1.addEventListener("click", function() {
    if (ans1.innerHTML === questions[i].answer) {
      i = i + 1;
      score++;
      res5.innerHTML = "correct";
      if (i === questions.length) {
        clearInterval(timerInterval);
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
        var bonus = time;
        score = score + bonus;
        res5.innerHTML = "Score: " + score;
        localStorage.setItem("score", score);
        questEl.appendChild(initials);
        questEl.appendChild(submit);
      } else if (i < questions.length) {
        titQuesEl.textContent = questions[i].question;
        ans1.innerHTML = questions[i].one;
        ans2.innerHTML = questions[i].two;
        ans3.innerHTML = questions[i].three;
        ans4.innerHTML = questions[i].four;
      }
    } else if (ans1.innerHTML !== questions[i].answer) {
      i = i + 1;
      time = time - 5;
      res5.innerHTML = "wrong";
      if (i === questions.length) {
        clearInterval(timerInterval);
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
        var bonus = time;
        score = score + bonus;
        res5.innerHTML = "Score: " + score;
        localStorage.setItem("score", score);
        questEl.appendChild(initials);
        questEl.appendChild(submit);
      } else if (i < questions.length) {
        titQuesEl.textContent = questions[i].question;
        ans1.innerHTML = questions[i].one;
        ans2.innerHTML = questions[i].two;
        ans3.innerHTML = questions[i].three;
        ans4.innerHTML = questions[i].four;
      }
    }

  })

  ans2.addEventListener("click", function() {
    if (ans2.innerHTML === questions[i].answer) {
      i = i + 1;
      score++;
      res5.innerHTML = "correct";
      if (i === questions.length) {
        clearInterval(timerInterval);
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
        var bonus = time;
        score = score + bonus;
        res5.innerHTML = "Score: " + score;
        localStorage.setItem("score", score);
        questEl.appendChild(initials);
        questEl.appendChild(submit);
      } else if (i < questions.length) {
        titQuesEl.textContent = questions[i].question;
        ans1.innerHTML = questions[i].one;
        ans2.innerHTML = questions[i].two;
        ans3.innerHTML = questions[i].three;
        ans4.innerHTML = questions[i].four;
      }
    } else if (ans2.innerHTML !== questions[i].answer) {
      i = i + 1;
      time = time - 5;
      res5.innerHTML = "wrong";
      if (i === questions.length) {
        clearInterval(timerInterval);
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
        var bonus = time;
        score = score + bonus;
        res5.innerHTML = "Score: " + score;
        localStorage.setItem("score", score);
        questEl.appendChild(initials);
        questEl.appendChild(submit);
      } else if (i < questions.length) {
        titQuesEl.textContent = questions[i].question;
        ans1.innerHTML = questions[i].one;
        ans2.innerHTML = questions[i].two;
        ans3.innerHTML = questions[i].three;
        ans4.innerHTML = questions[i].four;
      }
    }
  })

  ans3.addEventListener("click", function() {
    if (ans3.innerHTML === questions[i].answer) {
      i = i + 1;
      score++;
      res5.innerHTML = "correct";
      if (i === questions.length) {
        clearInterval(timerInterval);
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
        var bonus = time;
        score = score + bonus;
        res5.innerHTML = "Score: " + score;
        localStorage.setItem("score", score);
        questEl.appendChild(initials);
        questEl.appendChild(submit);
      } else if (i < questions.length) {
        titQuesEl.textContent = questions[i].question;
        ans1.innerHTML = questions[i].one;
        ans2.innerHTML = questions[i].two;
        ans3.innerHTML = questions[i].three;
        ans4.innerHTML = questions[i].four;
      }
    } else if (ans3.innerHTML !== questions[i].answer) {
      i = i + 1;
      time = time - 5;
      res5.innerHTML = "wrong";
      if (i === questions.length) {
        clearInterval(timerInterval);
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
        var bonus = time;
        score = score + bonus;
        res5.innerHTML = "Score: " + score;
        localStorage.setItem("score", score);
        questEl.appendChild(initials);
        questEl.appendChild(submit);
      } else if (i < questions.length) {
        titQuesEl.textContent = questions[i].question;
        ans1.innerHTML = questions[i].one;
        ans2.innerHTML = questions[i].two;
        ans3.innerHTML = questions[i].three;
        ans4.innerHTML = questions[i].four;
      }
    }

  })

  ans4.addEventListener("click", function() {
    if (ans4.innerHTML === questions[i].answer) {
      i = i + 1;
      score++;
      res5.innerHTML = "correct";
      if (i === questions.length) {
        clearInterval(timerInterval);
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
        var bonus = time;
        score = score + bonus;
        res5.innerHTML = "Score: " + score;
        localStorage.setItem("score", score);
        questEl.appendChild(initials);
        questEl.appendChild(submit);
      } else if (i < questions.length) {
        titQuesEl.textContent = questions[i].question;
        ans1.innerHTML = questions[i].one;
        ans2.innerHTML = questions[i].two;
        ans3.innerHTML = questions[i].three;
        ans4.innerHTML = questions[i].four;
      }
    } else if (ans4.innerHTML !== questions[i].answer) {
      i = i + 1;
      time = time - 5;
      res5.innerHTML = "wrong";
      if (i === questions.length) {
        clearInterval(timerInterval);
        titQuesEl.textContent = "Finished!"
        ans1.remove();
        ans2.remove();
        ans3.remove();
        ans4.remove();
        var bonus = time;
        score = score + bonus;
        res5.innerHTML = "Score: " + score;
        localStorage.setItem("score", score);
        questEl.appendChild(initials);
        questEl.appendChild(submit);
      } else if (i < questions.length) {
        titQuesEl.textContent = questions[i].question;
        ans1.innerHTML = questions[i].one;
        ans2.innerHTML = questions[i].two;
        ans3.innerHTML = questions[i].three;
        ans4.innerHTML = questions[i].four;
      }
    }
  })
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
    highScores.innerHTML += allScores[j].initials + ": " + allScores[j].score;
  }
  titQuesEl.textContent = "High scores";
  res5.remove();
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
  time = 100;
  i = 0;
  highScores.remove();
  restart.remove();
  timeEl.textContent = "Time: " + time;
  titQuesEl.textContent = "Coding Quiz Challange";
  quiz.setAttribute("style", "display:block");
  console.log(score);

})
//in a container have a button called start quiz

//upon clicking button timer starts to count down and first question is displayed

//if the correct answer is chosen display next question

//if the wrong answer is chosen -5 from the timer

//once all questions have been answered the time left on the timer is the score and display a finished page that has a text input for Initials

//the initials then get attached to the score and save in the local storage

//then moves to the highscore page which lists the highscores of all the players with their initials.