const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})

var totalTestCases, lineNumber = 0, testCases = [], string;
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        totalTestCases = Number(input.replace(getEOL(), ''));
    }else{
        string = input.replace(getEOL(), '');
        console.log(alternateCharacters(string))
    }
});

function alternateCharacters(string) {
    var characterToRemove = 0;
    for(var i = 0; i < string.length-1;i++){
        if(string[i] == string[i+1]){
            characterToRemove++;
        }
    }
    return characterToRemove;
}

module.exports = {
    alternateCharacters : alternateCharacters
}