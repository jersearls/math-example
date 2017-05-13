describe(".helloText", function(){
  When(function(){ this.result = helloText(); });
  Then(function(){ expect(this.result).toEqual("This is a calculator. \'Nuff said."); });
});
