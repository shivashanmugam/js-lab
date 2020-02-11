const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var noOfArrayElements;
var noOfRotations;
var array;
var lineNumber = 0;
rl.on('line', (input) => {
    lineNumber++;
    switch (lineNumber) {
        case 1:
            input = input.replace(getEOL(), '');
            noOfArrayElements = Number(input.split(" ")[0]);
            noOfRotations = Number(input.split(" ")[1]);
            break;
        case 2:
            input = input.replace(getEOL(), '');
            array = input.split(' ');
            console.log(getArrayAfterRotations(array, noOfArrayElements, noOfRotations));
    }
});


function getArrayAfterRotations(array, n, rotations){
    var returnValue = '';
    var rotationsConsolidated = rotations % n;
    for(var i = rotationsConsolidated,count = 0;count < n; count++){
        returnValue = returnValue + array[i] + ' ';
        if(i == n-1){
            i = -1;
        }
        i++;
    } 
    return returnValue;
}

module.exports = {
    getArrayAfterRotations : getArrayAfterRotations
}