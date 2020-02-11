const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var magazineWordCount, noteWordCount, magazineWords, noteWords;
var lineNumber = 0;
rl.on('line', (input) => {
    input = input.replace(getEOL(), '');
    lineNumber++;
    switch (lineNumber) {
        case 1:
            magazineWordCount = Number(input.split(' ')[0]);
            noteWordCount = Number(input.split(' ')[1]);
            break;
        case 2:
            magazineWords = input.split(' ');
            break;
        case 3:
            noteWords = input.split(' ');
            console.log(checkMagazine(magazineWordCount, noteWordCount, magazineWords, noteWords));
    }
});


function checkMagazine(magazineWordCount, noteWordCount, magazineWords, noteWords){
    for(var n = 0; n < noteWordCount;n++){
        if(magazineWords.includes(noteWords[n])){
            var matchedWordIndex = magazineWords.indexOf(noteWords[n]);
            magazineWords.splice(matchedWordIndex, 1);
        }else{
            return 'No';
        }
    }
    return 'Yes';
}


module.exports = {
    checkMagazine : checkMagazine
}