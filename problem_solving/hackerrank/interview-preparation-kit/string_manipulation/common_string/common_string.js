const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})

var lineNumber = 0, s1, s2;
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        s1 = input.replace(getEOL(), '');
    }
    if(lineNumber == 2){
        s2 = input.replace(getEOL(), '');
        commonString(s1, s2)
    }
});

function commonString(s1, s2){
    var s1_index = 0, s2_index = 0;
    var num_of_characters_deleted = 0;
    for(var subStringLen = 1;subStringLen <= s1.length;subStringLen++){
        for(var delete_at = 0; delete_at <= (s1.length - subStringLen + 1);delete_at++){
            for(var deleteLength = 0;deleteLength <= (s1.length + 2 - (subStringLen + delete_at));deleteLength++ ){
                
            }
        }
    }
}
//                         SHINCHAN,  2,           3,             0,                 5
function generateSubstring(string, deleteAt, deleteLength, subStringStartIndex, subStringLength){
    // 0 1 [2 3 4] 5 6 7
    // S H [I N C] H A N => SH + HAN

    // subString_1 = substring starting index to delete_at  // S H
    // subString_2 = (deleteAt + deleting String length) to remaining subStringLength to cover
    return string.slice(subStringStartIndex, deleteAt) + 
            string.slice(deleteAt+deleteLength, (deleteAt+deleteLength + (subStringLength - string.slice(subStringStartIndex, deleteAt).length)))
} 




module.exports = {
    commonString : commonString,
    generateSubstring : generateSubstring
}


