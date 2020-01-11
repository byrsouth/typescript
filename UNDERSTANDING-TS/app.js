function add(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result: ' + num);
}
printResults(add(5, 12));
var combinedValues;
combinedValues = add;
console.log(combinedValues(4, 9));
