function add(n1: number, n2: number): number{
    return n1 + n2;
}

function printResults(num: number): void{
    console.log('Result: ' + num);    
}

function addAndHandle(n1:number, n2: number, cb: (num: number) => void): void{
    const result = n1 + n2;
    cb(result);
}

function logName(name: string, cb: (name: string) => void): void {
    const retVal = name;
    cb(retVal);
}

printResults(add(5, 12));

let combinedValues: (n1: number, n2: number) => number;

combinedValues = add;

console.log(combinedValues(4,9));
addAndHandle(10, 20, (sum) => {
    console.log(sum);
});

logName('Byron', (value) => {
    console.log(value);
});