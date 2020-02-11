const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var arrayLength;
var inputArray = [];
var lineNumber = 0;
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        arrayLength = Number(input);
    } else {
        input = input.replace(getEOL(), '');
        inputArray = input.split(' ');
        console.log(getMinSwaps(inputArray, arrayLength))
    }
});

function getMinSwaps(array, n){

    totalSwap = 0;

    var expected = []
    for(var i = 0;i < n;i++){
        expected[i] = i+1;
    }

    for(i = 0; i < n;i++){
        if(array[i] != expected[i]){
            array[i] = [array[array[i]-1], array[array[i]-1] = array[i]][0];
            totalSwap++
            i = i -1;
        }
    }
    return totalSwap;
}

module.exports = {
    getMinSwaps: getMinSwaps
}