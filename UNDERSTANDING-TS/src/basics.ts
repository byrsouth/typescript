function basicAdd(n1: number, n2: number, showResult: boolean, phrase: string): void | number {
  const result = n1 + n2
    if(showResult){
        console.log(phrase + result);
    } else {
        return result;
    }    
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhase = 'The result is: '

const result = basicAdd(number1, number2, printResult, resultPhase);