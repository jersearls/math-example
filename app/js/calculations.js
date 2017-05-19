App.calculations = {
  sum: function (...operands) {
    return _.reduce(operands, function (memo, operand) {
      return memo + parseFloat(operand, 10)
    }, 0)
  }
}
