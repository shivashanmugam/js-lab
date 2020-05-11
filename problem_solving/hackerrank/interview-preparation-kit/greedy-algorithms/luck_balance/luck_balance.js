const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var tests = []
var array = [];
var lineNumber = 0;
var assuredLuckBalance = 0;
var importantContestAllowedToLose;
var totalTests;
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        array = input.split(' ')
        importantContestAllowedToLose = array[1]
        totalTests = Number(array[0])
    } else if(lineNumber <= totalTests+1){
        console.log(`-----------${lineNumber}`)
        input = input.replace(getEOL(), '');
        array = input.split(' ').map( (elem) =>  Number(elem))
        if(array[1] == 0){
            assuredLuckBalance = assuredLuckBalance + array[0]
            console.log('\n--------------')
            console.log(lineNumber)
            console.log(assuredLuckBalance)
        }
        tests.push(array)

        if(lineNumber == totalTests+1){
            console.log(luckBalance(tests,importantContestAllowedToLose, assuredLuckBalance))
        }
    }
});

function luckBalance(ImportantTests, importantContestAllowedToLose, assuredLuckBalance){
    console.log(ImportantTests)
    console.log(importantContestAllowedToLose)
    console.log(assuredLuckBalance)
}

module.exports = {
    luckBalance
}