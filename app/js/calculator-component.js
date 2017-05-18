var utils = App.utils

App.CalculatorComponent = class CalculatorComponent {
  constructor(el) {
    this.el = el
    this.leftOperand = null
    this.rightOperand = null
    this.result = null
  }

  init() {
    utils.registerEnterKey('body', this.updateResult.bind(this))
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
    this.result = App.calculations.sum(this.leftOperand, this.rightOperand)
    this.render()
  }

  readInputs() {
    this.leftOperand = utils.queryFloat('[name=leftOperand]')
    this.rightOperand = utils.queryFloat('[name=rightOperand]')
  }
}
