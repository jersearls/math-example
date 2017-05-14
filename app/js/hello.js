window.helloText = function() {
  return "This is a calculator. Press the 'Enter' key to calculate.";
};

// JST is javascript template, dynamically rendering the page
window.hello = function() {
  html = JST['app/templates/hello.us']({text: helloText()});
  document.body.innerHTML += html;
};


if(window.addEventListener) {
  window.addEventListener('DOMContentLoaded', window.hello, false);
} else {
  window.attachEvent('onload', window.hello);
}

//get a reference to the button element
//var enterBtn = $('button[name="enter"]');

// enter button actions
window.addEventListener('keydown', function (e) {
  if (e.keyCode !== 13) {
    return;
  }
  var enterSound = document.getElementById("coin");
  var firstNumber = $('input[name="firstnumber"]').val();
  var secondNumber = $('input[name="secondnumber"]').val();
  enterSound.play();
  alert(parseInt(firstNumber, 10) + parseInt(secondNumber, 10));
});

// .get is http get request to server, '/add/5/6' is the root of the domain, defined in config/server.js
//  $.get('/add/5/6', function (response) {
//    alert(response.result);
//  });
//};

