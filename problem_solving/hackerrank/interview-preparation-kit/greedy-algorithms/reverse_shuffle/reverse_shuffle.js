const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

const getLine = (function () {
    const getLineGen = (async function* () {
        for await (const line of rl) {
            yield line;
        }
    })();
    return async () => ((await getLineGen.next()).value);
})();

/* 
sample usage of getline
async function main(){
    const inputText = await getLine();
    console.log(inputText)
}
main() */

module.exports = {
    getLine : getLine
}



async function main(){
    let lineText = await getLine();
    const inputString = lineText.split(' ')[0];
    reverseShuffle(inputString)
    process.exit();
}

function reverseShuffle(inputString){
    var charMap = solutionCharecterMap(inputString)
    for(var charCode = 97; charCode < 97+26;charCode++){
        if(charMap[String.fromCharCode(charCode)] > 0){
            var char = String.fromCharCode(charCode)
            var charIndex = inputString.lastIndexOf(char)
            charMap[char]--;
            var solutionCharLength = (inputString.length) / 2;
            var result = getLexigraphicallySmallString(inputString, char, charIndex, charMap, solutionCharLength)
            if(result){
                console.log(result)
                process.exit();
            }
        }
    }
}

function getLexigraphicallySmallString(string, char, charIndex, charMap, solutionCharLength){
    var solutionCharLengthObtained = solutionCharLength - 1;
    var solutionString = char;
    var charMapCopy = Object.assign({},charMap)
    var recursiveSolution = ''
    for(var i = charIndex-1;i >= 0 && string.slice(0, i).length+1 > solutionCharLengthObtained && solutionCharLengthObtained > 0;i--){
        var curChar = string[i];
        // console.log(`curChar : ${curChar}`)
        // console.log(`i : ${i}`)
        // console.log(`solutionCharLengthObtained : ${solutionCharLengthObtained}`)
        if(curChar == char){
            recursiveSolution = getLexigraphicallySmallString(string, curChar, i, charMap, solutionCharLength);
        }
        if(charMapCopy[curChar] > 0){
            solutionString = solutionString + curChar;
            charMapCopy[curChar]--;
            solutionCharLengthObtained--;
        }
    }

    if(solutionCharLengthObtained){
        return false;
    }else{
        if(recursiveSolution && solutionString.localeCompare(recursiveSolution) == 1){
            return recursiveSolution;
        }else{
            return solutionString;
        }
    }   
}

function solutionCharecterMap(string){
    var map = {}
    for(var charCode = 97; charCode < 97+26;charCode++){
        map[String.fromCharCode(charCode)] = 0;
    }
    for(var i = 0;i < string.length;i++){
        map[string[i]]++;
    }

    for(var charCode = 97; charCode < 97+26;charCode++){
        map[String.fromCharCode(charCode)] = map[String.fromCharCode(charCode)] / 2;
    }
    return map;
}

// var result = getLexigraphicallySmallString('abcdefgabcdefg', 'a', 7, solutionCharecterMap('abcdefgabcdefg'),7)
// var result = getLexigraphicallySmallString('eggegg', 'e', 3, solutionCharecterMap('eggegg'),3)
// console.log(result)
main()

module.exports = {
    getLexigraphicallySmallString,
    solutionCharecterMap
}