var getLine = require('../../../../../utils/input/input').getLine;

async function main(){
    let lineText = await getLine();
    const [testCount, maximumImportantTestToLose] = lineText.split(' ').map( str => Number.parseInt(str));
    const testDetails = []
    let luckByNonImportantTests = 0;
    for(let i = 0;i < testCount;i++){
        lineText = await getLine();
        const [testLuck, isImportant] = lineText.split(' ').map( str => Number.parseInt(str));
        if(isImportant){
            testDetails.push(testLuck);
        }else{
            luckByNonImportantTests  = luckByNonImportantTests + testLuck;
        }
    }

    console.log(luckByNonImportantTests + luckBalance(testDetails, maximumImportantTestToLose))
    process.exit();
}

function luckBalance(testDetails, maximumImportantTestToLose){
    testDetails = sortTestsByLowLuckAndImportanceTrue(testDetails)
    let luckSaved = 0;
    let luckSpent = 0;
    testDetails.forEach((testLuck) => {
        if(maximumImportantTestToLose-- > 0){
            luckSaved = luckSaved + testLuck;
        }else{
            luckSpent = luckSpent + testLuck;
        }
    });
    return luckSaved - luckSpent;
}

function sortTestsByLowLuckAndImportanceTrue(tests){
    tests.sort((testObjA, testObjB) => {
        return testObjB - testObjA;
    });
    return tests;
}

main()
module.exports = {
    luckBalance,
    sortTestsByLowLuckAndImportanceTrue
}