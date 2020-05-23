var getLine = require('../../../../../utils/input/input').getLine;

async function main(){
    let testCases = await getLine();
    for(var i = 0; i < testCases;i++){
        let money = await getLine();money = Number.parseInt(money);
        let flavs = await getLine();flavs = Number.parseInt(flavs);
        let flavCost = await getLine();flavCost = flavCost.split(' ').map((str)=>Number.parseInt(str))
        let flavIndex = getFlavIndex(money, flavs, flavCost);
        console.log(flavIndex.i, flavIndex.j)
    }
    
    process.exit();
}

function getFlavIndex (money, flavs, flavCost){
    var flavIndex = {}
    for(let i = 0;i < flavs;i++){
        remaining = money - flavCost[i];
        if(flavIndex[remaining] != undefined){
            return {i:flavIndex[remaining]+1, j:i+1}
        }
        if(flavIndex[flavCost[i]] == undefined){
            flavIndex[flavCost[i]] = i
        }
    }
}


main()

module.exports = {
    getFlavIndex : getFlavIndex
}