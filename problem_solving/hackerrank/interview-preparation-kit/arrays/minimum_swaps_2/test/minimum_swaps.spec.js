var getMinSwaps = require('../minimum_swaps').getMinSwaps;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('getMinSwaps', function () {
    it('Testing getMinSwaps with different test cases', function () {
        var array = [1,3,5,2,4,6,7];
        expect(getMinSwaps(array, 7)).to.equal(3)
    })
})

