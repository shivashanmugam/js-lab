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
        console.log(commonString(s1, s2))
    }
});

function commonString(s1, s2) {
    const s1Length = s1.length;
    const s2Length = s2.length;
    const lengthTable = [...Array(s1Length+1)].map(x=>Array(s2Length+1).fill(0))       
    for(var i = 0;i< s1Length;i++){
      lengthTable[0][i] = 0;
      lengthTable[i][0] = 0
    }
    for(var j = 1;j <= s1Length;j++){
      for(var i = 1;i <= s1Length;i++){
        if(checkChar(s1[i-1], s2[j-1])){
          lengthTable[i][j] = Math.max(lengthTable[i-1][j-1]) + checkChar(s1[i-1], s2[j-1])
        }else{
          lengthTable[i][j] = Math.max(lengthTable[i-1][j], lengthTable[i][j-1])  
          
        }
      }
      
    }
    // arr = lengthTable;
    // arrText = ''
    // for (var i = 0; i < arr.length; i++) {
    //   for (var j = 0; j < arr[i].length; j++) {
    //       arrText+=arr[i][j]+' ';
    //   }
    //   console.log(arrText);
    //   arrText='';
    // }
    return lengthTable[s1Length][s2Length]
  }

function checkChar(charA, charB){
  if(charA == charB) return 1
  else return 0
}


module.exports = {
    commonString : commonString
}


