function add(n1: number, n2: number): number{
    return n1 + n2;
}

function printResults(num: number): void{
    console.log('Result: ' + num);    
}

printResults(add(5, 12));

let combinedValues: (n1: number, n2: number) => number;

combinedValues = add;

console.log(combinedValues(4,9));