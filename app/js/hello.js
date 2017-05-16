window.helloText = function() {
  return "Press the 'Enter' key or click the button to calculate.";
};

// actual calculation
function calc() {
    var answerField = document.getElementById("answer");
    var errorField = document.getElementById("errorText");
    var enterSound = document.getElementById("coin");
    var errorSound = document.getElementById("errorSound");
    var firstNumber = $('input[name="firstnumber"]').val();
    var secondNumber = $('input[name="secondnumber"]').val();
    var mathAnswer = parseInt(firstNumber, 10) + parseInt(secondNumber, 10);
    if (isNaN(mathAnswer)){
      answerField.innerHTML = "";
      errorSound.play();
      errorField.innerHTML = "ERROR: please enter an integer.";
    } else {
      errorField.innerHTML = "";
      enterSound.currentTime = 0;
      enterSound.play();
      answerField.innerHTML = "  The answer is " + mathAnswer + ".  ";
    }
}

function enterCalc(){
  window.addEventListener('keydown', function (e) {
    console.log(e.target);
    if(e.keyCode === 13){
      calc();
    }
  });
}

function clickCalc(){
  var butn = document.getElementById("calcBtn");
  butn.addEventListener('click', function (e) {
    console.log(e.target);
    calc();
  });
}

// JST is javascript template, dynamically rendering the page
window.hello = function() {
  var html = JST['app/templates/hello.us']({text: helloText()});
  document.body.innerHTML += html;
  enterCalc();
  clickCalc();
};


if(window.addEventListener) {
  window.addEventListener('DOMContentLoaded', window.hello , false);
} else {
  window.attachEvent('onload', window.hello);
}



// .get is http get request to server, '/add/5/6' is the root of the domain, defined in config/server.js
//  $.get('/add/5/6', function (response) {
//    alert(response.result);
//  });
//};
