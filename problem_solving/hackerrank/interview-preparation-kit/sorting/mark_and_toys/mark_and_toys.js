const readline = require('readline');
function getEOL() {
    return process.platform == "win32" ? "\r\n" : "\n";
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin.output
})

var arrayLength, lineNumber = 0, totalAmount,toysPrice;
var array = [];
rl.on('line', (input) => {
    lineNumber++;
    if (lineNumber == 1) {
        input = input.replace(getEOL(), '');
        arrayLength = Number(input.split(' ')[0]);
        totalAmount = Number(input.split(' ')[1]);
    } else {
        input = input.replace(getEOL(), '');
        toysPrice = input.split(' ').map(str => Number(str));
        console.log(getMaxToys(toysPrice, totalAmount))
    }
});

function getMaxToys(toysPrice, totalAmount) {
    var maxToys = 0;

    toysPrice = toysPrice.sort(sortFunction);
    
    var consumedCost = 0
    for(var i =0; consumedCost <= totalAmount;i++){
        consumedCost = consumedCost + toysPrice[i];
        maxToys++;
    }

    function sortFunction(a, b){
        return a-b;
    }
    var getMaxToys = require('../mark_and_toys').getMaxToys;
    var chai = require('../../../../../../libs/chai/chai');
    var expect = chai.expect;
    
    describe('getMaxToys', function () {
        it('Testing getMaxToys with different test cases', function () {
            var array = [1, 12, 5, 111, 200, 1000, 10];
            expect(getMaxToys(array, 50)).to.equal(4)
        })
    })
    
    
    return maxToys-1;

}


module.exports = {
    getMaxToys : getMaxToys
}