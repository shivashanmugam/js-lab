const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})

var stringA, stringB, lineNumber = 0;
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        stringA = input.replace(getEOL(), '');
    } 
    if(lineNumber == 2){
        stringB = input.replace(getEOL(), '');
        console.log(makingAnagrams(stringA, stringB))
    }
});

function makingAnagrams(stringA, stringB) {
    var stringAMap = getCharecterMap(stringA)
    var stringBMap = getCharecterMap(stringB)
    var totalCharRemovalsRequired = 0;
    for(var charCode = 97; charCode < 97+26;charCode++){
        totalCharRemovalsRequired = totalCharRemovalsRequired + Math.abs(stringAMap[String.fromCharCode(charCode)] - stringBMap[String.fromCharCode(charCode)])
    }
    return totalCharRemovalsRequired;
    
}

function getCharecterMap(string){
    var map = {}
    for(var charCode = 97; charCode < 97+26;charCode++){
        map[String.fromCharCode(charCode)] = 0;
    }
    for(var i =0;i < string.length;i++){
        map[string[i]]++;
    }
    return map;
}

module.exports = {
    makingAnagrams : makingAnagrams,
    getCharecterMap : getCharecterMap
}