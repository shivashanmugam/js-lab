const readline = require('readline');
var allAnagrams = {};
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})
var noOfInputs;
var inputStrArray = []
var lineNumber = 0;
rl.on('line', (input) => {
    input = input.replace(getEOL(), '');
    lineNumber++;
    if (lineNumber == 1) {
        noOfInputs = Number(input);
    } else if (lineNumber != noOfInputs + 1) {
        inputStrArray[lineNumber - 2] = input;
    } else {
        inputStrArray[lineNumber - 2] = input;
        sherlockAndAnagrams(inputStrArray)
    }
});

function sherlockAndAnagrams(inputStrArray) {
    console.time('start');
    var subStringArray = [];
    for (var count = 0; count < inputStrArray.length; count++) {
        var curStr = inputStrArray[count];
        subStringArray[count] = [];
        for (var subStrLength = 1; subStrLength <= curStr.length; subStrLength++) {
            subStringArray[count][subStrLength - 1] = [];
            for (var i = 0, j = subStrLength - 1; j < curStr.length; j++ , i++) {
                subStringArray[count][subStrLength - 1].push(curStr.slice(i, j + 1))
            }
        }
    }

    for (var count = 0; count < subStringArray.length; count++) {
        var totalAnagrams = 0;
        for(var i = 0;i < subStringArray[count].length;i++){
            totalAnagrams = totalAnagrams + sherlockAndAnagrams1(subStringArray[count][i]);
        }
        console.log(totalAnagrams);
    }
    console.timeEnd('start');
}

function sherlockAndAnagrams1(s) {
    var anagrams = 0;
    for (var len = 1; len < s.length; len++) {
        var parts = [];
        for (var pos = 0; pos <= s.length - len; pos++) {
            var part = s.substr(pos, len);
            parts.push(part.split('').sort().join(''));
        }
        for (var index1 = 0; index1 < parts.length; index1++) {
            var part1 = parts[index1];
            for (var index2 = index1 + 1; index2 < parts.length; index2++) {
                var part2 = parts[index2];
                if (part1 == part2) anagrams++;
            }
        }
    }
    return anagrams;
}

function getTotalSubStringAnagrams(array) {
    var totalAnagrams = 0;
    for(var i = 0;i < array.length;i++){
        var word1 = array[i];
        for(var j = i+1;j < array.length;j++){
            var word2 = array[j];
            if(allAnagrams[`${word1}${word2}`] == undefined){
                if(isAnagrams(word1, word2)){
                    totalAnagrams++;
                }
            } else if(allAnagrams[`${word1}${word2}`] == true){
                totalAnagrams++;
            }
        }
    }
    return totalAnagrams;
}

function isAnagrams(word1, word2){
    word1 = word1.split('').sort().join('');
    word2 = word2.split('').sort().join('');
    isAnagrams[`${word1}${word2}`] = (word1 == word2);
    return word1 == word2;
}

module.exports = {
    sherlockAndAnagrams: sherlockAndAnagrams,
    getTotalSubStringAnagrams : getTotalSubStringAnagrams,
    isAnagrams : isAnagrams
}