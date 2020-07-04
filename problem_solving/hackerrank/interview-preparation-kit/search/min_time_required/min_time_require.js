const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

const getLine = (function () {
    const getLineGen = (async function* () {
        for await (const line of rl) {
            yield line;
        }
    })();
    return async () => ((await getLineGen.next()).value);
})();


async function main(){
    let firstLine = await getLine();
    firstLine  = firstLine.split(' ').map(str => Number.parseInt(str))
    let target = firstLine[1];
    let values = await getLine()
    var machineDays = values.split(' ').map(m => Number.parseInt(m));
    // values = values.split(' ').map(str =>{
    //     if(machineDays[str] == undefined) machineDays[str] = 0;
    //     machineDays[str]++;
    // });
    console.log(minTimeRequired(machineDays, target))
}

function minTimeRequired (machineDays, targetProduction){
    machineDays.sort((a,b)=> a-b )
    let minDay = parseInt(targetProduction / machineDays.length) * machineDays[0]
    let maxDay = (parseInt(targetProduction / machineDays.length) +1) * machineDays[machineDays.length - 1]
    while(minDay < maxDay){
        let midDay = parseInt((minDay + maxDay) / 2);
        let cur_production = 0;
        for(var i = 0;i < machineDays.length;i++){
            cur_production  += parseInt(midDay / machineDays[i])
        }
        if(cur_production >= targetProduction){
            maxDay = midDay
        }else if(cur_production < targetProduction){
            minDay = midDay + 1;
        }
    }
    return minDay;
}



main()

module.exports = {
    minTimeRequired : minTimeRequired
}