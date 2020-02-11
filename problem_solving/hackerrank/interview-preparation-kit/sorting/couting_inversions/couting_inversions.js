const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})

var totalSwaps = 0, lineNumber = 0;
var arraySet = []
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        totalInput = Number(input.split(' ')[0]);
    } 
    else if(lineNumber % 2 == 0){

    }
    else {
        totalSwaps = 0;
        input = input.replace(getEOL(), '');
        let array = input.split(' ').map(str => Number(str));
        arraySet.push(array)
        getTotalSwapsUsingMergeSort(array)
        console.log(totalSwaps);
    }
});

function getTotalSwapsUsingMergeSort(array) { 
    
    var mid_element = Math.floor(array.length / 2 );

    var left_array = array.slice(0, mid_element);
    var right_array = array.slice(mid_element, array.length);
    
    if(left_array.length > 1){
        left_array = getTotalSwapsUsingMergeSort(left_array)
    }
    if(right_array.length > 1){
        right_array = getTotalSwapsUsingMergeSort(right_array)
    }

    var sorted_array = [];
    for(var left_i = 0, right_i = 0; left_i < left_array.length && right_i < right_array.length;){
        if(left_array[left_i]  <= right_array[right_i]){
            sorted_array.push(left_array[left_i++])
        } else {
            totalSwaps = totalSwaps + left_array.length - left_i;
            sorted_array.push(right_array[right_i++])
        }
    }
    if(right_i < right_array.length){
        sorted_array = sorted_array.concat(right_array.slice(right_i, right_array.length))
    } else{
        sorted_array = sorted_array.concat(left_array.slice(left_i, left_array.length))
    }
    return sorted_array
}

module.exports = {
    getTotalSwapsUsingMergeSort : getTotalSwapsUsingMergeSort
}