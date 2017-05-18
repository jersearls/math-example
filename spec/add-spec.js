describe('addition feature', function () {
  beforeEach(function () {
    App.main(affix('#sandbox')[0])
  })

  context('two integers', function () {
    it('adds them', function () {
      // Arrange / Given
      $('[name=leftOperand]').val(3)
      $('[name=rightOperand]').val(5)

      // Act / When
      $('button#calcBtn').click()

      // Then
      expect($('.result').text().trim()).toEqual('The answer is 8.')
    })
  })

  context('two floats', function () {
    it('adds them too', function () {
      $('[name=leftOperand]').val("3.1")
      $('[name=rightOperand]').val("5.2")

      $('button#calcBtn').click()

      expect($('.result').text().trim()).toEqual('The answer is 8.3.')
    })

  })
  context('an int and a float', function () {})
  context('a number and a non-numeric string', function () {})
  context('a number and a blank field', function () {})
  context('two blank fields', function () {})
})
