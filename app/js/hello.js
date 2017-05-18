window.App = {}

App.main = function (el) {
  new App.Calculator(el).init()
}

App.Calculator = class Calculator {
  constructor(el) {
    this.el = el
    this.leftOperand = null
    this.rightOperand = null
    this.result = null
  }

  init() {
    App.utils.registerEnterKey('body', this.updateResult.bind(this))
    $(this.el).on('click', 'button#calcBtn', this.updateResult.bind(this))
    this.render()
  }

  render() {
    $(this.el).html(JST['app/templates/calculator.us']({
      leftOperand: this.leftOperand,
      rightOperand: this.rightOperand,
      result: this.result,
      error: isNaN(this.result)
    }))
  }

  updateResult() {
    this.readInputs()
    this.result = this.sumInputs()
    this.render()
  }

  readInputs() {
    this.leftOperand = App.utils.queryFloat('[name=leftOperand]')
    this.rightOperand = App.utils.queryFloat('[name=rightOperand]')
  }

  sumInputs() {
    return this.leftOperand + this.rightOperand
  }
}

App.utils = {
  registerEnterKey: function (selector, callback) {
    $(selector).on('keypress', function (e) {
      if(e.keyCode === 13) {
        callback(e)
      }
    })
  },
  queryFloat: function (selector) {
    return parseFloat($(selector).val(), 10)
  }
}

$(function () {
  if (typeof jasmine !== 'undefined') { return }
  App.main($('body')[0])
})
