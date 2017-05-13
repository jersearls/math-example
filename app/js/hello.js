window.helloText = function() {
  return 'This is a calculator. \'Nuff said.';
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

//get a reference to the element
var enterBtn = JST['app/templates/hello.us'](document.getElementById('enter'));

// enter button actions
enterBtn.addEventListener('click', function (e) {
  var firstNumber = $('input[name="firstnumber"]').val();
  var secondNumber = $('input[name="secondnumber"]').val();
  alert(firstNumber);
  });



// .get is http get request to server, '/add/5/6' is the root of the domain, defined in config/server.js
//  $.get('/add/5/6', function (response) {
//    alert(response.result);
//  });
//};

