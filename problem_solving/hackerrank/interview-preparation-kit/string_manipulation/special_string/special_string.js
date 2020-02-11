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
    var toCheckSpecialCase = '';
    var totalSpecialStrings = 0
    var aggreateToRemove = 0; 
    for(var start = 0, end = 1;end < string.length;){
        if((end - start) <= toCheckSpecialCase.length){
            if(string.slice(start+1, end+1) == toCheckSpecialCase.slice(toCheckSpecialCase.length-(end - start), toCheckSpecialCase.length)){
                totalSpecialStrings++;
            }else{
                if(string[end] == string[start-1]){
                    totalSpecialStrings++;
                }
                toCheckSpecialCase = '';
            }
            if((end - start) == toCheckSpecialCase.length){
                toCheckSpecialCase = '';
            }
        }
        if(string[start] == string[end]){
            end++;
            aggreateToRemove = (( ((end - start) * (end - start + 1)) / 2) - (end - start))
        } else {
            totalSpecialStrings = ( totalSpecialStrings + (( ((end - start) * (end - start + 1)) / 2) - (end - start)) ) // (n(n+1) / 2 ) - n // the minus n is to omit single character count
            
            if(toCheckSpecialCase[0] != string[end]){
                toCheckSpecialCase = string.slice(start, end);
            }
            start = end;
            end++;
            aggreateToRemove = 0;
        }
    }
    totalSpecialStrings += string.length + aggreateToRemove;
    
    
    return totalSpecialStrings;
}


module.exports = {
    getTotalSpecialStrings: getTotalSpecialStrings
}