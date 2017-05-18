window.App = {}

App.main = function (el) {
  new App.Calculator(el).init()
}

$(function () {
  if (typeof jasmine !== 'undefined') { return }
  App.main($('body')[0])
})

