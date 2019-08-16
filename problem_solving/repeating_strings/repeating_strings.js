const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var string;
var repeatingStringLength;
var lineNumber = 0;
rl.on('line', (input) => {
    lineNumber++;
    switch (lineNumber) {
        case 1:
            input = input.replace(getEOL(), '');
            string = input;
            break;
        case 2:
            input = input.replace(getEOL(), '');
            repeatingStringLength = Number(input);
            console.log(getNoOf_A_inString(string, repeatingStringLength));
            break;
    }
});


function getNoOf_A_inString(string, repeatingStringLength) {
    var repeatationofCharForEachIndexLength = getRepeatationofCharForEachIndexLength(string, 'a');
    var quotient = repeatationofCharForEachIndexLength[string.length] * Math.floor(repeatingStringLength / string.length);
    var remainder = repeatationofCharForEachIndexLength[(repeatingStringLength % string.length)]
    return  quotient + remainder;
}

function getRepeatationofCharForEachIndexLength(string, char){
    var repeatationofCharForEachIndexLength = {
        '0' : 0
    }
    for(var i = 1; i <= string.length;i++){
        repeatationofCharForEachIndexLength[i] = getCharRepeatationInAString(string.substr(0, i), char);
    }
    return repeatationofCharForEachIndexLength;
}

function getCharRepeatationInAString(string, char){
    return string.replace(new RegExp(`[^${char}]`,'g'), "").length;
}

module.exports = {
    getNoOf_A_inString: getNoOf_A_inString,
    getRepeatationofCharForEachIndexLength : getRepeatationofCharForEachIndexLength,
    getCharRepeatationInAString : getCharRepeatationInAString
}