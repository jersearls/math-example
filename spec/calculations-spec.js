var subject
describe('App.calculations', function () {
  describe('.sum', function () {
    beforeEach(function () {
      subject = App.calculations.sum
    })
    it('adds numbers good', function () {
      expect(subject(5,8)).toEqual(13)
      expect(subject(5.1,8)).toEqual(13.1)
      expect(subject(0,0)).toEqual(0)
      expect(subject('poop', 5)).toBeNaN()
    })
  })
})
