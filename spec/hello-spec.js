describe(".helloText", function(){
  When(function(){ this.result = helloText(); });
  Then(function(){ expect(this.result).toEqual("Press the 'Enter' key or click the button to calculate."); });
});
