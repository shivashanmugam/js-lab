const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var array = [[], [], [], [], [], []];
var lineNumber = 0;
rl.on('line', (input) => {
    input = input.replace(getEOL(), '');
    lineNumber++;
    switch (lineNumber) {
        case 1:
            array[0] = input.split(' ').map(numStr => Number(numStr));
            break;
        case 2:
            array[1] = input.split(' ').map(numStr => Number(numStr))
            break;
        case 3:
            array[2] = input.split(' ').map(numStr => Number(numStr))
            break;
        case 4:
            array[3] = input.split(' ').map(numStr => Number(numStr))
            break;
        case 5:
            array[4] = input.split(' ').map(numStr => Number(numStr))
            break;
        case 6:
            array[5] = input.split(' ').map(numStr => Number(numStr))
            console.log(hourGlassHighTotal(array))
            break;
    }
});


function hourGlassHighTotal(array) {
    var max = -10000;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if(getHourGlassSum(array, i, j) > max){
                max = getHourGlassSum(array, i, j);
            }
        }
    }
    return max;
}

function getHourGlassSum(array, i, j) {
    var hourGlassTop = array[i][j] + array[i][j + 1] + array[i][j + 2]
    var hourGlassMiddle = array[i + 1][j + 1]
    var hourGlassBottom = array[i + 2][j] + array[i + 2][j + 1] + array[i + 2][j + 2]
    return hourGlassTop + hourGlassMiddle + hourGlassBottom
}




module.exports = {
    hourGlassHighTotal: hourGlassHighTotal
}