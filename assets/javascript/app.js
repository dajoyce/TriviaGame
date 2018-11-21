var correct = 0;
var incorrect = 0;
//var unanswered = -20;

function MyTimer(callback, val) {
  val = val || 60;
  var timer = setInterval(function() {
    callback(val);
    if (val-- <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}
new MyTimer(function(val) {
  var timerMsg = "00:" + (val >= 10 ? val : "0" + val);
  document.getElementById("timer").textContent = timerMsg;
});

$("#clearButton").on("click", function() {
  console.log("play again");
  document.location.reload(true);
});

$("#button").on("click", function check() {
  if ($("#mc1").is(":checked")) {
    console.log("you win");
    correct++;
  } else {
    console.log("wrong");
    incorrect++;
  }
  if ($("#mc6").is(":checked")) {
    console.log("you win");
    correct++;
  } else {
    console.log("wrong");
    incorrect++;
  }
  if ($("#mc8").is(":checked")) {
    console.log("you win");
    correct++;
  } else {
    console.log("wrong");
    incorrect++;
  }
  if ($("#mc12").is(":checked")) {
    console.log("you win");
    correct++;
  } else {
    console.log("wrong");
    incorrect++;
  }
  if ($("#mc15").is(":checked")) {
    console.log("you win");
    correct++;
  } else {
    console.log("wrong");
    incorrect++;
  }
  if ($("#mc17").is(":checked")) {
    console.log("you win");
    correct++;
  } else {
    console.log("wrong");
    incorrect++;
  }
  if ($("#mc21").is(":checked")) {
    console.log("you win");
    correct++;
  } else {
    console.log("wrong");
    incorrect++;
  }
  if ($("#mc22").is(":checked")) {
    console.log("you win");
    correct++;
  } else {
    console.log("wrong");
    incorrect++;
  }
  if ($("#mc27").is(":checked")) {
    console.log("you win");
    correct++;
  } else {
    console.log("wrong");
    incorrect++;
  }
  if ($("#mc30").is(":checked")) {
    console.log("you win");
    correct++;
  } else {
    console.log("wrong");
    incorrect++;
  }
  console.log(correct);
  console.log(incorrect);
  $("#over").text("It's over, here's how you did:");
  $("#numberCorrect").text("Correct: " + correct);
  $("#numberIncorrect").text("Incorrect: " + incorrect);
});
//This was my attempt to calculate unchecked ones but the code above marks unanswered ones incorrect in the else statement
// $("#button").on("click", function uncheck() {
//   if ($("#mc1").is(":unchecked")) {
//     console.log("you skipped one");
//     unanswered++;
//   }

//   console.log(unanswered);
// });
