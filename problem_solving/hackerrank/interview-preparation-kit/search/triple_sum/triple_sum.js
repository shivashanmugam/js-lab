// THIS IS ONE OF THE FAVIOURITE BECAUSE THE IMPROVISATION FROM BRUTE FORCE IS JUST AMAZING

var getLine = require('../../../../../utils/input/input').getLine;

async function main(){
    let arrayLengthAll = await getLine();
    let line = await getLine();
    let arrayP = line.split(' ').map(str => Number.parseInt(str))
    line = await getLine();
    let arrayQ = line.split(' ').map(str => Number.parseInt(str))
    line = await getLine();
    let arrayR = line.split(' ').map(str => Number.parseInt(str))
    console.log(DistinctTripletCount(arrayP, arrayQ, arrayR))
    process.exit();
}

function DistinctTripletCount (arrayP, arrayQ, arrayR){
    


    /* SOLUTION 1 => 
    arrayQ = eliminateNumbersSmallerThanTargetAlsoEliminateRedundantNumber(arrayQ, findSmallestBigInTwoArray(arrayP, arrayR))
    maxQ = Math.max(...arrayQ);
    arrayP = eliminateNumbersBiggerThanTargetAndAlsoEliminateRedundantNumber(arrayP, maxQ)
    arrayR = eliminateNumbersBiggerThanTargetAndAlsoEliminateRedundantNumber(arrayR, maxQ)
    let distictTriplets = {}
    for(let i = 0; i < arrayP.length;i++){
        for(let j = 0; j < arrayQ.length;j++){
            if(arrayP[i] > arrayQ[j]) continue;
            for(let k = 0; k < arrayR.length;k++){
                if(arrayR[k] > arrayQ[j]) continue;
                distictTriplets[`${arrayP[i]}${arrayQ[j]}${arrayR[k]}`] = 1
            }
        }
    }
    return Object.keys(distictTriplets).length; */

    /* SOLUTION 2 */
    arrayQ = [...new Set(arrayQ)].sort(function(a,b){
        return a - b 
    })
    arrayP = [...new Set(arrayP)].sort(function(a,b){
        return a - b 
    })
    arrayR = [...new Set(arrayR)].sort(function(a,b){
        return a - b 
    })
    
    let possibleMappingOfQ = {}
    let result = 0
    let i = 0, j = 0;
    arrayQ.forEach((q, index) => {
        if(index != 0){
            possibleMappingOfQ[q] = [...possibleMappingOfQ[arrayQ[index - 1]]]
        }else{
            possibleMappingOfQ[q] = [0,0]
        }
        let p, r;
        for(;i < arrayP.length;i++){
            p = arrayP[i]
            if(p <= q) {
                possibleMappingOfQ[q][0]++;
            }else break;
        }
        
        for(;j < arrayR.length;j++){
            r = arrayR[j]
            if(r <= q) {
                possibleMappingOfQ[q][1]++;
            }else break;
        }
        result = result + (possibleMappingOfQ[q][0] * possibleMappingOfQ[q][1])
    })
    return result;
}

function eliminateNumbersSmallerThanTargetAlsoEliminateRedundantNumber(array, target){
    var newArray = []
    var numberMapping = {};
    array.forEach(a => {
        if(a >= target) {
            if(numberMapping[a] == undefined){ // ensuring no redundant values in new array
                newArray.push(a)
                numberMapping[a] = 1
            }
        }
    })
    return newArray
}

function eliminateNumbersBiggerThanTargetAndAlsoEliminateRedundantNumber(array, target){   
    let newArray = [];
    let numberMapping = {};
    array.forEach(a => {
        if(a <= target) { 
            if(numberMapping[a] == undefined){ // ensuring no redundant values in new array
                newArray.push(a)
                numberMapping[a] = 1
            }
        }
    })
    return newArray
}

// finding the biggest among smallest number of each array
function findSmallestBigInTwoArray(a,b){
    let minA = Math.min(...a)
    let minB = Math.min(...b)
    let returnValue = (minA > minB) ? minA : minB
    return returnValue;
}

main()

module.exports = {
    findSmallestBigInTwoArray : findSmallestBigInTwoArray,
    eliminateNumbersSmallerThanTargetAlsoEliminateRedundantNumber: eliminateNumbersSmallerThanTargetAlsoEliminateRedundantNumber,
    eliminateNumbersBiggerThanTargetAndAlsoEliminateRedundantNumber: eliminateNumbersBiggerThanTargetAndAlsoEliminateRedundantNumber,
    DistinctTripletCount:DistinctTripletCount
}