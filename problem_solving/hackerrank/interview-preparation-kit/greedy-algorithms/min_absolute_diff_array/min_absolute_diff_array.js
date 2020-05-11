const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var arrayLength;
var array = [];
var lineNumber = 0;
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        arrayLength = Number(input);
    } else {
        input = input.replace(getEOL(), '');
        array = input.split(' ')
        console.log(min_absolute_diff_array(array))
    }
});

function min_absolute_diff_array(array){
    array.sort( (a,b)=>{
        return a-b;
    })
    var smallest_absolute = Math.abs(array[0] - array[1]), cur_abs;
    for(var i = 1;i < array.length-1;i++){
        cur_abs = Math.abs(array[i] - array[i+1])
        if(cur_abs < smallest_absolute){
            smallest_absolute = cur_abs
        }
    }
    return smallest_absolute;
}

module.exports = {
    min_absolute_diff_array
}