"use strict";
function basicAdd(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhase = 'The result is: ';
var result = basicAdd(number1, number2, printResult, resultPhase);
//# sourceMappingURL=basics.js.map