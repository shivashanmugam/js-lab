const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var numOfClouds;
var clouds;
var lineNumber = 0;
rl.on('line', (input) => {
    lineNumber++;
    switch (lineNumber) {
        case 1:
            input = input.replace(getEOL(), '');
            numOfClouds = Number(input);
            break;
        case 2:
            input = input.replace(getEOL(), '');
            clouds = input.split(' ');
            console.log(getMinJumps(numOfClouds, clouds));
    }
});


function getMinJumps(numOfClouds, clouds) {
    var jumps = 0;
    if(numOfClouds == 2) return 1;
    for(var i = 0; i < numOfClouds-1;){
        if(clouds[i+2] == 1){
            i++;
        }else{
            i = i+2;
        }
        jumps++;
    }
    return jumps;
}

module.exports = {
    getMinJumps: getMinJumps
}