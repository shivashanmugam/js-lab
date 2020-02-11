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
    if (lineNumber == 1) {
        string = input.replace(getEOL(), '');
        console.log(sherlockValidString(string))
    }
});



function sherlockValidString(string) {
    var stringCharMap = getCharecterMap(string);
    var totalVoilations = 0;
    var maxVoilations = 1;
    var lengthToExpect;
    var totalComparisons = 0;

    var charOne, charTwo, charThree;

    for(var charCode = 97; charCode < 97+26;charCode++){
        if(stringCharMap[String.fromCharCode(charCode)] > 0){
            if(!charOne){
                charOne = charCode;
            }else if(!charTwo){
                charTwo = charCode;
            }else{
                charThree = charCode;
            }
        }
    }

    if(stringCharMap[String.fromCharCode(charOne)] != stringCharMap[String.fromCharCode(charTwo)]){
        totalComparisons = 3;
        if((Math.abs(stringCharMap[String.fromCharCode(charOne)] - stringCharMap[String.fromCharCode(charTwo)])) > maxVoilations){
            return 'NO';
        }
        totalVoilations++;
        
        if(stringCharMap[String.fromCharCode(charOne)] == stringCharMap[String.fromCharCode(charThree)]){
            lengthToExpect = stringCharMap[String.fromCharCode(charOne)];
        }else if(stringCharMap[String.fromCharCode(charTwo)] == stringCharMap[String.fromCharCode(charThree)]){
            lengthToExpect = stringCharMap[String.fromCharCode(charTwo)];
        }else{
            return 'NO'
        }
    }else{
        totalComparisons = 2;
        lengthToExpect = stringCharMap[String.fromCharCode(charOne)];
    }

    
    for(var charCode = 97; charCode < 97+26;charCode++){
        if(stringCharMap[String.fromCharCode(charCode)] == 0 || (charCode == charOne || charCode == charTwo))continue;
        if(totalComparisons == 3 && charThree == charCode) continue;
        if(stringCharMap[String.fromCharCode(charCode)] != lengthToExpect){
            totalVoilations++
            if(totalVoilations > maxVoilations){
                return 'NO'
            }
        }
    }
    
    return 'YES';
}

function getCharecterMap(string){
    var map = {}
    for(var charCode = 97; charCode < 97+26;charCode++){
        map[String.fromCharCode(charCode)] = 0;
    }
    for(var i = 0;i < string.length;i++){
        map[string[i]]++;
    }
    return map;
}

module.exports = {
    sherlockValidString : sherlockValidString
}