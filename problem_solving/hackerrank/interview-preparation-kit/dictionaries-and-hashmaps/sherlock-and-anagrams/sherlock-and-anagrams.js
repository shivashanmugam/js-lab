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
    var subStringArray = [];

    /* iterating all the input words  */
    for (var count = 0; count < inputStrArray.length; count++) {
        var curStr = inputStrArray[count];
        /* storing each input word's substring in to a 3D array called subStringArray */
        subStringArray[count] = [];
        for (var subStrLength = 1; subStrLength <= curStr.length; subStrLength++) {
            subStringArray[count][subStrLength - 1] = [];
            for (var i = 0, j = subStrLength - 1; j < curStr.length; j++ , i++) {
                subStringArray[count][subStrLength - 1].push(curStr.slice(i, j + 1))
            }
        }
    }

    /* iterating all the input word's substring */
    for (var count = 0; count < subStringArray.length; count++) {
        var totalAnagrams = 0;
        /* iterating through each each substring array getting the anagram  */
        for(var i = 0;i < subStringArray[count].length;i++){
            totalAnagrams = totalAnagrams + getTotalSubStringAnagrams(subStringArray[count][i]);
        }
        console.log(totalAnagrams);
    }
}

function getTotalSubStringAnagrams(array) {
    var totalAnagrams = 0;
    for(var i = 0;i < array.length;i++){
        var word1 = array[i];
        for(var j = i+1;j < array.length;j++){
            var word2 = array[j];
            if(allAnagrams[`${word1}${word2}`] == undefined){
                if(isAnagrams1(word1, word2)){
                    totalAnagrams++;
                }
            } else if(allAnagrams[`${word1}${word2}`] == true){
                totalAnagrams++;
            }
        }
    }
    return totalAnagrams;
}

/* sorts each word and checks whether both are same after combining */
function isAnagramsMethodOne(word1, word2){
    word1 = word1.split('').sort().join('');
    word2 = word2.split('').sort().join('');
    allAnagrams[`${word1}${word2}`] = (word1 == word2);
    return word1 == word2;
}


/* checks each letter occurence of word1 with word2, If all matches returns true, Else false */
function isAnagramsMethodTwo(word1, word2){
    var evaluatedLetters = {};
    for(var letterIndex = 0;letterIndex < word1.length;letterIndex++){
        var letter = word1[letterIndex];
        /* skipping if already evaluted the letter */
        if(evaluatedLetters[letter]) continue;

        var letterOccurenceWord1 = word1.match(new RegExp(letter, 'g')).length;
        var letterOccurenceWord2 = word2.match(new RegExp(letter, 'g')) ? word2.match(new RegExp(letter, 'g')).length :  0;
        if(letterOccurenceWord1 == letterOccurenceWord2){
            evaluatedLetters[letter] = letter;
            continue;
        }else{
            allAnagrams[`${word1}${word2}`] = false;
            return false;
        }
    }
    allAnagrams[`${word1}${word2}`] = true;
    return true;
}

module.exports = {
    sherlockAndAnagrams: sherlockAndAnagrams,
    getTotalSubStringAnagrams : getTotalSubStringAnagrams,
    isAnagrams : isAnagrams
}