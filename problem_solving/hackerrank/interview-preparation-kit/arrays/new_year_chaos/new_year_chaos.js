const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var numOfTestcases;
var lineSeqArray = [];
var lineNumber = 0;
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        numOfTestcases = Number(input);
    } else {
        input = input.replace(getEOL(), '');
        if (lineNumber % 2 == 1) {
            lineSeqArray.push(input.split(' '));
            if (Math.floor(lineNumber / 2) == numOfTestcases) {
                parseTestCases(lineSeqArray);
            }
        }
    }
});

function parseTestCases(lineSeqArray){
    // parsing each of the test cases
    for (var count = 0; count < lineSeqArray.length; count++) {
        var array = lineSeqArray[count];
        var n = array.length;
        console.log(newYearChaos(array, n))
    }
}


function newYearChaos(array, n) {
    var minBribes = 0;
    for(var pos = 0;pos < n;pos++){
        if(array[pos] > pos+1){
            if(checkSeqValid(array[pos], pos)){
                continue;
            }else{
                return 'Too chaotic';
            }
        } else if(array[pos] < pos +1){
            minBribes = minBribes + moveElemBetween(array, array[pos] - 1, pos)
            pos = -1;
        }
    }
    return minBribes;
}

function moveElemBetween(array, start, end){
    totalSwaps = 0;
    for(var i = end; i > start;i--){
        swap(array, i, i-1);
        totalSwaps++;
    }
    return totalSwaps;
}

function swap(array, posA, posB){
    array[posA] = [array[posB], array[posB] = array[posA]][0];
}



function checkSeqValid(value, pos){
    if((value-1) - pos <=2){
        return true;
    }
    return false;
}

module.exports = {
    newYearChaos: newYearChaos,
    checkSeqValid : checkSeqValid,
    swap : swap,
    moveElemBetween : moveElemBetween
}