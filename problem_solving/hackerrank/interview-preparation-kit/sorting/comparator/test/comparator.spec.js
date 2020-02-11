
var getMaxToys = require('../mark_and_toys').getMaxToys;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('getMaxToys', function () {
    it('Testing getMaxToys with different test cases', function () {
        var array = [1, 12, 5, 111, 200, 1000, 10];
        expect(getMaxToys(array, 50)).to.equal(4)
    })
})

