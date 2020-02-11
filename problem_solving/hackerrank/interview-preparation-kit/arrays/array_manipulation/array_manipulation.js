const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var arrayLength;
var noOfOperations;
var operations = [];
var lineNumber = 0;
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        arrayLength = Number(input.split(' ')[0]);
        noOfOperations = Number(input.split(' ')[1]);
    } else {
        input = input.replace(getEOL(), '');
        operations.push({
            'start' : Number(input.split(' ')[0]),
            'end' : Number(input.split(' ')[1]),
            'add' : Number(input.split(' ')[2]),
        })
        if(lineNumber == noOfOperations+1){
            console.log(getBiggest(arrayLength, operations))   
        }
    }
});

function getBiggest(n, ops){
    var array = [], max = 0;
    for(var i = 0;i < n;i++){
        array[i] = 0
    }

    var operation;
    for(var count = 0;count < ops.length;count++){
        operation = ops[count];
        array[operation['start']-1] = array[operation['start']-1] + operation['add'];
        if(operation['end'] != n){
            array[operation['end']] = array[operation['end']] - operation['add'];
        }
    }
    
    for(var i =1;i < n;i++){
        array[i] = array[i] + array[i - 1];
        if(array[i] > max){
            max = array[i];
        }
    }

    return max;
}

module.exports = {
    getBiggest: getBiggest
}