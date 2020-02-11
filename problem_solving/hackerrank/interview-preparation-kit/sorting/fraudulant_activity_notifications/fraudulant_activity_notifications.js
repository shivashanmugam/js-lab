const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})

var arrayLength, lineNumber = 0, totalDays, allTransactions;
var array = [];
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        arrayLength = Number(input.split(' ')[0]);
        totalDays = Number(input.split(' ')[1]);
    } else {
        input = input.replace(getEOL(), '');
        allTransactions = input.split(' ').map(str => Number(str));
        console.log(getTotalFraudNotifications(allTransactions, totalDays))
        process.exit()
    }
});

function getTotalFraudNotifications(allTransactions, numberOfDays) {
    var totalFraudNotifications = 0;
    var sortedArray;
    var medianEval, median;
    var indexOfElemToRemove;

    if(numberOfDays % 2 == 0){
        medianEval = `(sortedArray[(numberOfDays / 2) - 1] + sortedArray[(numberOfDays / 2)]) / 2`
    } else {
        medianEval = `sortedArray[Math.floor(numberOfDays / 2)]`
    }
    
    sortedArray = allTransactions.slice(0, numberOfDays).sort(intComparator);
    for(var i = numberOfDays;i < allTransactions.length;i++){

        median = eval(medianEval);
        if(allTransactions[i] >= median*2){
            totalFraudNotifications++;
        }
        indexOfElemToRemove = sortedArray.indexOf(allTransactions[i-numberOfDays]);
        sortedArray.splice(indexOfElemToRemove, 1);
        binarySortInsert(sortedArray, allTransactions[i], numberOfDays-1)
    }
    return totalFraudNotifications;
}

function binarySortInsert(array, value, arrayLength){
    var left =  0;
    var right = arrayLength - 1;
    var placeToInsert;
    var pivot;
    while(left < right){
        pivot = Math.floor((left + right) / 2 )
        if(array[pivot] > value){
            right = pivot - 1;
        }else if(array[pivot] < value){
            left = pivot + 1;
        }else{
            placeToInsert = pivot;
            break;
        }
    }

    if(placeToInsert){
        array.splice(placeToInsert, 0 , value)
    }else {
        if(array[left] > value){
            array.splice(left, 0 , value)
        }else{
            array.splice(left+1, 0 , value)
        }
    }
}

function intComparator(a, b){
    return a-b;
}


module.exports = {
    getTotalFraudNotifications : getTotalFraudNotifications,
    binarySortInsert : binarySortInsert
}