const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})

var lineNumber = 0, string;
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 2) {
        string = input.replace(getEOL(), '');
        console.log(getTotalSpecialStrings(string))
    }
});



function getTotalSpecialStrings(string) {
    // TYPE 1 => aaa 
    // TYPE 2 => aabaa
    var PET = false; //previous Eligigible for Type 2
    var countC3 = new Array(string.length);
    var countC3Type2 = new Array(string.length);
    var charC3 = new Array(string.length);
    var [curI, c3I, nexI] = [0,0,1];
    var c3I = 0;
    var returnVal = 0
    var curChar, nexChar;
    while(curI < string.length){
        nexChar = string[nexI]
        curChar = string[curI];
        charC3[c3I] = curChar;
        countC3Type2[c3I] = 0;
        countC3[c3I] = 1;
        while(curChar == nexChar){
            countC3[c3I] =  countC3[c3I] + 1
            nexI++;
            nexChar = string[nexI]
        }


        if(PET && c3I > 1){ //Type 2 check
            if(curChar == charC3[c3I - 2]){
                countC3Type2[c3I] = Math.min(countC3[c3I], countC3[c3I-2]) 
            }
        }

        if(countC3[c3I] == 1){
            PET = true;
        }else{
            PET = false;
        }

        returnVal = returnVal + sumofN(countC3[c3I])  + countC3Type2[c3I];
        c3I++;
        curI = nexI;
        nexI++;
    }
    // console.log(charC3)
    // console.log(countC3)
    // console.log(countC3Type2)
    return returnVal;
}


function sumofN(n){
    return (n*(n+1))/2
}


module.exports = {
    getTotalSpecialStrings: getTotalSpecialStrings
}