const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})

var noOfTestCases;
var stringCombos = [];
var lineNumber = 0;
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        noOfTestCases = Number(input.split(' ')[0]);
    } else {
        input = input.replace(getEOL(), '');
        if (lineNumber % 2 == 0) {
            stringCombos[(lineNumber / 2) - 1] = {
                's1': input
            }
        } else {
            stringCombos[Math.floor(lineNumber / 2) - 1].s2 = input
        }

        if (lineNumber == (noOfTestCases * 2) + 1) {
            findSubStringExistOrNot(stringCombos)
        }
    }
});

function findSubStringExistOrNot(stringCombos) {
    
    for (var i = 0; i < stringCombos.length; i++) {
        for(var charCode = 97; charCode < 97+26;charCode++){
            var char = String.fromCharCode(charCode)
            if(stringCombos[i].s1.indexOf(char) != -1 && stringCombos[i].s2.indexOf(char) != -1){
                console.log('YES');
                break;
            }
        }
        if(charCode == 97+26){
            console.log('NO')
        }
    }
}

module.exports = {
    findSubStringExistOrNot: findSubStringExistOrNot
}