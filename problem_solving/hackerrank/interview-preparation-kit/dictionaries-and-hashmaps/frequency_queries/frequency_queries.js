const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})

var noOfOps, lineNumber = 0;
var operations = [];
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        noOfOps = Number(input.split(' ')[0]);
    } else {
        input = input.replace(getEOL(), '');
        processInput({'op': Number(input.split(' ')[0]),'data': Number(input.split(' ')[1])})
    }
});

var occurences = {
    0: 0
};
var repeatation = {
    0: 0
};

function processInput(operation) {
    if (operation.op == 1) {
        if (occurences[operation.data] == undefined) {
            occurences[operation.data] = 0;
        }

        occurences[operation.data]++;

        if (repeatation[occurences[operation.data]] == undefined) {
            repeatation[occurences[operation.data]] = 0;
        }
        repeatation[occurences[operation.data]]++;
        repeatation[occurences[operation.data] - 1]--;

    } else if (operation.op == 2) {
        if (occurences[operation.data] != 0 && occurences[operation.data] != undefined) {
            repeatation[occurences[operation.data]]--;
            occurences[operation.data]--;
            repeatation[occurences[operation.data]]++;

        }
    } else {
        if (repeatation[operation.data] > 0) {
            console.log('1')
        } else {
            console.log('0')
        }
    }
}

module.exports = {
    processInput: processInput
}