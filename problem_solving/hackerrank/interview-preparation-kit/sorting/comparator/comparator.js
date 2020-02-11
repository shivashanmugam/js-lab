const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})

var arrayLength, lineNumber = 0, playersArray = [];
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        arrayLength = Number(input.split(' ')[0]);
    } else {
        input = input.replace(getEOL(), '');
        playersArray.push([input.split(' ')[0], Number(input.split(' ')[1])])
        if(lineNumber == arrayLength + 1){
            console.log(createOrderlyScoreBoard(playersArray));
        }
    }
});

function createOrderlyScoreBoard(playersArray) {
    playersArray = playersArray.sort(ScoreBoardcomparator)
    return playersArray;

}

function ScoreBoardcomparator (playerA, playerB){
    if(playerA[1] > playerB[1]) {return -1}
    else if(playerA[1] < playerB[1]) {return 1}
    else {
        if([[playerA[0], playerB[0]].sort()][0] == playerA[0]){
            return 0;
        }else{
            return 1;
        }
    }
}



module.exports = {
    createOrderlyScoreBoard : createOrderlyScoreBoard
}