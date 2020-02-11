const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})

var arrayLength, lineNumber = 0;
var array = [];
var commonRatio;
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        arrayLength = Number(input.split(' ')[0]);
        commonRatio = Number(input.split(' ')[1]);
    } else {
        input = input.replace(getEOL(), '');
        array = input.split(' ').map(str => Number(str));
        console.log(getAllTriplets(array, commonRatio))
    }
});

function getAllTriplets(array, commonRatio) {
    
    var totalTriplets = 0;
    var current;
            
    var map2 = {

    }

    var maps3 = {

    }
    for(var i =0; i < array.length;i++){
        current = array[i];


        if(maps3[current]){
            totalTriplets = totalTriplets + maps3[current];
        }

        if(map2[current] != undefined){
            if(maps3[current * commonRatio] == undefined){
                maps3[current * commonRatio] = 0;
            }
            maps3[current * commonRatio] = maps3[current * commonRatio] + map2[current]
        }

        if(map2[current * commonRatio] == undefined){
            map2[current * commonRatio] = 0;
        }
        map2[current * commonRatio]++;
    }
    
    return totalTriplets;
}

module.exports = {
    getAllTriplets: getAllTriplets
}