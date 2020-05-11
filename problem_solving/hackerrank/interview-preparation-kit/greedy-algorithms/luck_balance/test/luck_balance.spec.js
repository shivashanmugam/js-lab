var luckBalance = require('../luck_balance').luckBalance;
var sortTestsByLowLuckAndImportanceTrue = require('../luck_balance').sortTestsByLowLuckAndImportanceTrue;
var chai = require('../../../../../../libs/chai/chai')
var expect = chai.expect;

describe('sortTestsByLowLuckAndImportanceTrue', function () {
    it('sortTestsByLowLuckAndImportanceTrue', function () {
        var array = [7,4,6,1];
        expect(sortTestsByLowLuckAndImportanceTrue(array)).to.eql([1,4,6,7])
    })
})


describe('luckBalance', function () {
    it('luckBalance', function () {
        var array = [1,4,6,7];
        expect(luckBalance(array, 2)).to.eql(5)
    })
})


