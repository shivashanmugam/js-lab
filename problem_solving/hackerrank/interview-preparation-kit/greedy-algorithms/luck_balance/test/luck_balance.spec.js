var min_absolute_diff_array = require('../luck_balance').luckBalance;
var chai = require('../../../../../../libs/chai/chai')
var expect = chai.expect;

describe('luckBalance', function () {
    it('luckBalance', function () {
        var array = [7,4,6,1];
        expect(luckBalance(array)).to.eql(1)
        expect(luckBalance(["-59", "-36", "-13", "1", "-53", "-92", "-2", "-96", "-54", "75"])).to.eql(1)
    })
})


