const isCharacterPresentInString = function (string, char) {
    return string.includes(char);
}

const generateSubString = function (string, startIndex, endIndex) {
    return string.slice(startIndex, endIndex);
}

function longestSubstring(input) {
    //           0123456789
    var longestSubstringLength = 0;
    // iterate through all the sequences from start
    for (let sequenceStart = 0; sequenceStart < input.length; sequenceStart++) {
        for (let sequenceEnd = sequenceStart + 1; sequenceEnd <= input.length; sequenceEnd++) {
            const subString = generateSubString(input, sequenceStart, sequenceEnd);


            if (subString.length > longestSubstringLength) {
                console.log(subString)
                longestSubstringLength = subString.length;
            }

            const nextLetter = input[sequenceEnd];
            // if we include next character the current substring is not anymore having non repeable characters
            if (isCharacterPresentInString(subString, nextLetter)) {
                const repeatedCharacterIndexInSubString = subString.indexOf(nextLetter);
                //change of seqeuence, Now sequence will start from next character of the repeated characters
                sequenceStart = sequenceStart + repeatedCharacterIndexInSubString;
                break;
            }
        }
    }
    console.log(longestSubstringLength)
}



longestSubstring('pwwkew')

