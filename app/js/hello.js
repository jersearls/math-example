window.helloText = function() {
  return 'Hello World!';
};

window.hello = function() {
  html = JST['app/templates/hello.us']({text: helloText()});
  document.body.innerHTML += html;

  $.get('/add/5/6', function (response) {
    alert(response.result);
  });
};

if(window.addEventListener) {
  window.addEventListener('DOMContentLoaded', window.hello, false);
} else {
  window.attachEvent('onload', window.hello);
}
