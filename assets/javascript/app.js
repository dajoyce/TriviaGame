$(document).ready(function() {
  var question1 = document.quiz.quest1.value;
  var question2 = document.quiz.quest2.value;
  var question3 = document.quiz.quest3.value;
  var question4 = document.quiz.quest4.value;
  var question5 = document.quiz.quest5.value;
  var question6 = document.quiz.quest6.value;
  var question7 = document.quiz.quest7.value;
  var question8 = document.quiz.quest8.value;
  var question9 = document.quiz.quest9.value;
  var question10 = document.quiz.quest10.value;
  var correct = 0;
  var incorrect = 0;

  $("#button").on("click", function check() {
    if (question1 == "dieHard") {
      correct++;
    } else {
      incorrect++;
    }
    if (question2 == "deadpool") {
      correct++;
    } else {
      incorrect++;
    }

    if (question3 == "ghostBusters") {
      correct++;
    } else {
      incorrect++;
    }

    if (question4 == "ghostBustersTwo") {
      correct++;
    } else {
      incorrect++;
    }

    if (question5 == "fixItFelix") {
      correct++;
    } else {
      incorrect++;
    }

    if (question6 == "hulk") {
      correct++;
    } else {
      incorrect++;
    }
    if (question7 == "tmyshecira") {
      correct++;
    } else {
      incorrect++;
    }

    if (question8 == "arnold") {
      correct++;
    } else {
      incorrect++;
    }

    if (question9 == "toto") {
      correct++;
    } else {
      incorrect++;
    }
    if (question10 == "kevin") {
      correct++;
    } else {
      incorrect++;
    }

    $("#numberCorrect").text("Correct: " + correct);
  });
});
