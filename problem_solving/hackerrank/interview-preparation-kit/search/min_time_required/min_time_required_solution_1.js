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
    var machineDays = {};
    values = values.split(' ').map(str =>{
        if(machineDays[str] == undefined) machineDays[str] = 0;
        machineDays[str]++;
    });
    console.log(minTimeRequired(machineDays, target))


    /* fs.readFile('./input.txt', 'UTF8',function(err, values){
        if(err) throw err;
        var machineDays = {};
        values = values.split(' ').map(str =>{
            if(machineDays[str] == undefined) machineDays[str] = 0;
            machineDays[str]++;
        });
        console.log(minTimeRequired(machineDays, 923832496))
        process.exit();
    }) */
}

function minTimeRequired (machineDays, targetProduction){
    let machineDaysArray = Object.keys(machineDays).map(mD => Number.parseInt(mD))
    let lcmDayProduced = 0;
    let gcdMachineDay = FindGCD(machineDaysArray);
    let day = gcdMachineDay;
    let lcm = FindLCM(machineDaysArray);
    let dayProductionMapping = {}

    machineDaysArray.forEach(function(m){
        lcmDayProduced = lcmDayProduced + ((lcm / m) * machineDays[m])
    })
    
    if(lcmDayProduced > targetProduction){
        let produced = 0
        for(; day <= lcm;day = day + gcdMachineDay){
            machineDaysArray.every(m => {
                if(day % m == 0){
                    produced = produced + machineDays[m];
                    return true;//continue
                }
                return true;//continue
            })
            dayProductionMapping[day] = produced;
            if(produced >= targetProduction){
                return day;
            }
        }
    } else if(lcmDayProduced == targetProduction){
        return lcm;
    }
    let quotient =  (targetProduction / lcmDayProduced);
    let quotientDay = (Number.parseInt(quotient) * lcm);
    let reminder = (targetProduction % lcmDayProduced);
    let reminderDay = 0
    let produced = 0    
    for(; day <= lcm;day = day + gcdMachineDay){
        machineDaysArray.every(m => {
            if(day % m == 0){
                produced = produced + machineDays[m];
                if(produced >= reminder){
                    reminderDay = day;
                    return false
                }
                return true;//continue
            }
            return true;//continue
        })
        if(reminderDay){ return quotientDay + reminderDay}
    }

    // let reminderDay = 0
    // let reminderDay = Number.parseInt((reminder / lcmDayProduced) * lcm)
    // Object.keys(dayProductionMapping).every(day => {
    //     if(dayProductionMapping[day] >= reminder){
    //         reminderDay = day;
    //         return false;
    //     }
    //     return true;
    // })
    console.log(`quotient ${quotient}`)
    console.log(`quotientDay ${quotientDay}`)
    console.log(`lcmDayProduced ${lcmDayProduced}`)
    console.log(`reminder ${reminder}`)
    console.log(`reminderDay ${reminderDay}`)
    console.log(`targetproduction ${targetProduction}`)
    return Number.parseInt(quotientDay) + Number.parseInt(reminderDay);
}

// Least or Lowest Common multipler or two numbers
function LCM(a,b){
    return (a * b) / GCD(a,b)
}

// Least or Lowest Common multipler or more than two numbers
function FindLCM(array){
    var result = array[0]
    array.forEach(n => {
        result = LCM(result, n)
    })
    return result;    
}

// Least or Greatest Common Divider or more than two numbers
function FindGCD(array){
    var result = array[0];
    for(var i = 1 ; i < array.length;i++){
        if(result == 1) return 1;
        result = GCD(array[i], result)
    }
    return result;
}

// Least or Greatest Common Divider of two numbers
function GCD(a, b) {
    if ( ! b) {
        return a;
    }
    return GCD(b, a % b);
};
  


main()

module.exports = {
    minTimeRequired : minTimeRequired,
    LCM : LCM,
    GCD: GCD,
    FindGCD : FindGCD,
    FindLCM : FindLCM
}