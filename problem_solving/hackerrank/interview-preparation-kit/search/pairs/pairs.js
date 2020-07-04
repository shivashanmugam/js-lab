var getLine = require('../../../../../utils/input/input').getLine;

async function main(){
    let firstLine = await getLine();
    firstLine  = firstLine.split(' ').map(str => Number.parseInt(str))
    let target = firstLine[1];
    let values = await getLine()
    values = values.split(' ').map(str => Number.parseInt(str));
    console.log(targetMatchingDiff(values, target))
    process.exit();
}

function targetMatchingDiff (array, target){
    const frequenceArray = frequenceCounting(array);
    let totalMatchingTargets = 0;
    Object.keys(frequenceArray).forEach((key) => {
            var targetKey = Number.parseInt(key) + target 
            if(frequenceArray[targetKey]){
                totalMatchingTargets = totalMatchingTargets + Math.min(frequenceArray[key], frequenceArray[targetKey])
            }
    })
    return totalMatchingTargets;
}

function frequenceCounting(array){
    var frequenceArray = {}
    for(var i = 0; i < array.length; i++){
        if(!frequenceArray[array[i]]) frequenceArray[array[i]] = 0
        frequenceArray[array[i]]++
    }
    return frequenceArray;
}


main()

module.exports = {
    targetMatchingDiff : targetMatchingDiff,
    frequenceCounting : frequenceCounting
}