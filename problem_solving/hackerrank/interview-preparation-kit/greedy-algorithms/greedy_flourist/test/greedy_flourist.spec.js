var minimumCostCalculation = require('../greedy_flourist').minimumCostCalculation;
var chai = require('../../../../../../libs/chai/chai')
var expect = chai.expect;

describe('minimumCostCalculation', function () {
    it('minimumCostCalculation', function () {
        var array = [1, 3, 5, 7, 9];
        expect(minimumCostCalculation(3, array)).to.be.equal(29)
    })
})


