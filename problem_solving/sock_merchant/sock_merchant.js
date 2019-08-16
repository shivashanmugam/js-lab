const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var numberOfSocks;
var sockArr;
var lineNumber = 0;
rl.on('line', (input) => {
    lineNumber++;
    switch (lineNumber) {
        case 1:
            input = input.replace(getEOL(), '');
            numberOfSocks = Number(input);
            break;
        case 2:
            input = input.replace(getEOL(), '');
            sockArr = input.split(' ').map(inputChar => Number(inputChar));
            console.log(getPairs(numberOfSocks, sockArr));
    }
});


function getPairs(n, sockArr) {
    let totalPairs = 0;
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if (sockArr[i] == sockArr[j]) {
                totalPairs++;
                sockArr.splice(i, 1);
                sockArr.splice(j - 1, 1);
                n = n - 2;
                i = -1;
                break;
            }
        }
    }
    return totalPairs;
}

module.exports = {
    getPairs: getPairs
}