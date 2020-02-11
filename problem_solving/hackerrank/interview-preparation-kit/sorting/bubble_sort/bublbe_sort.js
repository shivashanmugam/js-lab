const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})

var arrayLength, lineNumber = 0;
var array = [];
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        arrayLength = Number(input.split(' ')[0]);
    } else {
        input = input.replace(getEOL(), '');
        array = input.split(' ').map(str => Number(str));
        bubbleSortStat(array)
    }
});

function bubbleSortStat(a) {
    console.log(a);
    var totalSwaps  = 0;
    var n = a.length;
    for (var i = 0; i < n; i++) {

        for (var j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                a[j] = [a[j+1], a[j+1]= a[j]][0]
                totalSwaps++;
            }
        }
    }
    console.log(`Array is sorted in ${totalSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]}`);
}


module.exports = {
    bubbleSortStat: bubbleSortStat
}