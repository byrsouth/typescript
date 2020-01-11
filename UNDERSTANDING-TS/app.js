function add(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
function logName(name, cb) {
    var retVal = name;
    cb(retVal);
}
printResults(add(5, 12));
var combinedValues;
combinedValues = add;
console.log(combinedValues(4, 9));
addAndHandle(10, 20, function (sum) {
    console.log(sum);
});
logName('Byron', function (value) {
    console.log(value);
});
