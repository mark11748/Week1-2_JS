//"npm test" will start jasmine
var calculatorMod = require('./../js/pingpong.js').calculatorModule;

describe('Add',function(){
  it('takes two numbers as parameters; returns sum', function(){
    var calculator1 = new Calculator("green");
    var num1=1;
    var num2=1;
    expect(num1).toEqual(1);
    expect(num2).not.toEqual(calculator1.Add(num1,num2));
  });
});
