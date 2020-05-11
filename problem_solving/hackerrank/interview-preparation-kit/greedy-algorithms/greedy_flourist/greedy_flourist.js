var getLine = require('../../../../../utils/input/input').getLine;

async function main(){
    let lineText = await getLine();
    const [flowerCount, friendCount] = lineText.split(' ').map( str => Number.parseInt(str));
    
    lineText = await getLine();
    const flowerPrice = lineText.split(' ').map( str => Number.parseInt(str));
    console.log(minimumCostCalculation(friendCount, flowerPrice))
    process.exit();
}

function minimumCostCalculation(friends, flowersPriceList){
    flowersPriceList = flowersPriceList.sort((a,b) => {return b-a})
    let minPrice = 0, frindsBuyCycle = 0;
    for(let i = 0;i < flowersPriceList.length;){
        for(let j = 0;i < flowersPriceList.length && j < friends;j++,i++){
            minPrice = minPrice + ((frindsBuyCycle + 1)* flowersPriceList[i]);
        }
        frindsBuyCycle++;
    }
    return minPrice
}


main()
module.exports = {
    minimumCostCalculation:minimumCostCalculation
}