const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var numOfSteps;
var steps;
var lineNumber = 0;
rl.on('line', (input) => {
    lineNumber++;
    switch (lineNumber) {
        case 1:
            input = input.replace(getEOL(), '');
            numOfSteps = Number(input);
            break;
        case 2:
            input = input.replace(getEOL(), '');
            steps = input.split('');
            console.log(getValley(numOfSteps, steps));
    }
});


function getValley(numOfSteps, steps){
    var level = 0;
    var valley = 0;
    for(var i = 0; i < numOfSteps; i++){
        if(steps[i] == 'U'){
            level++;
            if(i != 0 && isValley(level, level-1)){
                valley++;
            }
        }
        else if(steps[i] == 'D'){
            level--;
        }
    }
    return valley;
}

function isValley(level, previousLevel){
    if(level == 0 && previousLevel == -1) return true;
    return false;
}

module.exports = {
    getValley : getValley
}